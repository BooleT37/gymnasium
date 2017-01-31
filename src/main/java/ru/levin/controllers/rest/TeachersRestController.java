package ru.levin.controllers.rest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.levin.dao.TeacherDao;
import ru.levin.dao.exceptions.EntityNotFoundException;
import ru.levin.entities.Teacher;
import ru.levin.models.TeacherJson;

import javax.inject.Inject;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/teachers")
public class TeachersRestController {
    @Inject
    private TeacherDao teacherDao;

    @GetMapping("")
    public List<TeacherJson> all() {
        return teacherDao.getAll().stream().map(Teacher::toTeacherJson).collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public TeacherJson getById(@PathVariable("id") Long id) throws EntityNotFoundException {
        return teacherDao.getById(id).toTeacherJson();
    }
}
