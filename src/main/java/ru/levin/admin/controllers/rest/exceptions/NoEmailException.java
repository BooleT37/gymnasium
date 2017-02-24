package ru.levin.admin.controllers.rest.exceptions;


public class NoEmailException extends Exception {
    public NoEmailException(String message) {
        super(message);
    }

    public NoEmailException() {
    }
}
