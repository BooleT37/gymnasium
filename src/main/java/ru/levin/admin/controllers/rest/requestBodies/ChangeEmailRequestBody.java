package ru.levin.admin.controllers.rest.requestBodies;

public class ChangeEmailRequestBody {
    private String email;

    public ChangeEmailRequestBody() {
    }

    public ChangeEmailRequestBody(String email) {
        this.email = email;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
