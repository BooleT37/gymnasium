package ru.levin.model;

public class RestError<T> {
    private String message;
    private String error;

    public RestError(String message, String error) {
        this.message = message;
        this.error = error;
    }

    public String getMessage() {
        return message;
    }

    public String getError() {
        return error;
    }
}
