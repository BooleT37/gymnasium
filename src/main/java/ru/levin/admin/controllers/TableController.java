package ru.levin.admin.controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
import ru.levin.admin.tables.EntityProperty;
import ru.levin.admin.tables.PropertiesStore;
import ru.levin.admin.tables.TableEntity;
import ru.levin.dao.*;
import ru.levin.entities.enums.HistoryEventType;

import javax.inject.Inject;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Controller
@RequestMapping("/admin/tables")
public class TableController {
    @Inject private GraduateDao graduateDao;
    @Inject private GraduateClassDao graduateClassDao;
    @Inject private TeacherDao teacherDao;
    @Inject private AdministrationEmployeeDao administrationEmployeeDao;
    @Inject private SouvenirDao souvenirDao;
    @Inject private HistoryEventDao historyEventDao;

    @Inject private PropertiesStore propertiesStore;

    @Inject private ObjectMapper jacksonObjectMapper;

    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @GetMapping("{tableName}")
    public ModelAndView table(@PathVariable(name="tableName") String tableName) {
        Map<String, Object> model = new HashMap<>();
        String tableTitle;
        List<EntityProperty> entityProperties;
        List<Object> entities;
        switch (tableName) {
            case "graduates":
                tableTitle = "Выпускники";
                entityProperties = propertiesStore.getForEntity(TableEntity.GRADUATE);
                entities = graduateDao.getAll().stream().map(g -> (Object)g).collect(Collectors.toList());
                break;
            case "graduate_classes":
                tableTitle = "Классы";
                entityProperties = propertiesStore.getForEntity(TableEntity.GRADUATE_CLASS);
                entities = graduateClassDao.getAll().stream().map(g -> (Object)g).collect(Collectors.toList());
                break;
            case "teachers":
                tableTitle = "Учителя";
                entityProperties = propertiesStore.getForEntity(TableEntity.TEACHER);
                entities = teacherDao.getAll().stream().map(g -> (Object)g).collect(Collectors.toList());
                break;
            case "administration":
                tableTitle = "Администрация";
                entityProperties = propertiesStore.getForEntity(TableEntity.ADMINISTRATION_EMPLOYEE);
                entities = administrationEmployeeDao.getAll().stream().map(g -> (Object)g).collect(Collectors.toList());
                break;
            case "souvenirs":
                tableTitle = "Сувениры";
                entityProperties = propertiesStore.getForEntity(TableEntity.SOUVENIR);
                entities = souvenirDao.getAll().stream().map(g -> (Object)g).collect(Collectors.toList());
                break;
            case "history":
                tableTitle = "История";
                entityProperties = propertiesStore.getForEntity(TableEntity.HISTORY_EVENT);
                entities = historyEventDao.getForType(HistoryEventType.HISTORY).stream().map(g -> (Object)g).collect(Collectors.toList());
                break;
            case "literature_club":
                tableTitle = "Литературные гостинные";
                entityProperties = propertiesStore.getForEntity(TableEntity.HISTORY_EVENT);
                entities = historyEventDao.getForType(HistoryEventType.LITERATURE_CLUB).stream().map(g -> (Object)g).collect(Collectors.toList());
                break;
            case "sport":
                tableTitle = "Спорт";
                entityProperties = propertiesStore.getForEntity(TableEntity.HISTORY_EVENT);
                entities = historyEventDao.getForType(HistoryEventType.SPORT).stream().map(g -> (Object)g).collect(Collectors.toList());
                break;
            case "art":
                tableTitle = "Творчество";
                entityProperties = propertiesStore.getForEntity(TableEntity.HISTORY_EVENT);
                entities = historyEventDao.getForType(HistoryEventType.ART).stream().map(g -> (Object)g).collect(Collectors.toList());
                break;
            case "science":
                tableTitle = "Наука";
                entityProperties = propertiesStore.getForEntity(TableEntity.HISTORY_EVENT);
                entities = historyEventDao.getForType(HistoryEventType.SCIENCE).stream().map(g -> (Object)g).collect(Collectors.toList());
                break;
            case "travel":
                tableTitle = "Путешествия";
                entityProperties = propertiesStore.getForEntity(TableEntity.HISTORY_EVENT);
                entities = historyEventDao.getForType(HistoryEventType.TRAVEL).stream().map(g -> (Object)g).collect(Collectors.toList());
                break;
            default:
                throw new ResourceNotFoundException(String.format("Cannot fild table '%s'", tableName));
        }

        Map<String, Object> clientModel = new HashMap<>();
        clientModel.put("title", tableTitle);
        clientModel.put("properties", entityProperties);
        clientModel.put("entities", entities);

        try {
            String clientModelJson = jacksonObjectMapper.writeValueAsString(clientModel);
            model.put("clientModelJson", clientModelJson);
        } catch (JsonProcessingException e) {
            logger.error(e.getMessage());
        }

        String debugEnv = System.getenv().get("DEBUG_MODE");
        Boolean isDebug = debugEnv != null && debugEnv.equals("TRUE");
        model.put("title", tableTitle);
        model.put("debug", isDebug);

        return new ModelAndView("admin/table", model);
    }
}
