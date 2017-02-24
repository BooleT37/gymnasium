package ru.levin.admin.controllers.rest.requestBodies;

public class NewAdminRequestBody {
    private String login;
    private String password;
    private String email;
    private boolean subscribed;

    public NewAdminRequestBody() {
    }

    public NewAdminRequestBody(String login, String password, String email, boolean subscribed) {
        this.login = login;
        this.password = password;
        this.email = email;
        this.subscribed = subscribed;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public boolean getSubscribed() {
        return subscribed;
    }

    public void setSubscribed(boolean subscribed) {
        this.subscribed = subscribed;
    }
}
