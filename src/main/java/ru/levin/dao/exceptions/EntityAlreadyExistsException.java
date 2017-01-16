package ru.levin.dao.exceptions;

public class EntityAlreadyExistsException extends Exception {
    public EntityAlreadyExistsException() {
        super();
    }

    public EntityAlreadyExistsException(String message) {
        super(message);
    }
}
