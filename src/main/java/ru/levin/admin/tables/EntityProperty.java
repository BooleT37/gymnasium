package ru.levin.admin.tables;


import java.util.List;

public class EntityProperty {
    private String name;
    private String columnName;
    private boolean nullable = true;
    private Integer width;
    private PropertyType type = PropertyType.STRING;
    private int maxLength = 255; //for type == STRING
    private List<SelectPropertyValue<String>> selectValues; //for type == SELECT
    private TableEntity relatedEntity; //for type == FOREIGN_ID

        //Any type
    EntityProperty(String name, String columnName, boolean nullable, int width, PropertyType type) {
        this.name = name;
        this.columnName = columnName;
        this.nullable = nullable;
        this.width = width;
        this.type = type;
    }

    EntityProperty(String name, String columnName, int width, PropertyType type) {
        this.name = name;
        this.columnName = columnName;
        this.width = width;
        this.type = type;
    }

    EntityProperty(String name, String columnName, boolean nullable, PropertyType type) {
        this.name = name;
        this.columnName = columnName;
        this.nullable = nullable;
        this.type = type;
    }

    EntityProperty(String name, String columnName, PropertyType type) {
        this.name = name;
        this.columnName = columnName;
        this.type = type;
    }

    //String type
    EntityProperty(String name, String columnName) {
        this.name = name;
        this.columnName = columnName;
    }

    EntityProperty(String name, String columnName, int width) {
        this.name = name;
        this.columnName = columnName;
        this.width = width;
    }

    EntityProperty(String name, String columnName, boolean nullable) {
        this.name = name;
        this.columnName = columnName;
        this.nullable = nullable;
    }

    EntityProperty(String name, String columnName, int width, int maxLength) {
        this.name = name;
        this.columnName = columnName;
        this.width = width;
        this.maxLength = maxLength;
    }

    EntityProperty(String name, String columnName, boolean nullable, int width, int maxLength) {
        this.name = name;
        this.columnName = columnName;
        this.nullable = nullable;
        this.width = width;
        this.maxLength = maxLength;
    }

    EntityProperty(String name, String columnName, boolean nullable, int maxLength) {
        this.name = name;
        this.columnName = columnName;
        this.nullable = nullable;
        this.maxLength = maxLength;
    }

    EntityProperty(String name, String columnName, int width, PropertyType type, int maxLength) {
        this.name = name;
        this.columnName = columnName;
        this.width = width;
        this.type = type;
        this.maxLength = maxLength;
    }

    EntityProperty(String name, String columnName, PropertyType type, int maxLength) {
        this.name = name;
        this.columnName = columnName;
        this.type = type;
        this.maxLength = maxLength;
    }

    //Select type
    EntityProperty(String name, String columnName, boolean nullable, int width, PropertyType type, List<SelectPropertyValue<String>> selectValues) {
        if (type != PropertyType.SELECT)
            throw new IllegalArgumentException("Type must be SELECT to use selectValues");
        this.name = name;
        this.columnName = columnName;
        this.nullable = nullable;
        this.width = width;
        this.type = type;
        this.selectValues = selectValues;
    }

    EntityProperty(String name, String columnName, boolean nullable, PropertyType type, List<SelectPropertyValue<String>> selectValues) {
        if (type != PropertyType.SELECT)
            throw new IllegalArgumentException("Type must be SELECT to use selectValues");
        this.name = name;
        this.columnName = columnName;
        this.nullable = nullable;
        this.type = type;
        this.selectValues = selectValues;
    }

    EntityProperty(String name, String columnName, int width, PropertyType type, List<SelectPropertyValue<String>> selectValues) {
        if (type != PropertyType.SELECT)
            throw new IllegalArgumentException("Type must be SELECT to use selectValues");
        this.name = name;
        this.columnName = columnName;
        this.width = width;
        this.type = type;
        this.selectValues = selectValues;
    }

    EntityProperty(String name, String columnName, PropertyType type, List<SelectPropertyValue<String>> selectValues) {
        if (type != PropertyType.SELECT)
            throw new IllegalArgumentException("Type must be SELECT to use selectValues");
        this.name = name;
        this.columnName = columnName;
        this.type = type;
        this.selectValues = selectValues;
    }

    //Foreign id type
    EntityProperty(String name, String columnName, boolean nullable, int width, PropertyType type, TableEntity relatedEntity) {
        if (type != PropertyType.FOREIGN_ID)
            throw new IllegalArgumentException("Type must be FOREIGN_ID to use relatedEntity");
        this.name = name;
        this.columnName = columnName;
        this.nullable = nullable;
        this.width = width;
        this.type = type;
        this.relatedEntity = relatedEntity;
    }

    EntityProperty(String name, String columnName, boolean nullable, PropertyType type, TableEntity relatedEntity) {
        this.name = name;
        this.columnName = columnName;
        this.nullable = nullable;
        this.type = type;
        this.relatedEntity = relatedEntity;
    }

    EntityProperty(String name, String columnName, PropertyType type, TableEntity relatedEntity) {
        if (type != PropertyType.FOREIGN_ID)
            throw new IllegalArgumentException("Type must be FOREIGN_ID to use relatedEntity");
        this.name = name;
        this.columnName = columnName;
        this.type = type;
        this.relatedEntity = relatedEntity;
    }

    //CONTROLS
    EntityProperty(String name, int width, PropertyType type) {
        if (type != PropertyType.CONTROLS)
            throw new IllegalArgumentException("This constructor is only for CONTROLS type property");
        this.name = name;
        this.width = width;
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

    public int getMaxLength() {
        return maxLength;
    }

    public List<SelectPropertyValue<String>> getSelectValues() {
        return selectValues;
    }

    public TableEntity getRelatedEntity() {
        return relatedEntity;
    }
}
