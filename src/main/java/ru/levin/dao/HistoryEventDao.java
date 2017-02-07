package ru.levin.dao;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import ru.levin.dao.exceptions.EntityAlreadyExistsException;
import ru.levin.entities.HistoryEvent;
import ru.levin.entities.enums.HistoryEventType;

import javax.inject.Named;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.util.List;

@Named
public class HistoryEventDao {
    @PersistenceContext
    private EntityManager em;

    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    public List<HistoryEvent> getForType(HistoryEventType type) {
        return em.createQuery("from " + HistoryEvent.class.getName() + " where type = :type", HistoryEvent.class)
                .setParameter("type", type)
                .getResultList();
    }

    @Transactional
    public HistoryEvent add(HistoryEvent historyEvent) throws EntityAlreadyExistsException {
        Long historyEventId = historyEvent.getId();
        if (historyEventId != null)
            if (em.find(HistoryEvent.class, historyEventId) != null)
                throw new EntityAlreadyExistsException(String.format("History Event with id %d already exists", historyEventId));
        em.persist(historyEvent);
        em.flush();
        return historyEvent;
    }

    @Transactional
    public void deleteAll() {
        logger.info("Deleting all " + HistoryEvent.class.getName() + " entities");
        List<Long> ids = em.createQuery("select t.id from "  + HistoryEvent.class.getName() + " t", Long.class).getResultList();
        ids.forEach(id -> {
            HistoryEvent found = em.find(HistoryEvent.class, id);
            em.remove(found);
        });
        em.createNativeQuery("ALTER TABLE TBL_HISTORY_EVENT ALTER COLUMN id RESTART WITH 1").executeUpdate();
    }

    public boolean isEmpty() {
        return em.createQuery("select count(c) from " + HistoryEvent.class.getName() + " c", Long.class).getSingleResult().equals(0L);
    }
}
