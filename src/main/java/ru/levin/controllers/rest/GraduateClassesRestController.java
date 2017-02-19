package ru.levin.controllers.rest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.levin.dao.GraduateClassDao;
import ru.levin.entities.GraduateClass;

import javax.inject.Inject;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/graduateClasses")
public class GraduateClassesRestController extends BaseRestController {
    @Inject
    private GraduateClassDao graduateClassDao;

    @GetMapping("")
    public List<GraduateClass> all() {
        return graduateClassDao.getAll();
    }

    @GetMapping("groupByYear")
    public Map<Integer, List<GraduateClass>> groupByYear() {
        return graduateClassDao.getAllGroupedByYear();
    }
}
