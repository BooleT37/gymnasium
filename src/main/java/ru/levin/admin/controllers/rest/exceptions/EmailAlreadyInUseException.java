package ru.levin.admin.controllers.rest.exceptions;


public class EmailAlreadyInUseException extends Exception {
    public EmailAlreadyInUseException(String message) {
        super(message);
    }

    public EmailAlreadyInUseException() {
    }
}
