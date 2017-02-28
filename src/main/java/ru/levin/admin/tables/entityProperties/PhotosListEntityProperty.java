package ru.levin.admin.tables.entityProperties;

import ru.levin.admin.tables.PropertyType;

public class PhotosListEntityProperty extends EntityProperty {
    private String path;

    public PhotosListEntityProperty(String name, String columnName, Integer width, String path) {
        super(name, columnName, width, PropertyType.PHOTOS_LIST);
        this.path = path;
    }

    public PhotosListEntityProperty(String name, String columnName, String path) {
        super(name, columnName, PropertyType.PHOTOS_LIST);
        this.path = path;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }
}
