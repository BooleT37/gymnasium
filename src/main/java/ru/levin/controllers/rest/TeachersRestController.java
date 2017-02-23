package ru.levin.controllers.rest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;
import ru.levin.dao.TeacherDao;
import ru.levin.dao.exceptions.EntityAlreadyExistsException;
import ru.levin.dao.exceptions.EntityNotFoundException;
import ru.levin.entities.Teacher;

import javax.inject.Inject;
import java.util.List;

@RestController
@RequestMapping("/api/teachers")
public class TeachersRestController extends BaseRestController {
    @Inject
    private TeacherDao teacherDao;

    @GetMapping("")
    public List<Teacher> all() {
        return teacherDao.getAll();
    }

    @PostMapping("")
    @Secured("ROLE_ADMIN")
    public Teacher add(@RequestBody Teacher teacher) throws EntityAlreadyExistsException
    {
        return teacherDao.add(teacher);
    }

    @GetMapping("{id}")
    public Teacher getById(@PathVariable("id") Long id) throws EntityNotFoundException {
        return teacherDao.getById(id);
    }

    @PutMapping("{id}")
    @Secured("ROLE_ADMIN")
    public ResponseEntity<Teacher> edit(@RequestBody Teacher teacher, @PathVariable long id) throws EntityNotFoundException {
        if (id != teacher.getId())
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        Teacher edited = teacherDao.edit(teacher);
        return ResponseEntity.ok(edited);
    }

    @DeleteMapping("{id}")
    @Secured("ROLE_ADMIN")
    public Teacher delete(@PathVariable Long id) throws Exception {
        return teacherDao.deleteById(id);
    }
}
