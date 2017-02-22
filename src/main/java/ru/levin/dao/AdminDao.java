package ru.levin.dao;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Repository;
import ru.levin.dao.exceptions.EntityAlreadyExistsException;
import ru.levin.dao.exceptions.EntityNotFoundException;
import ru.levin.entities.Admin;

import javax.inject.Named;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Repository
@Named
public class AdminDao implements UserDetailsService {
    @PersistenceContext
    private EntityManager em;

    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    public List<Admin> getAll() {
        return em.createQuery("from " + Admin.class.getName(), Admin.class).getResultList();
    }

    private Admin getByLogin(String login) throws EntityNotFoundException {
        Admin found =  em.find(Admin.class, login);
        if (found == null)
            throw new EntityNotFoundException(String.format("Cannot find admin with login %s", login));
        return found;
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

    @Override
    public UserDetails loadUserByUsername(String login) throws UsernameNotFoundException {
        Admin admin;
        try {
            admin = this.getByLogin(login);
        } catch (EntityNotFoundException ex) {
            logger.warn(String.format("Couldn't find admin with login %s", login));
            throw new UsernameNotFoundException(ex.getMessage());
        }
        List<GrantedAuthority> grantedAuths = new ArrayList<>();
        grantedAuths.add(new SimpleGrantedAuthority("ROLE_ADMIN"));
        return new org.springframework.security.core.userdetails.User(admin.getLogin(), admin.getHashedPassword(), grantedAuths);
    }
}
