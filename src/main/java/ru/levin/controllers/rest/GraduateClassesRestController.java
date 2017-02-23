package ru.levin.controllers.rest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;
import ru.levin.dao.GraduateClassDao;
import ru.levin.dao.exceptions.EntityAlreadyExistsException;
import ru.levin.dao.exceptions.EntityNotFoundException;
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
    public List<GraduateClass> getAll() {
        return graduateClassDao.getAll();
    }

    @GetMapping("/groupByYear")
    public Map<Integer, List<GraduateClass>> groupByYear() {
        return graduateClassDao.getAllGroupedByYear();
    }

    @PostMapping("")
    @Secured("ROLE_ADMIN")
    public GraduateClass add(@RequestBody GraduateClass graduateClass) throws EntityAlreadyExistsException {
        return graduateClassDao.add(graduateClass);
    }

    @GetMapping("{id}")
    public GraduateClass getById(@PathVariable("id") Long id) throws EntityNotFoundException {
        return graduateClassDao.getById(id);
    }

    @PutMapping("{id}")
    @Secured("ROLE_ADMIN")
    public ResponseEntity<GraduateClass> edit(@RequestBody GraduateClass graduateClass, @PathVariable long id) throws EntityNotFoundException {
        if (id != graduateClass.getId())
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        GraduateClass edited = graduateClassDao.edit(graduateClass);
        return ResponseEntity.ok(edited);
    }

    @DeleteMapping("{id}")
    @Secured("ROLE_ADMIN")
    public GraduateClass delete(@PathVariable Long id) throws Exception {
        return graduateClassDao.deleteById(id);
    }
}
