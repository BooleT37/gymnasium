package ru.levin.admin.tables;


public class SelectPropertyValue {
    private String name;
    private String value;

    SelectPropertyValue(String name, String value) {
        this.name = name;
        this.value = value;
    }

    public String getName() {
        return name;
    }

    public String getValue() {
        return value;
    }
}
