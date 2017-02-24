package ru.levin.admin.controllers.rest.exceptions;


public class BadRequestException extends Exception {
    public BadRequestException(String message) {
        super(message);
    }

    public BadRequestException() {
    }
}
