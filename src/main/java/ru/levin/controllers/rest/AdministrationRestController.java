package ru.levin.controllers.rest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;
import ru.levin.dao.AdministrationEmployeeDao;
import ru.levin.dao.exceptions.EntityAlreadyExistsException;
import ru.levin.dao.exceptions.EntityNotFoundException;
import ru.levin.entities.AdministrationEmployee;

import javax.inject.Inject;
import java.util.List;

@RestController
@RequestMapping("/api/administration")
public class AdministrationRestController extends BaseRestController {
    @Inject
    private AdministrationEmployeeDao administrationEmployeeDao;

    @GetMapping("")
    public List<AdministrationEmployee> all() {
       return administrationEmployeeDao.getAll();
    }

    @PostMapping("")
    @Secured("ROLE_ADMIN")
    public AdministrationEmployee add(@RequestBody AdministrationEmployee administrationEmployee) throws EntityAlreadyExistsException
    {
        return administrationEmployeeDao.add(administrationEmployee);
    }

    @GetMapping("{id}")
    public AdministrationEmployee getById(@PathVariable("id") Long id) throws EntityNotFoundException {
        return administrationEmployeeDao.getById(id);
    }

    @PutMapping("{id}")
    @Secured("ROLE_ADMIN")
    public ResponseEntity<AdministrationEmployee> edit(@RequestBody AdministrationEmployee administrationEmployee, @PathVariable long id) throws EntityNotFoundException {
        if (id != administrationEmployee.getId())
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        AdministrationEmployee edited = administrationEmployeeDao.edit(administrationEmployee);
        return ResponseEntity.ok(edited);
    }

    @DeleteMapping("{id}")
    @Secured("ROLE_ADMIN")
    public AdministrationEmployee delete(@PathVariable Long id) throws Exception {
        return administrationEmployeeDao.deleteById(id);
    }
}
