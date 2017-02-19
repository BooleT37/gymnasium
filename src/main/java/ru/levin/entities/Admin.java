package ru.levin.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TBL_ADMIN")
public class Admin {
    @Id
    @Column(length = 50, nullable = false)
    private String login;

    private String hashedPassword;

    @Column(length = 50, nullable = false)
    private String email;

    public Admin() {}

    public Admin(String login, String email, String hashedPassword) {
        this.login = login;
        this.email = email;
        this.hashedPassword = hashedPassword;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getHashedPassword() {
        return hashedPassword;
    }

    public void setHashedPassword(String hashedPassword) {
        this.hashedPassword = hashedPassword;
    }
}
