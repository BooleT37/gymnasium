package ru.levin.controllers.rest;

import org.springframework.web.bind.annotation.*;
import ru.levin.dao.AdminDao;
import ru.levin.dao.SouvenirDao;
import ru.levin.dao.exceptions.EntityNotFoundException;
import ru.levin.entities.Souvenir;
import ru.levin.model.SouvenirOrder;
import ru.levin.orderManagers.SouvenirOrderManager;

import javax.inject.Inject;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/souvenirs")
public class SouvenirsRestController extends BaseRestController {
    @Inject
    private SouvenirDao souvenirDao;
    @Inject
    private AdminDao adminDao;
    @Inject
    private SouvenirOrderManager souvenirOrderManager;

    @GetMapping("")
    public List<Souvenir> all() {
        return souvenirDao.getAll();
    }

    @PostMapping("sendRequest")
    public void sendRequest(@RequestBody SouvenirOrder souvenirOrder) throws EntityNotFoundException, IOException {
        souvenirOrderManager.placeOrder(souvenirOrder);
    }

}
