package ru.levin.dao;


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
        em.persist(employee);
        em.flush();
        return employee;
    }
}
