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

//  password will be needed later
//  private String password;


    @Column(length = 50, nullable = false)
    private String email;

    public Admin() {}

    public Admin(String login, String email) {
        this.login = login;
        this.email = email;
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
}
