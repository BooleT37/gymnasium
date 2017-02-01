package ru.levin.controllers.rest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.levin.dao.AdministrationEmployeeDao;
import ru.levin.entities.AdministrationEmployee;

import javax.inject.Inject;
import java.util.List;

@RestController
@RequestMapping("/api/administration")
public class AdministrationRestController {
    @Inject
    private AdministrationEmployeeDao administrationEmployeeDao;

    @GetMapping("")
    public List<AdministrationEmployee> all() {
       return administrationEmployeeDao.getAll();
    }
}
