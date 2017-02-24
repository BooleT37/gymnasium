package ru.levin.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

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

    @JsonIgnore
    private String hashedPassword;

    @Column(length = 50)
    private String email;

    private boolean subscribed = true;

    public Admin() {}

    public Admin(String login, String hashedPassword, String email, boolean subscribed) {
        this.login = login;
        this.hashedPassword = hashedPassword;
        this.email = email;
        this.subscribed = subscribed;
    }

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

    public boolean isSubscribed() {
        return subscribed;
    }

    public void setSubscribed(boolean subscribed) {
        this.subscribed = subscribed;
    }
}
