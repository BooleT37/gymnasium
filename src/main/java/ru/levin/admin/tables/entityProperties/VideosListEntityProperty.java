package ru.levin.admin.tables.entityProperties;

import ru.levin.admin.tables.PropertyType;

public class VideosListEntityProperty extends EntityProperty {
    private String path;

    public VideosListEntityProperty(String name, String columnName, Integer width, String path) {
        super(name, columnName, width, PropertyType.VIDEOS_LIST);
        this.path = path;
    }

    public VideosListEntityProperty(String name, String columnName, String path) {
        super(name, columnName, PropertyType.VIDEOS_LIST);
        this.path = path;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }
}
