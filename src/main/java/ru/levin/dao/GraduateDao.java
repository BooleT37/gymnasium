package ru.levin.dao;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;
import ru.levin.dao.exceptions.EntityAlreadyExistsException;
import ru.levin.dao.exceptions.EntityNotFoundException;
import ru.levin.entities.Graduate;
import ru.levin.entities.GraduateClass;

import javax.inject.Named;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.util.List;

@Repository
@Named
public class GraduateDao {
    @PersistenceContext
    private EntityManager em;

    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    public Graduate getById(Long id) throws EntityNotFoundException {
        Graduate found = em.find(Graduate.class, id);
        if (found == null)
            throw new EntityNotFoundException(String.format("Cannot find graduate with id %d", id));
        return found;
    }

    public List<Graduate> getAll() {
        return em.createQuery("from " + Graduate.class.getName(), Graduate.class).getResultList();
    }

    public List<Graduate> getAllForClass(GraduateClass graduateClass) {
        return em.createQuery("from " + Graduate.class.getName() + " where graduateClass = :graduateClass", Graduate.class)
                .setParameter("graduateClass", graduateClass)
                .getResultList();
    }

    @Transactional
    public Graduate add(Graduate graduate) throws EntityAlreadyExistsException {
        Long graduateId = graduate.getId();
        if (graduateId != null)
            if (em.find(Graduate.class, graduateId) != null)
                throw new EntityAlreadyExistsException(String.format("Graduate with id %d already exists", graduateId));
        em.persist(graduate);
        em.flush();
        return graduate;
    }

    @Transactional
    public Graduate edit(Graduate graduate) throws EntityNotFoundException {
        Long graduateId = graduate.getId();
        if (graduateId == null)
            throw new EntityNotFoundException("Graduate id cannot be null");
        if (em.find(Graduate.class, graduateId) == null)
            throw new EntityNotFoundException(String.format("Cannot find graduate with id %d", graduateId));
        em.merge(graduate);
        em.flush();
        return graduate;
    }

    @Transactional
    public Graduate deleteById(Long id) throws EntityNotFoundException {
        Graduate found = em.find(Graduate.class, id);
        if (found == null)
            throw new EntityNotFoundException(String.format("Cannot find graduate with id %d", id));
        em.remove(found);
        return found;
    }

    @Transactional
    public void deleteAll() {
        logger.info("Deleting all " + Graduate.class.getName() + " entities");
        em.createQuery("delete from " + Graduate.class.getName()).executeUpdate();
        em.createNativeQuery("ALTER TABLE TBL_GRADUATE ALTER COLUMN id RESTART WITH 1").executeUpdate();
    }

    public boolean isEmpty() {
        return em.createQuery("select count(c) from " + Graduate.class.getName() + " c", Long.class).getSingleResult().equals(0L);
    }
}
