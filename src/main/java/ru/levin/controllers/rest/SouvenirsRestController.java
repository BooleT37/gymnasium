package ru.levin.controllers.rest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.levin.dao.SouvenirDao;
import ru.levin.entities.Souvenir;

import javax.inject.Inject;
import java.util.List;

@RestController
@RequestMapping("/api/souvenirs")
public class SouvenirsRestController {
    @Inject
    private SouvenirDao souvenirDao;

    @GetMapping("")
    public List<Souvenir> all() {
        return souvenirDao.getAll();
    }
}
