package ru.levin;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import ru.levin.entities.Admin;

import javax.annotation.PostConstruct;
import javax.inject.Inject;
import javax.inject.Named;

@Named
public class HeadAdmin {
    @Inject
    private BCryptPasswordEncoder bcryptEncoder;

    private Admin admin;

    @PostConstruct
    private void postConstruct() {
        String hashedPassword = "$2a$10$fPpLalSyfbiRdWjXuAcSieiwn57R5b9lEn/CrGExsXpA3y9Tdwmu.";
        admin = new Admin("BooleT", "BooleT37@mail.ru", hashedPassword);
    }
    public Admin get() {
        return admin;
    }
}
