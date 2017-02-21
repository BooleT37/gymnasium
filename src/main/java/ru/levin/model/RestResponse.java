package ru.levin.model;

public class RestResponse<T> {
    private boolean success;
    private String errorMessage;
    private T entity;

    public RestResponse(boolean success, String errorMessage, T entity) {
        this.success = success;
        this.errorMessage = errorMessage;
        this.entity = entity;
    }

    public RestResponse(boolean success, String errorMessage) {
        this.success = success;
        this.errorMessage = errorMessage;
    }

    public RestResponse(boolean success) {
        this.success = success;
        errorMessage = null;
    }

    public boolean getSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getErrorMessage() {
        return errorMessage;
    }

    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }

    public T getEntity() {
        return entity;
    }

    public void setEntity(T entity) {
        this.entity = entity;
    }
}
