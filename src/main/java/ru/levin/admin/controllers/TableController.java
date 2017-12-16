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
import ru.levin.admin.tables.FolderPathsForTables;
import ru.levin.admin.tables.PropertiesStore;
import ru.levin.admin.tables.SelectPropertyValue;
import ru.levin.admin.tables.TableEntity;
import ru.levin.admin.tables.entityProperties.EntityProperty;
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
    @Inject private FolderPathsForTables folderPathsForTables;

    @Inject private ObjectMapper jacksonObjectMapper;

    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @GetMapping("{tableName}")
    public ModelAndView table(@PathVariable(name="tableName") String tableName) {
        Map<String, Object> model = new HashMap<>();
        String tableTitle;
        String controllerName;
        List<EntityProperty> entityProperties  = propertiesStore.get(tableName);
        List<Object> entities;
        Map<TableEntity, List<SelectPropertyValue<Long>>> foreignEntities = new HashMap<>();
        Map<String, String> fixSelectValues = new HashMap<>();
        switch (tableName) {
            case "graduates":
                tableTitle = "Выпускники";
                controllerName = "graduates";
                entities = graduateDao.getAll().stream().map(g -> (Object)g).collect(Collectors.toList());
                List<SelectPropertyValue<Long>> graduateClassesList = graduateClassDao.getAll().stream()
                        .map(c -> new SelectPropertyValue<>(c.getId(), c.toString()))
                        .collect(Collectors.toList());
                foreignEntities.put(TableEntity.GRADUATE_CLASS, graduateClassesList);
                break;
            case "classes":
                tableTitle = "Классы";
                controllerName = "graduateClasses";
                entities = graduateClassDao.getAll().stream().map(g -> (Object)g).collect(Collectors.toList());
                break;
            case "teachers":
                tableTitle = "Учителя";
                controllerName = "teachers";
                entities = teacherDao.getAll().stream().map(g -> (Object)g).collect(Collectors.toList());
                break;
            case "administration":
                tableTitle = "Администрация";
                controllerName = "administration";
                entities = administrationEmployeeDao.getAll().stream().map(g -> (Object)g).collect(Collectors.toList());
                break;
            case "souvenirs":
                tableTitle = "Сувениры";
                controllerName = "souvenirs";
                entities = souvenirDao.getAll().stream().map(g -> (Object)g).collect(Collectors.toList());
                break;
            case "history":
                tableTitle = "История";
                controllerName = "historyEvents";
                entities = historyEventDao.getAllForType(HistoryEventType.HISTORY).stream().map(g -> (Object)g).collect(Collectors.toList());
                fixSelectValues.put("type", HistoryEventType.HISTORY.toString());
                break;
            case "literature_club":
                tableTitle = "Литературные гостиные";
                controllerName = "historyEvents";
                entities = historyEventDao.getAllForType(HistoryEventType.LITERATURE_CLUB).stream().map(g -> (Object)g).collect(Collectors.toList());
                fixSelectValues.put("type", HistoryEventType.LITERATURE_CLUB.toString());
                break;
            case "sport":
                tableTitle = "Спорт";
                controllerName = "historyEvents";
                entities = historyEventDao.getAllForType(HistoryEventType.SPORT).stream().map(g -> (Object)g).collect(Collectors.toList());
                fixSelectValues.put("type", HistoryEventType.SPORT.toString());
                break;
            case "art":
                tableTitle = "Творчество";
                controllerName = "historyEvents";
                entities = historyEventDao.getAllForType(HistoryEventType.ART).stream().map(g -> (Object)g).collect(Collectors.toList());
                fixSelectValues.put("type", HistoryEventType.ART.toString());
                break;
            case "science":
                tableTitle = "Наука";
                controllerName = "historyEvents";
                entities = historyEventDao.getAllForType(HistoryEventType.SCIENCE).stream().map(g -> (Object)g).collect(Collectors.toList());
                fixSelectValues.put("type", HistoryEventType.SCIENCE.toString());
                break;
            case "travel":
                tableTitle = "Путешествия";
                controllerName = "historyEvents";
                entities = historyEventDao.getAllForType(HistoryEventType.TRAVEL).stream().map(g -> (Object)g).collect(Collectors.toList());
                fixSelectValues.put("type", HistoryEventType.TRAVEL.toString());
                break;
            default:
                throw new ResourceNotFoundException(String.format("Cannot find table '%s'", tableName));
        }

        Map<String, Object> clientModel = new HashMap<>();
        clientModel.put("title", tableTitle);
        clientModel.put("tableName", tableName);
        clientModel.put("controller", controllerName);
        clientModel.put("properties", entityProperties);
        clientModel.put("entities", entities);
        clientModel.put("foreignEntities", foreignEntities);
        clientModel.put("fixSelectValues", fixSelectValues);

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
