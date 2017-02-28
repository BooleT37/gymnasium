package ru.levin.admin.tables.entityProperties;

import ru.levin.admin.tables.PropertyType;

public class ControlsEntityProperty extends EntityProperty {
    public ControlsEntityProperty(String name, int width) {
        super(name, null, width, PropertyType.CONTROLS);
    }
    public ControlsEntityProperty(String name) {
        super(name, null, PropertyType.CONTROLS);
    }
}
