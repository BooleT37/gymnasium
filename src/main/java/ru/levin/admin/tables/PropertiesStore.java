package ru.levin.admin.tables;

import ru.levin.admin.tables.entityProperties.*;
import ru.levin.entities.enums.AdministrationPosition;
import ru.levin.entities.enums.HistoryEventType;

import javax.inject.Inject;
import javax.inject.Named;
import java.util.ArrayList;
import java.util.List;

@Named
public class PropertiesStore {
    @Inject
    private FolderPathsForTables folderPathsForTables;

    private final List<EntityProperty> historyEventProperties = new ArrayList<EntityProperty>()
    {{
        add(new StringEntityProperty("name", "Имя", false));
        add(new EntityProperty("date", "Дата", false, PropertyType.DATE));
        add(new TextEntityProperty("description", "Описание", 2000));
        add(new SelectEntityProperty("type", "Тип", false, new ArrayList<SelectPropertyValue<String>>() {{
            add(new SelectPropertyValue<>(HistoryEventType.HISTORY.toString(), "История"));
            add(new SelectPropertyValue<>(HistoryEventType.LITERATURE_CLUB.toString(), "Литературные гостинные"));
            add(new SelectPropertyValue<>(HistoryEventType.ART.toString(), "Творчество"));
            add(new SelectPropertyValue<>(HistoryEventType.SPORT.toString(), "Спорт"));
            add(new SelectPropertyValue<>(HistoryEventType.SCIENCE.toString(), "Наука"));
            add(new SelectPropertyValue<>(HistoryEventType.TRAVEL.toString(), "Путешествия"));
        }}));
    }};

    private List<EntityProperty> graduates() {
        return new ArrayList<EntityProperty>()
        {{
            add(new StringEntityProperty("firstName", "Имя", false, 7, 50));
            add(new StringEntityProperty("lastName", "Фамилия", false, 7, 50));
            add(new StringEntityProperty("patronymic", "Отчество", 7, 50));
            add(new EntityProperty("birthDate", "Дата рождения", 7,  PropertyType.DATE));
            add(new ForeignIdEntityProperty("graduateClassId", "Класс", false, 5, TableEntity.GRADUATE_CLASS));
            add(new StringEntityProperty("interests", "Интересы", 12,  500));
            add(new TextEntityProperty("favouriteSubjects", "Любимые предметы", 12, 500));
            add(new TextEntityProperty("achievements", "Достижения", 12, 500));
            add(new PhotoEntityProperty("photoName", "Фото", 4, folderPathsForTables.getPhotoPath("graduates")));
            add(new EntityProperty("vkLink", "ВКонтакте", 6, PropertyType.LINK));
            add(new EntityProperty("facebookLink", "Facebook", 6, PropertyType.LINK));
            add(new EntityProperty("famous", "Известный", 5, PropertyType.BOOLEAN));
            add(new ControlsEntityProperty("controls", 10));
        }};
    }

    private List<EntityProperty> graduateClasses() {
        return new ArrayList<EntityProperty>()
        {{
            add(new EntityProperty("graduateYear", "Год выпуска", false, PropertyType.NUMBER));
            add(new EntityProperty("grade", "Класс (номер)", false, PropertyType.NUMBER));
            add(new StringEntityProperty("character", "Литера", false));
            add(new PhotoEntityProperty("photoName", "Фото", folderPathsForTables.getPhotoPath("classes")));
        }};
    }

    private List<EntityProperty> teachers() {
        return new ArrayList<EntityProperty>()
        {{
            add(new StringEntityProperty("firstName", "Имя", false, 50));
            add(new StringEntityProperty("lastName", "Фамилия", false, 50));
            add(new StringEntityProperty("patronymic", "Отчество", 50));
            add(new EntityProperty("birthDate", "Дата рождения", PropertyType.DATE));
            add(new EntityProperty("subjects", "Предметы", PropertyType.LIST));
            add(new EntityProperty("employmentYear", "Год начала работы", PropertyType.NUMBER));
            add(new EntityProperty("releaseYear", "Год конца работы", PropertyType.NUMBER));
            add(new PhotoEntityProperty("photoName", "Фото", folderPathsForTables.getPhotoPath("teachers")));
        }};
    }

    private List<EntityProperty> administration() {
        return new ArrayList<EntityProperty>()
        {{
            add(new StringEntityProperty("firstName", "Имя", false, 50));
            add(new StringEntityProperty("lastName", "Фамилия", false, 50));
            add(new StringEntityProperty("patronymic", "Отчество", 50));
            add(new EntityProperty("birthDate", "Дата рождения", PropertyType.DATE));
            add(new EntityProperty("employmentYear", "Год начала работы", PropertyType.NUMBER));
            add(new EntityProperty("releaseYear", "Год конца работы", PropertyType.NUMBER));
            add(new PhotoEntityProperty("photoName", "Фото", folderPathsForTables.getPhotoPath("administration")));
            add(new SelectEntityProperty("position", "Должность", false, new ArrayList<SelectPropertyValue<String>>() {{
                add(new SelectPropertyValue<>(AdministrationPosition.DIRECTOR.toString(), "Директор"));
                add(new SelectPropertyValue<>(AdministrationPosition.DEPUTY_DIRECTOR.toString(), "Зам. директора"));
            }}));
        }};
    }

    private List<EntityProperty> souvenirs() {
        return new ArrayList<EntityProperty>()
        {{
            add(new StringEntityProperty("name", "Название", false));
            add(new PhotoEntityProperty("photoName", "Фото", folderPathsForTables.getPhotoPath("souvenirs")));
        }};
    }

    private List<EntityProperty> historyEvent(String tableName) {
        List<EntityProperty> historyEventProperties = this.historyEventProperties;
        List<EntityProperty> historyProperties = new ArrayList<>(historyEventProperties);
        historyProperties.add(new PhotosListEntityProperty("photoNames", "Фотографии", folderPathsForTables.getPhotoPath(tableName)));
        historyProperties.add(new VideosListEntityProperty("videoNames", "Видеозаписи", folderPathsForTables.getVideoPath(tableName)));
        return historyProperties;
    }

    public List<EntityProperty> get(String tableName) {
        switch (tableName) {
            case "graduates":
                return this.graduates();
            case "classes":
                return this.graduateClasses();
            case "teachers":
                return this.teachers();
            case "administration":
                return this.administration();
            case "souvenirs":
                return this.souvenirs();
            case "history":
            case "literature_club":
            case "sport":
            case "art":
            case "science":
            case "travel":
                return this.historyEvent(tableName);
            default:
                return new ArrayList<>();
        }
    }
}
