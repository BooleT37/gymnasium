package ru.levin.admin.tables;

import javax.inject.Named;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Named
public class PropertiesStore {
    private Map<TableEntity, List<EntityProperty>> data;

    public PropertiesStore() {
        data = new HashMap<>();
        this.fillGraduatesProperties();
        this.fillGraduateClasses();
        this.fillTeachers();
        this.fillAdministration();
        this.fillSouvenirs();
        this.fillHistoryEvents();
    }

    private void fillGraduatesProperties() {
        List<EntityProperty> properties = new ArrayList<EntityProperty>()
        {{
            add(new EntityProperty("firstName", "Имя", false, 50));
            add(new EntityProperty("lastName", "Фамилия", false, 50));
            add(new EntityProperty("patronymic", "Отчество", 50));
            add(new EntityProperty("birthDate", "Дата рождения", PropertyType.DATE));
            add(new EntityProperty("graduateClassId", "Класс", false, PropertyType.FOREIGN_ID, TableEntity.GRADUATE_CLASS));
            add(new EntityProperty("interests", "Интересы", 500));
            add(new EntityProperty("favouriteSubjects", "Любимые предметы", 500));
            add(new EntityProperty("achievements", "Достижения", 500));
            add(new EntityProperty("photoName", "Фото"));
            add(new EntityProperty("vkLink", "ВКонтакте", 50));
            add(new EntityProperty("facebookLink", "Facebook", 50));
            add(new EntityProperty("famous", "Известный", PropertyType.BOOLEAN));
        }};
        this.data.put(TableEntity.GRADUATE, properties);
    }

    private void fillGraduateClasses() {
        List<EntityProperty> properties = new ArrayList<EntityProperty>()
        {{
            add(new EntityProperty("graduateYear", "Год выпуска", false, PropertyType.NUMBER));
            add(new EntityProperty("grade", "Класс (номер)", false, PropertyType.NUMBER));
            add(new EntityProperty("character", "Литера"));
            add(new EntityProperty("photoName", "Фото"));
        }};
        this.data.put(TableEntity.GRADUATE_CLASS, properties);
    }

    private void fillTeachers() {
        List<EntityProperty> properties = new ArrayList<EntityProperty>()
        {{
            add(new EntityProperty("firstName", "Имя", false, 50));
            add(new EntityProperty("lastName", "Фамилия", false, 50));
            add(new EntityProperty("patronymic", "Отчество", 50));
            add(new EntityProperty("birthDate", "Дата рождения", PropertyType.DATE));
            add(new EntityProperty("subjects", "Предметы", PropertyType.LIST));
            add(new EntityProperty("employmentYear", "Год начала работы", PropertyType.NUMBER));
            add(new EntityProperty("releaseYear", "Год конца работы", PropertyType.NUMBER));
            add(new EntityProperty("photoName", "Фото"));
            add(new EntityProperty("famous", "Известный", PropertyType.BOOLEAN));
        }};
        this.data.put(TableEntity.TEACHER, properties);
    }

    private void fillAdministration() {
        List<EntityProperty> properties = new ArrayList<EntityProperty>()
        {{
            add(new EntityProperty("firstName", "Имя", false, 50));
            add(new EntityProperty("lastName", "Фамилия", false, 50));
            add(new EntityProperty("patronymic", "Отчество", 50));
            add(new EntityProperty("birthDate", "Дата рождения", PropertyType.DATE));
            add(new EntityProperty("employmentYear", "Год начала работы", PropertyType.NUMBER));
            add(new EntityProperty("releaseYear", "Год конца работы", PropertyType.NUMBER));
            add(new EntityProperty("photoName", "Фото"));
            add(new EntityProperty("position", "Должность", PropertyType.SELECT, new ArrayList<SelectPropertyValue<String>>() {{
                add(new SelectPropertyValue<>("director", "Директор"));
                add(new SelectPropertyValue<>("deputy_director", "Зам. директора"));
            }}));
        }};
        this.data.put(TableEntity.ADMINISTRATION_EMPLOYEE, properties);
    }

    private void fillSouvenirs() {
        List<EntityProperty> properties = new ArrayList<EntityProperty>()
        {{
            add(new EntityProperty("name", "Название", false));
            add(new EntityProperty("photoName", "Фото"));
        }};
        this.data.put(TableEntity.SOUVENIR, properties);
    }

    private void fillHistoryEvents() {
        List<EntityProperty> properties = new ArrayList<EntityProperty>()
        {{
            add(new EntityProperty("date", "Дата", false, PropertyType.DATE));
            add(new EntityProperty("description", "Описание", 2000));
            add(new EntityProperty("type", "Тип", PropertyType.SELECT, new ArrayList<SelectPropertyValue<String>>() {{
                add(new SelectPropertyValue<>("history", "История"));
                add(new SelectPropertyValue<>("literature_club", "Литературные гостинные"));
                add(new SelectPropertyValue<>("sport", "Творчество"));
                add(new SelectPropertyValue<>("art", "Спорт"));
                add(new SelectPropertyValue<>("science", "Наука"));
                add(new SelectPropertyValue<>("travel", "Путешествия"));
            }}));
            add(new EntityProperty("photoNames", "Фотографии", PropertyType.LIST));
            add(new EntityProperty("videoNames", "Видеозаписи", PropertyType.LIST));
        }};
        this.data.put(TableEntity.HISTORY_EVENT, properties);
    }

    public List<EntityProperty> getForEntity(TableEntity entityType) {
        return data.get(entityType);
    }
}
