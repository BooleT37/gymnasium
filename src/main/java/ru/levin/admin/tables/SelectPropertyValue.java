package ru.levin.admin.tables;


public class SelectPropertyValue<T> {
    private String name;
    private T value;

    public SelectPropertyValue(String name, T value) {
        this.name = name;
        this.value = value;
    }

    public String getName() {
        return name;
    }

    public T getValue() {
        return value;
    }
}
