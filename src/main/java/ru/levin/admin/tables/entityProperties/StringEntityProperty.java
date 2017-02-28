package ru.levin.admin.tables.entityProperties;


import ru.levin.admin.tables.PropertyType;

public class StringEntityProperty extends EntityProperty {
    private int maxLength = 255;

    public StringEntityProperty(String name, String columnName) {
        super(name, columnName, PropertyType.STRING);
    }

    public StringEntityProperty(String name, String columnName, Integer width) {
        super(name, columnName, width, PropertyType.STRING);
    }

    public StringEntityProperty(String name, String columnName, boolean nullable) {
        super(name, columnName, nullable, PropertyType.STRING);
    }

    public StringEntityProperty(String name, String columnName, Integer width, int maxLength) {
        super(name, columnName, width, PropertyType.STRING);
        this.maxLength = maxLength;
    }

    public StringEntityProperty(String name, String columnName, boolean nullable, Integer width, int maxLength) {
        super(name, columnName, width, PropertyType.STRING);
        this.maxLength = maxLength;
    }

    public StringEntityProperty(String name, String columnName, boolean nullable, int maxLength) {
        super(name, columnName, nullable, PropertyType.STRING);
        this.maxLength = maxLength;
    }

    public StringEntityProperty(String name, String columnName, int maxLength) {
        super(name, columnName, PropertyType.STRING);
    }

    public int getMaxLength() {
        return maxLength;
    }
}
