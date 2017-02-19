package ru.levin.controllers.rest;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import ru.levin.dao.GraduateClassDao;
import ru.levin.dao.GraduateDao;
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

    @PostMapping(value = "sendRequest", consumes = MediaType.APPLICATION_JSON_VALUE)
    public RestResponse sendRequest(@RequestBody GraduateOrder graduateOrder) {
        graduateOrderManager.placeOrder(graduateOrder);
        return new RestResponse(true);
    }

}
