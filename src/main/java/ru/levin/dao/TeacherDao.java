package ru.levin.dao;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;
import ru.levin.dao.exceptions.EntityAlreadyExistsException;
import ru.levin.dao.exceptions.EntityNotFoundException;
import ru.levin.entities.Teacher;

import javax.inject.Named;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.util.List;

@Repository
@Named
public class TeacherDao {
    @PersistenceContext
    private EntityManager em;

    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    public List<Teacher> getAll() {
        return em.createQuery("from " + Teacher.class.getName(), Teacher.class).getResultList();
    }

    public Teacher getById(Long id) throws EntityNotFoundException {
        Teacher teacher = em.find(Teacher.class, id);
        if (teacher == null)
            throw new EntityNotFoundException(String.format("Cannot find teacher with id %d", id));
        return teacher;
    }

    @Transactional
    public Teacher add(Teacher teacher) throws EntityAlreadyExistsException {
        Long id = teacher.getId();
        if (id != null) {
            Teacher existingClass = em.find(Teacher.class, id);
            if (existingClass != null)
                throw new EntityAlreadyExistsException(String.format("Teacher with id %d already exists", id));
        }
        em.persist(teacher);
        em.flush();
        return teacher;
    }

    @Transactional
    public Teacher edit(Teacher teacher) throws EntityNotFoundException {
        Long id = teacher.getId();
        if (id == null)
            throw new EntityNotFoundException("Teacher id cannot be null");
        if (em.find(Teacher.class, id) == null)
            throw new EntityNotFoundException(String.format("Cannot find teacher with id %d", id));
        em.persist(teacher);
        em.flush();
        return teacher;
    }

    @Transactional
    public void deleteAll() {
        logger.info("Deleting all " + Teacher.class.getName() + " entities");
        List<Long> ids = em.createQuery("select t.id from "  + Teacher.class.getName() + " t", Long.class).getResultList();
        ids.forEach(id -> {
            Teacher found = em.find(Teacher.class, id);
            em.remove(found);
        });
        em.createNativeQuery("ALTER TABLE TBL_TEACHER ALTER COLUMN id RESTART WITH 1").executeUpdate();
    }

    public boolean isEmpty() {
        return em.createQuery("select count(c) from " + Teacher.class.getName() + " c", Long.class).getSingleResult().equals(0L);
    }
}
