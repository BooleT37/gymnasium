package ru.levin.controllers.rest;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.levin.dao.GraduateClassDao;
import ru.levin.dao.GraduateDao;
import ru.levin.dao.exceptions.EntityAlreadyExistsException;
import ru.levin.dao.exceptions.EntityNotFoundException;
import ru.levin.entities.Graduate;
import ru.levin.entities.GraduateClass;
import ru.levin.model.GraduateOrder;
import ru.levin.model.RestResponse;
import ru.levin.orderManagers.GraduateOrderManager;

import javax.inject.Inject;
import java.util.List;

@RestController
@RequestMapping("/api/graduates")
public class GraduatesRestController extends BaseRestController {
    @Inject
    private GraduateDao graduateDao;
    @Inject
    private GraduateClassDao graduateClassDao;
    @Inject
    private GraduateOrderManager graduateOrderManager;

    @GetMapping("class/{id}")
    public List<Graduate> getAllForClass(@PathVariable("id") Long id) throws EntityNotFoundException {
        GraduateClass graduateClass = graduateClassDao.getById(id);
        return graduateDao.getAllForClass(graduateClass);
    }

    @PostMapping("/add")
    public ResponseEntity<RestResponse<Graduate>> add(@RequestBody Graduate graduate) throws EntityAlreadyExistsException {
        Graduate added = graduateDao.add(graduate);
        return new ResponseEntity<>(new RestResponse<>(true, null, added), HttpStatus.OK);
    }

    @PostMapping("/edit")
    public ResponseEntity<RestResponse<Graduate>> edit(@RequestBody Graduate graduate) throws EntityNotFoundException {
        Graduate edited = graduateDao.edit(graduate);
        return new ResponseEntity<>(new RestResponse<>(true, null, edited), HttpStatus.OK);
    }

    @PostMapping("/delete/{id}")
    public ResponseEntity<RestResponse<Graduate>> delete(@PathVariable Long id) throws EntityNotFoundException {
        Graduate deleted = graduateDao.deleteById(id);
        return new ResponseEntity<>(new RestResponse<>(true, null, deleted), HttpStatus.OK);
    }

    @PostMapping(value = "sendRequest", consumes = MediaType.APPLICATION_JSON_VALUE)
    public RestResponse sendRequest(@RequestBody GraduateOrder graduateOrder) {
        graduateOrderManager.placeOrder(graduateOrder);
        return new RestResponse(true);
    }

}
