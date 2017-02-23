package ru.levin.dao;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;
import ru.levin.dao.exceptions.EntityAlreadyExistsException;
import ru.levin.dao.exceptions.EntityNotFoundException;
import ru.levin.entities.AdministrationEmployee;

import javax.inject.Named;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.util.List;

@Repository
@Named
public class AdministrationEmployeeDao {
    @PersistenceContext
    private EntityManager em;

    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    public AdministrationEmployee getById(Long id) throws EntityNotFoundException {
        AdministrationEmployee found = em.find(AdministrationEmployee.class, id);
        if (found == null)
            throw new EntityNotFoundException(String.format("Cannot find administration employee with id %d", id));
        return found;
    }

    public List<AdministrationEmployee> getAll() {
        return em.createQuery("from " + AdministrationEmployee.class.getName(), AdministrationEmployee.class).getResultList();
    }

    @Transactional
    public AdministrationEmployee add(AdministrationEmployee employee) throws EntityAlreadyExistsException {
        Long id = employee.getId();
        if (id != null) {
            AdministrationEmployee existingClass = em.find(AdministrationEmployee.class, id);
            if (existingClass != null)
                throw new EntityAlreadyExistsException(String.format("Administration employee with id %d already exists", id));
        }
        em.persist(employee);
        em.flush();
        return employee;
    }

    @Transactional
    public AdministrationEmployee edit(AdministrationEmployee employee) throws EntityNotFoundException {
        Long id = employee.getId();
        if (id == null)
            throw new EntityNotFoundException("Administration employee id cannot be null");
        if (em.find(AdministrationEmployee.class, id) == null)
            throw new EntityNotFoundException(String.format("Cannot find administration employee with id %d", id));
        em.merge(employee);
        em.flush();
        return employee;
    }

    @Transactional
    public AdministrationEmployee deleteById(Long id) throws EntityNotFoundException {
        AdministrationEmployee found = em.find(AdministrationEmployee.class, id);
        if (found == null)
            throw new EntityNotFoundException(String.format("Cannot find administration employee with id %d", id));
        em.remove(found);
        return found;
    }

    @Transactional
    public void deleteAll() {
        logger.info("Deleting all " + AdministrationEmployee.class.getName() + " entities");
        em.createQuery("delete from " + AdministrationEmployee.class.getName()).executeUpdate();
        em.createNativeQuery("ALTER TABLE TBL_ADMINISTRATION_EMPLOYEE ALTER COLUMN id RESTART WITH 1").executeUpdate();
    }

    public boolean isEmpty() {
        return em.createQuery("select count(c) from " + AdministrationEmployee.class.getName() + " c", Long.class).getSingleResult().equals(0L);
    }
}
