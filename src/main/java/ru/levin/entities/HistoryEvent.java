package ru.levin.entities;

import ru.levin.entities.enums.HistoryEventType;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="TBL_HISTORY_EVENT")
public class HistoryEvent {
    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    private Date date;
    @Column(length = 1000) //todo is it enough?
    private String description;
    @Column(nullable = false)
    private HistoryEventType type;

    private HistoryEvent() {}

    public HistoryEvent(Date date, String description, HistoryEventType type) {
        this.date = date;
        this.description = description;
        this.type = type;
    }

    public Long getId() {
        return id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public HistoryEventType getType() {
        return type;
    }

    public void setType(HistoryEventType type) {
        this.type = type;
    }
}
