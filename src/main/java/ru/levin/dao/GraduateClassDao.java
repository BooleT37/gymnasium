package ru.levin.dao;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;
import ru.levin.dao.exceptions.EntityAlreadyExistsException;
import ru.levin.dao.exceptions.EntityNotFoundException;
import ru.levin.entities.GraduateClass;

import javax.inject.Named;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
@Named
public class GraduateClassDao {
    @PersistenceContext
    private EntityManager em;

    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    public GraduateClass getById(Long id) throws EntityNotFoundException {
        GraduateClass graduateClass = em.find(GraduateClass.class, id);
        if (graduateClass == null)
            throw new EntityNotFoundException(String.format("Cannot find graduate class with id %d", id));
        return graduateClass;
    }

    public List<GraduateClass> getAll() {
        return em.createQuery("from " + GraduateClass.class.getName(), GraduateClass.class).getResultList();
    }

    public Map<Integer, List<GraduateClass>> getAllGroupedByYear() {
        List<GraduateClass> resultList = em.createQuery("from " + GraduateClass.class.getName(), GraduateClass.class).getResultList();
        Map<Integer, List<GraduateClass>> map = new HashMap<>();
        for (GraduateClass i : resultList) {
            if (map.containsKey(i.getGraduateYear())) {
                map.get(i.getGraduateYear()).add(i);
            } else {
                List<GraduateClass> newList = new ArrayList<>();
                newList.add(i);
                map.put(i.getGraduateYear(), newList);
            }
        }
        return map;
    }

    @Transactional
    public GraduateClass add(GraduateClass graduateClass) throws EntityAlreadyExistsException {
        Long id = graduateClass.getId();
        if (id != null) {
            GraduateClass existingClass = em.find(GraduateClass.class, id);
            if (existingClass != null)
                throw new EntityAlreadyExistsException(String.format("Graduate class with id %d already exists", id));
        }
        em.persist(graduateClass);
        em.flush();
        return graduateClass;
    }

    @Transactional
    public GraduateClass edit(GraduateClass graduateClass) throws EntityNotFoundException {
        Long id = graduateClass.getId();
        if (id == null)
            throw new EntityNotFoundException("Graduate class id cannot be null");
        if (em.find(GraduateClass.class, id) == null)
            throw new EntityNotFoundException(String.format("Cannot find graduate class with id %d", id));
        em.merge(graduateClass);
        em.flush();
        return graduateClass;
    }

    @Transactional
    public GraduateClass deleteById(Long id) throws EntityNotFoundException {
        GraduateClass found = em.find(GraduateClass.class, id);
        if (found == null)
            throw new EntityNotFoundException(String.format("Cannot find graduate class with id %d", id));
        em.remove(found);
        return found;
    }

    @Transactional
    public void deleteAll() {
        logger.info("Deleting all " + GraduateClass.class.getName() + " entities");
        em.createQuery("delete from " + GraduateClass.class.getName()).executeUpdate();
        em.createNativeQuery("ALTER TABLE TBL_GRADUATE_CLASS ALTER COLUMN id RESTART WITH 1").executeUpdate();
    }

    public boolean isEmpty() {
        return em.createQuery("select count(c) from " + GraduateClass.class.getName() + " c", Long.class).getSingleResult().equals(0L);
    }
}
