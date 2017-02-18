package ru.levin.dao;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;
import ru.levin.dao.exceptions.EntityAlreadyExistsException;
import ru.levin.entities.Admin;

import javax.inject.Named;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.util.List;

@Repository
@Named
public class AdminDao {
    @PersistenceContext
    private EntityManager em;

    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    public List<Admin> getAll() {
        return em.createQuery("from " + Admin.class.getName(), Admin.class).getResultList();
    }

    @Transactional
    public Admin add(Admin admin) throws EntityAlreadyExistsException {
        String login = admin.getLogin();
        Admin existingAdmin = em.find(Admin.class, login);
        if (existingAdmin != null)
            throw new EntityAlreadyExistsException(String.format("Admin with login '%s' already exists", login));
        em.persist(admin);
        return admin;
    }

    @Transactional
    public void deleteAll() {
        logger.info("Deleting all " + Admin.class.getName() + " entities");
        em.createQuery("delete from " + Admin.class.getName()).executeUpdate();
    }

    public boolean isEmpty() {
        return em.createQuery("select count(c) from " + Admin.class.getName() + " c", Long.class).getSingleResult().equals(0L);
    }
}
