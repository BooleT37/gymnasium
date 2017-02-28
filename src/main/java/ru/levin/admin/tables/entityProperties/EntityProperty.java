package ru.levin.admin.tables.entityProperties;


import ru.levin.admin.tables.PropertyType;

public class EntityProperty {
    private String name;
    private String columnName;
    protected boolean nullable = true;
    protected Integer width;
    protected PropertyType type;

    public EntityProperty(String name, String columnName, boolean nullable, Integer width, PropertyType type) {
        this.name = name;
        this.columnName = columnName;
        this.nullable = nullable;
        this.width = width;
        this.type = type;
    }

    public EntityProperty(String name, String columnName, int width, PropertyType type) {
        this.name = name;
        this.columnName = columnName;
        this.width = width;
        this.type = type;
    }

    public EntityProperty(String name, String columnName, boolean nullable, PropertyType type) {
        this.name = name;
        this.columnName = columnName;
        this.nullable = nullable;
        this.type = type;
    }

    public EntityProperty(String name, String columnName, PropertyType type) {
        this.name = name;
        this.columnName = columnName;
        this.type = type;
    }

    public String getName() {
        return name;
    }

    public boolean isNullable() {
        return nullable;
    }

    public String getColumnName() {
        return columnName;
    }

    public Integer getWidth() {
        return width;
    }

    public PropertyType getType() {
        return type;
    }
}
