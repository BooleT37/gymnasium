package ru.levin.dao;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;
import ru.levin.dao.exceptions.EntityAlreadyExistsException;
import ru.levin.dao.exceptions.EntityNotFoundException;
import ru.levin.entities.Souvenir;

import javax.inject.Named;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.util.List;

@Repository
@Named
public class SouvenirDao {
    @PersistenceContext
    private EntityManager em;

    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    public List<Souvenir> getAll() {
        return em.createQuery("from " + Souvenir.class.getName(), Souvenir.class).getResultList();
    }

    @Transactional
    public Souvenir add(Souvenir souvenir) throws EntityAlreadyExistsException {
        Long id = souvenir.getId();
        if (id != null) {
            Souvenir existingClass = em.find(Souvenir.class, id);
            if (existingClass != null)
                throw new EntityAlreadyExistsException(String.format("Souvenir with id %d already exists", id));
        }
        em.persist(souvenir);
        em.flush();
        return souvenir;
    }

    @Transactional
    public Souvenir edit(Souvenir souvenir) throws EntityNotFoundException {
        Long id = souvenir.getId();
        if (id == null)
            throw new EntityNotFoundException("Souvenir id cannot be null");
        if (em.find(Souvenir.class, id) == null)
            throw new EntityNotFoundException(String.format("Cannot find souvenir with id %d", id));
        em.persist(souvenir);
        em.flush();
        return souvenir;
    }

    @Transactional
    public void deleteAll() {
        logger.info("Deleting all " + Souvenir.class.getName() + " entities");
        em.createQuery("delete from " + Souvenir.class.getName()).executeUpdate();
        em.createNativeQuery("ALTER TABLE TBL_SOUVENIR ALTER COLUMN id RESTART WITH 1").executeUpdate();
    }

    public boolean isEmpty() {
        return em.createQuery("select count(c) from " + Souvenir.class.getName() + " c", Long.class).getSingleResult().equals(0L);
    }
}
