package ru.levin.admin.tables.entityProperties;


import ru.levin.admin.tables.PropertyType;

public class TextEntityProperty extends EntityProperty {
    private int maxLength = 255;

    public TextEntityProperty(String name, String columnName) {
        super(name, columnName, PropertyType.TEXT);
    }

    public TextEntityProperty(String name, String columnName, Integer width) {
        super(name, columnName, width, PropertyType.TEXT);
    }

    public TextEntityProperty(String name, String columnName, boolean nullable) {
        super(name, columnName, nullable, PropertyType.TEXT);
    }

    public TextEntityProperty(String name, String columnName, Integer width, int maxLength) {
        super(name, columnName, width, PropertyType.TEXT);
        this.maxLength = maxLength;
    }

    public TextEntityProperty(String name, String columnName, boolean nullable, Integer width, int maxLength) {
        super(name, columnName, width, PropertyType.TEXT);
        this.maxLength = maxLength;
    }

    public TextEntityProperty(String name, String columnName, boolean nullable, int maxLength) {
        super(name, columnName, nullable, PropertyType.TEXT);
        this.maxLength = maxLength;
    }

    public TextEntityProperty(String name, String columnName, int maxLength) {
        super(name, columnName, PropertyType.TEXT);
    }

    public int getMaxLength() {
        return maxLength;
    }
}
