package ru.levin.entities.exceptions;


public class WrongGradeException extends Exception {
    public WrongGradeException() {
        super();
    }

    public WrongGradeException(String message) {
        super(message);
    }
}
