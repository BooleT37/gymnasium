package ru.levin.entities;

import ru.levin.entities.enums.HistoryEventType;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

import static javax.persistence.EnumType.STRING;

@Entity
@Table(name="TBL_HISTORY_EVENT")
public class HistoryEvent {
    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    private LocalDate date;
    @Column(length = 1000) //todo is it enough?
    private String description;
    @Enumerated(STRING)
    @Column(nullable = false)
    private HistoryEventType type;
    @ElementCollection
    @CollectionTable(
            name="TBL_HISTORY_PHOTOS"
    )
    private List<String> photoNames;
    @ElementCollection
    @CollectionTable(
            name="TBL_HISTORY_VIDEOS"
    )
    private List<String> videoNames;

    private HistoryEvent() {}

    public HistoryEvent(LocalDate date, String description, HistoryEventType type, List<String> photoNames, List<String> videoNames) {
        this.date = date;
        this.description = description;
        this.type = type;
        this.photoNames = photoNames;
        this.videoNames = videoNames;
    }

    public Long getId() {
        return id;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<String> getPhotoNames() {
        return photoNames;
    }

    public void setPhotoNames(List<String> photoNames) {
        this.photoNames = photoNames;
    }

    public List<String> getVideoNames() {
        return videoNames;
    }

    public void setVideoNames(List<String> videoNames) {
        this.videoNames = videoNames;
    }

    public HistoryEventType getType() {
        return type;
    }

    public void setType(HistoryEventType type) {
        this.type = type;
    }
}
