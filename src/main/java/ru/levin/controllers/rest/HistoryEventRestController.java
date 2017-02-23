package ru.levin.controllers.rest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;
import ru.levin.dao.HistoryEventDao;
import ru.levin.dao.exceptions.EntityAlreadyExistsException;
import ru.levin.dao.exceptions.EntityNotFoundException;
import ru.levin.entities.HistoryEvent;
import ru.levin.entities.enums.HistoryEventType;

import javax.inject.Inject;
import java.util.List;

@RestController
@RequestMapping("/api/historyEvents")
public class HistoryEventRestController extends BaseRestController {
    @Inject
    private HistoryEventDao historyEventDao;

    @GetMapping("type/{type}")
    public List<HistoryEvent> getAllHistoryEvents(@PathVariable("type") String type) {
        HistoryEventType eventType = HistoryEventType.valueOf(type.toUpperCase());
        return historyEventDao.getAllForType(eventType);
    }

    @GetMapping("")
    public List<HistoryEvent> all() {
        return historyEventDao.getAll();
    }

    @PostMapping("")
    @Secured("ROLE_ADMIN")
    public HistoryEvent add(@RequestBody HistoryEvent historyEvent) throws EntityAlreadyExistsException
    {
        return historyEventDao.add(historyEvent);
    }

    @GetMapping("{id}")
    public HistoryEvent getById(@PathVariable("id") Long id) throws EntityNotFoundException {
        return historyEventDao.getById(id);
    }

    @PutMapping("{id}")
    @Secured("ROLE_ADMIN")
    public ResponseEntity<HistoryEvent> edit(@RequestBody HistoryEvent historyEvent, @PathVariable long id) throws EntityNotFoundException {
        if (id != historyEvent.getId())
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        HistoryEvent edited = historyEventDao.edit(historyEvent);
        return ResponseEntity.ok(edited);
    }

    @DeleteMapping("{id}")
    @Secured("ROLE_ADMIN")
    public HistoryEvent delete(@PathVariable Long id) throws Exception {
        return historyEventDao.deleteById(id);
    }
}
