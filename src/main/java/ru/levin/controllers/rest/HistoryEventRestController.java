package ru.levin.controllers.rest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.levin.dao.HistoryEventDao;
import ru.levin.entities.HistoryEvent;
import ru.levin.entities.enums.HistoryEventType;

import javax.inject.Inject;
import java.util.List;

@RestController
@RequestMapping("/api/historyEvents")
public class HistoryEventRestController {
    @Inject
    private HistoryEventDao historyEventDao;

    @GetMapping("type/{type}")
    public List<HistoryEvent> getAllHistoryEvents(@PathVariable("type") String type) {
        HistoryEventType eventType = HistoryEventType.valueOf(type.toUpperCase());
        return historyEventDao.getForType(eventType);
    }
}
