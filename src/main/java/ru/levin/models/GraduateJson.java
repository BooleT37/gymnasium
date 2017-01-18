package ru.levin.models;


import java.io.Serializable;

public class GraduateJson implements Serializable {
    private Long id;
    private String firstName;
    private String lastName;
    private String patronymic;
    private String birthDate;
    private Long graduateClassId;
    private String interests;
    private String favouriteSubjects;
    private String achievements;
    private String photoName;
    private String vkLink;
    private String facebookLink;
    private boolean famous;

    public GraduateJson() {}

    public GraduateJson(Long id, String firstName, String lastName, String patronymic, String birthDate, Long graduateClassId, String interests, String favouriteSubjects, String achievements, String photoName, String vkLink, String facebookLink, boolean famous) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.patronymic = patronymic;
        this.birthDate = birthDate;
        this.graduateClassId = graduateClassId;
        this.interests = interests;
        this.favouriteSubjects = favouriteSubjects;
        this.achievements = achievements;
        this.photoName = photoName;
        this.vkLink = vkLink;
        this.facebookLink = facebookLink;
        this.famous = famous;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public String getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(String birthDate) {
        this.birthDate = birthDate;
    }

    public Long getGraduateClassId() {
        return graduateClassId;
    }

    public void setGraduateClassId(Long graduateClassId) {
        this.graduateClassId = graduateClassId;
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
