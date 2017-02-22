package ru.levin.controllers.rest;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.web.bind.annotation.*;
import ru.levin.dao.GraduateClassDao;
import ru.levin.dao.GraduateDao;
import ru.levin.dao.exceptions.EntityAlreadyExistsException;
import ru.levin.dao.exceptions.EntityNotFoundException;
import ru.levin.entities.Graduate;
import ru.levin.entities.GraduateClass;
import ru.levin.model.GraduateOrder;
import ru.levin.orderManagers.GraduateOrderManager;

import javax.inject.Inject;
import java.util.List;

@RestController
@RequestMapping("/api/graduates")
@EnableGlobalMethodSecurity(securedEnabled = true)
public class GraduatesRestController extends BaseRestController {
    @Inject
    private GraduateDao graduateDao;
    @Inject
    private GraduateClassDao graduateClassDao;
    @Inject
    private GraduateOrderManager graduateOrderManager;

    @GetMapping("")
    public List<Graduate> getAll(@RequestParam(name = "class", required = false) Long graduateClassId) throws EntityNotFoundException {
        if (graduateClassId != null) {
            GraduateClass graduateClass = graduateClassDao.getById(graduateClassId);
            return graduateDao.getAllForClass(graduateClass);
        } else {
            return graduateDao.getAll();
        }
    }

    @PostMapping("")
    @Secured("ROLE_ADMIN")
    public Graduate add(@RequestBody Graduate graduate) throws EntityAlreadyExistsException {
        return graduateDao.add(graduate);
    }

    @GetMapping("{id}")
    public Graduate getById(@PathVariable("id") Long id) throws EntityNotFoundException {
        return graduateDao.getById(id);
    }

    @PutMapping("{id}")
    @Secured("ROLE_ADMIN")
    public ResponseEntity<Graduate> edit(@RequestBody Graduate graduate, @PathVariable long id) throws EntityNotFoundException {
        if (id != graduate.getId())
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        Graduate edited = graduateDao.edit(graduate);
        return ResponseEntity.ok(edited);
    }

    @DeleteMapping("{id}")
    @Secured("ROLE_ADMIN")
    public Graduate delete(@PathVariable Long id) throws Exception {
        return graduateDao.deleteById(id);
    }

    @PostMapping(value = "sendRequest", consumes = MediaType.APPLICATION_JSON_VALUE)
    public void sendRequest(@RequestBody GraduateOrder graduateOrder) {
        graduateOrderManager.placeOrder(graduateOrder);
    }

}
