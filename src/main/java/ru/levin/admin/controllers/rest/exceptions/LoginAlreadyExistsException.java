package ru.levin.admin.controllers.rest.exceptions;


public class LoginAlreadyExistsException extends Exception {
    public LoginAlreadyExistsException(String message) {
        super(message);
    }

    public LoginAlreadyExistsException() {
    }
}
