package ru.levin.admin.tables.entityProperties;

import ru.levin.admin.tables.PropertyType;
import ru.levin.admin.tables.TableEntity;

public class ForeignIdEntityProperty extends EntityProperty {
    private TableEntity relatedEntity;

    public ForeignIdEntityProperty(String name, String columnName, boolean nullable, int width, TableEntity relatedEntity) {
        super(name, columnName, nullable, width, PropertyType.FOREIGN_ID);
        this.relatedEntity = relatedEntity;
    }

    public ForeignIdEntityProperty(String name, String columnName, boolean nullable, PropertyType type, TableEntity relatedEntity) {
        super(name, columnName, nullable, PropertyType.FOREIGN_ID);
        this.relatedEntity = relatedEntity;
    }

    public ForeignIdEntityProperty(String name, String columnName, TableEntity relatedEntity) {
        super(name, columnName, PropertyType.FOREIGN_ID);
        this.relatedEntity = relatedEntity;
    }

    public TableEntity getRelatedEntity() {
        return relatedEntity;
    }
}
