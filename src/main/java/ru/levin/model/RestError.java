package ru.levin.model;

public class RestError<T> {
    private String message;

    public RestError(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }
}
