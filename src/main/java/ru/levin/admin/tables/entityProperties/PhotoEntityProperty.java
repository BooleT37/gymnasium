package ru.levin.admin.tables.entityProperties;

import ru.levin.admin.tables.PropertyType;

public class PhotoEntityProperty extends EntityProperty {
    private String path;

    public PhotoEntityProperty(String name, String columnName, Integer width, String path) {
        super(name, columnName, width, PropertyType.PHOTO);
        this.path = path;
    }

    public PhotoEntityProperty(String name, String columnName, String path) {
        super(name, columnName, PropertyType.PHOTO);
        this.path = path;
    }

    public String getPath() {
        return path;
    }
}
