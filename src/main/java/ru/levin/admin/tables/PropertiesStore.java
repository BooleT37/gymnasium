package ru.levin.admin.tables;

import ru.levin.entities.enums.AdministrationPosition;
import ru.levin.entities.enums.HistoryEventType;

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
            add(new EntityProperty("firstName", "Имя", false, 7, 50));
            add(new EntityProperty("lastName", "Фамилия", false, 7, 50));
            add(new EntityProperty("patronymic", "Отчество", 7, 50));
            add(new EntityProperty("birthDate", "Дата рождения", 7,  PropertyType.DATE));
            add(new EntityProperty("graduateClassId", "Класс", false, 5, PropertyType.FOREIGN_ID, TableEntity.GRADUATE_CLASS));
            add(new EntityProperty("interests", "Интересы", 12,  500));
            add(new EntityProperty("favouriteSubjects", "Любимые предметы", 12, PropertyType.TEXT, 500));
            add(new EntityProperty("achievements", "Достижения", 12, PropertyType.TEXT, 500));
            add(new EntityProperty("photoName", "Фото", 4));
            add(new EntityProperty("vkLink", "ВКонтакте", 6, PropertyType.LINK));
            add(new EntityProperty("facebookLink", "Facebook", 6, PropertyType.LINK));
            add(new EntityProperty("famous", "Известный", 5, PropertyType.BOOLEAN));
            add(new EntityProperty("controls", 10, PropertyType.CONTROLS));
        }};
        this.data.put(TableEntity.GRADUATE, properties);
    }

    private void fillGraduateClasses() {
        List<EntityProperty> properties = new ArrayList<EntityProperty>()
        {{
            add(new EntityProperty("graduateYear", "Год выпуска", false, PropertyType.NUMBER));
            add(new EntityProperty("grade", "Класс (номер)", false, PropertyType.NUMBER));
            add(new EntityProperty("character", "Литера", false));
            add(new EntityProperty("photoName", "Фото"));
        }};
        this.data.put(TableEntity.GRADUATE_CLASS, properties);
    }

    private void fillTeachers() {
        List<EntityProperty> properties = new ArrayList<EntityProperty>()
        {{
            add(new EntityProperty("firstName", "Имя", false, 50));
            add(new EntityProperty("lastName", "Фамилия", false, 50));
            add(new EntityProperty("patronymic", "Отчество", PropertyType.STRING, 50));
            add(new EntityProperty("birthDate", "Дата рождения", PropertyType.DATE));
            add(new EntityProperty("subjects", "Предметы", PropertyType.LIST));
            add(new EntityProperty("employmentYear", "Год начала работы", PropertyType.NUMBER));
            add(new EntityProperty("releaseYear", "Год конца работы", PropertyType.NUMBER));
            add(new EntityProperty("photoName", "Фото"));
        }};
        this.data.put(TableEntity.TEACHER, properties);
    }

    private void fillAdministration() {
        List<EntityProperty> properties = new ArrayList<EntityProperty>()
        {{
            add(new EntityProperty("firstName", "Имя", false, 50));
            add(new EntityProperty("lastName", "Фамилия", false, 50));
            add(new EntityProperty("patronymic", "Отчество", PropertyType.STRING, 50));
            add(new EntityProperty("birthDate", "Дата рождения", PropertyType.DATE));
            add(new EntityProperty("employmentYear", "Год начала работы", PropertyType.NUMBER));
            add(new EntityProperty("releaseYear", "Год конца работы", PropertyType.NUMBER));
            add(new EntityProperty("photoName", "Фото"));
            add(new EntityProperty("position", "Должность", false, PropertyType.SELECT, new ArrayList<SelectPropertyValue<String>>() {{
                add(new SelectPropertyValue<>(AdministrationPosition.DIRECTOR.toString(), "Директор"));
                add(new SelectPropertyValue<>(AdministrationPosition.DEPUTY_DIRECTOR.toString(), "Зам. директора"));
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
            add(new EntityProperty("description", "Описание", PropertyType.TEXT, 2000));
            add(new EntityProperty("type", "Тип", false, PropertyType.SELECT, new ArrayList<SelectPropertyValue<String>>() {{
                add(new SelectPropertyValue<>(HistoryEventType.HISTORY.toString(), "История"));
                add(new SelectPropertyValue<>(HistoryEventType.LITERATURE_CLUB.toString(), "Литературные гостинные"));
                add(new SelectPropertyValue<>(HistoryEventType.ART.toString(), "Творчество"));
                add(new SelectPropertyValue<>(HistoryEventType.SPORT.toString(), "Спорт"));
                add(new SelectPropertyValue<>(HistoryEventType.SCIENCE.toString(), "Наука"));
                add(new SelectPropertyValue<>(HistoryEventType.TRAVEL.toString(), "Путешествия"));
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
