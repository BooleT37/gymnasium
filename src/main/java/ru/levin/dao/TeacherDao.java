package ru.levin.dao;


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

    public List<Teacher> getAll() {
        return em.createQuery("from " + Teacher.class.getName(), Teacher.class).getResultList();
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
}
