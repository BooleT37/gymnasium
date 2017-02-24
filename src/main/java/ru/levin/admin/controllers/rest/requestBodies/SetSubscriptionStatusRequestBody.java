package ru.levin.admin.controllers.rest.requestBodies;


public class SetSubscriptionStatusRequestBody {
    private String login;
    private boolean status;

    public SetSubscriptionStatusRequestBody() {
    }

    public SetSubscriptionStatusRequestBody(String login, boolean status) {
        this.login = login;
        this.status = status;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public boolean getStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }
}
