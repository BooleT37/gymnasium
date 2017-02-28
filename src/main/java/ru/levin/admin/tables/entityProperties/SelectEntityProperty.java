package ru.levin.admin.tables.entityProperties;


import ru.levin.admin.tables.PropertyType;
import ru.levin.admin.tables.SelectPropertyValue;

import java.util.List;

public class SelectEntityProperty extends EntityProperty {
    private List<SelectPropertyValue<String>> selectValues;

    public SelectEntityProperty(String name, String columnName, boolean nullable, int width, List<SelectPropertyValue<String>> selectValues) {
        super(name, columnName, nullable, width, PropertyType.SELECT);
        this.selectValues = selectValues;
    }

    public SelectEntityProperty(String name, String columnName, boolean nullable, List<SelectPropertyValue<String>> selectValues) {
        super(name, columnName, nullable, PropertyType.SELECT);
        this.selectValues = selectValues;
    }

    public SelectEntityProperty(String name, String columnName, int width, List<SelectPropertyValue<String>> selectValues) {
        super(name, columnName, width, PropertyType.SELECT);
        this.selectValues = selectValues;
    }

    public SelectEntityProperty(String name, String columnName, List<SelectPropertyValue<String>> selectValues) {
        super(name, columnName, PropertyType.SELECT);
        this.selectValues = selectValues;
    }

    public List<SelectPropertyValue<String>> getSelectValues() {
        return selectValues;
    }
}
