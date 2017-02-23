package ru.levin.controllers.rest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;
import ru.levin.dao.SouvenirDao;
import ru.levin.dao.exceptions.EntityAlreadyExistsException;
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
    private SouvenirOrderManager souvenirOrderManager;

    @GetMapping("")
    public List<Souvenir> all() {
        return souvenirDao.getAll();
    }

    @PostMapping("")
    @Secured("ROLE_ADMIN")
    public Souvenir add(@RequestBody Souvenir souvenir) throws EntityAlreadyExistsException
    {
        return souvenirDao.add(souvenir);
    }

    @GetMapping("{id}")
    public Souvenir getById(@PathVariable("id") Long id) throws EntityNotFoundException {
        return souvenirDao.getById(id);
    }

    @PutMapping("{id}")
    @Secured("ROLE_ADMIN")
    public ResponseEntity<Souvenir> edit(@RequestBody Souvenir souvenir, @PathVariable long id) throws EntityNotFoundException {
        if (id != souvenir.getId())
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        Souvenir edited = souvenirDao.edit(souvenir);
        return ResponseEntity.ok(edited);
    }

    @DeleteMapping("{id}")
    @Secured("ROLE_ADMIN")
    public Souvenir delete(@PathVariable Long id) throws Exception {
        return souvenirDao.deleteById(id);
    }
    
    @PostMapping("sendRequest")
    public void sendRequest(@RequestBody SouvenirOrder souvenirOrder) throws EntityNotFoundException, IOException {
        souvenirOrderManager.placeOrder(souvenirOrder);
    }

}
