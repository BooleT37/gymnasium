package ru.levin.entities;

import ru.levin.entities.enums.HistoryEventType;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Set;

import static javax.persistence.EnumType.STRING;

@Entity
@Table(name="TBL_HISTORY_EVENT")
public class HistoryEvent {
    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private LocalDate date;
    @Column(length = 2000)
    private String description;
    @Enumerated(STRING)
    @Column(nullable = false)
    private HistoryEventType type;
    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(
            name="TBL_HISTORY_PHOTOS"
    )
    private Set<String> photoNames;
    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(
            name="TBL_HISTORY_VIDEOS"
    )
    private Set<String> videoNames;

    private HistoryEvent() {}

    public HistoryEvent(String name, LocalDate date, String description, HistoryEventType type, Set<String> photoNames, Set<String> videoNames) {
        this.name = name;
        this.date = date;
        this.description = description;
        this.type = type;
        this.photoNames = photoNames;
        this.videoNames = videoNames;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public Set<String> getPhotoNames() {
        return photoNames;
    }

    public void setPhotoNames(Set<String> photoNames) {
        this.photoNames = photoNames;
    }

    public Set<String> getVideoNames() {
        return videoNames;
    }

    public void setVideoNames(Set<String> videoNames) {
        this.videoNames = videoNames;
    }

    public HistoryEventType getType() {
        return type;
    }

    public void setType(HistoryEventType type) {
        this.type = type;
    }
}
