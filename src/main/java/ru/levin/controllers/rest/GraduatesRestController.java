package ru.levin.controllers.rest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.levin.dao.GraduateClassDao;
import ru.levin.dao.GraduateDao;
import ru.levin.dao.exceptions.EntityNotFoundException;
import ru.levin.entities.Graduate;
import ru.levin.entities.GraduateClass;

import javax.inject.Inject;
import java.util.List;

@RestController
@RequestMapping("/api/graduates")
public class GraduatesRestController {
    @Inject
    private GraduateDao graduateDao;
    @Inject
    private GraduateClassDao graduateClassDao;

    @GetMapping("class/{id}")
    public List<Graduate> getAllForClass(@PathVariable("id") Long id) throws EntityNotFoundException {
        GraduateClass graduateClass = graduateClassDao.getById(id);
        return graduateDao.getAllForClass(graduateClass);
    }
}
