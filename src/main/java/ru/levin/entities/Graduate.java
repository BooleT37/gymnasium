package ru.levin.entities;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "TBL_GRADUATE")
public class Graduate {
    @Id
    @GeneratedValue
    private Long id;

    @Column(length = 50, nullable = false)
    private String firstName;
    @Column(length = 50, nullable = false)
    private String lastName;
    @Column(length = 50)
    private String patronymic;
    private LocalDate birthDate;
    @ManyToOne(cascade = {CascadeType.PERSIST})
    @JoinColumn(name = "COLUMN_GRADUATE_CLASS", nullable = false)
    private GraduateClass graduateClass;
    @Column(length = 500)
    private String interests;
    @Column(length = 500)
    private String favouriteSubjects;
    @Column(length = 500)
    private String achievements;
    private String photoName;
    @Column(length = 50)
    private String vkLink;
    @Column(length = 50)
    private String facebookLink;
    private boolean famous;


    private Graduate() {}

    public Graduate(Long id, String firstName, String lastName, String patronymic, LocalDate birthDate, GraduateClass graduateClass, String interests, String favouriteSubjects, String achievements, String photoName, String vkLink, String facebookLink, boolean famous) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.patronymic = patronymic;
        this.birthDate = birthDate;
        this.graduateClass = graduateClass;
        this.interests = interests;
        this.favouriteSubjects = favouriteSubjects;
        this.achievements = achievements;
        this.vkLink = vkLink;
        this.facebookLink = facebookLink;
        this.famous = famous;
        this.photoName = photoName;
    }

    public Graduate(String firstName, String lastName, String patronymic, LocalDate birthDate, GraduateClass graduateClass, String interests, String favouriteSubjects, String achievements, String photoName, String vkLink, String facebookLink, boolean famous) {
        this(null, firstName, lastName, patronymic, birthDate, graduateClass, interests, favouriteSubjects, achievements, photoName, vkLink, facebookLink, famous);
    }

    public Graduate(String firstName, String lastName, String patronymic, GraduateClass graduateClass) {
        this(null, firstName, lastName, patronymic, null, graduateClass, null, null, null, null, null, null, false);
    }

    public Long getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPatronymic() {
        return patronymic;
    }

    public void setPatronymic(String patronymic) {
        this.patronymic = patronymic;
    }

    public LocalDate getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(LocalDate birthDate) {
        this.birthDate = birthDate;
    }

    public GraduateClass getGraduateClass() {
        return graduateClass;
    }

    public void setGraduateClass(GraduateClass graduateClass) {
        this.graduateClass = graduateClass;
    }

    public String getInterests() {
        return interests;
    }

    public void setInterests(String interests) {
        this.interests = interests;
    }

    public String getFavouriteSubjects() {
        return favouriteSubjects;
    }

    public void setFavouriteSubjects(String favouriteSubjects) {
        this.favouriteSubjects = favouriteSubjects;
    }

    public String getAchievements() {
        return achievements;
    }

    public void setAchievements(String achievements) {
        this.achievements = achievements;
    }

    public String getPhotoName() {
        return photoName;
    }

    public void setPhotoName(String photoName) {
        this.photoName = photoName;
    }

    public String getVkLink() {
        return vkLink;
    }

    public void setVkLink(String vkLink) {
        this.vkLink = vkLink;
    }

    public String getFacebookLink() {
        return facebookLink;
    }

    public void setFacebookLink(String facebookLink) {
        this.facebookLink = facebookLink;
    }

    public boolean isFamous() {
        return famous;
    }

    public void setFamous(boolean famous) {
        this.famous = famous;
    }
}

