package ru.levin.admin.tables;


public class SelectPropertyValue<T> {
    private T value;
    private String displayName;

    public SelectPropertyValue(T value, String displayName) {
        this.displayName = displayName;
        this.value = value;
    }

    public T getValue() {
        return value;
    }

    public String getDisplayName() {
        return displayName;
    }
}
