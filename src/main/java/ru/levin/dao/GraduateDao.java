package ru.levin.dao;

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
        em.persist(graduate);
        em.flush();
        return graduate;
    }

    public boolean isEmpty() {
        return em.createQuery("select count(c) from " + GraduateClass.class.getName() + " c", Long.class).getSingleResult().equals(0L);
    }
}