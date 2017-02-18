package ru.levin.model;


public class GraduateOrder {
    private String fio;
    private String birthDate;
    private String graduateYear;
    private String graduateClass;
    private String favouriteSubjects;
    private String achievements;
    private String photo;
    private String photoName;
    private String vkLink;
    private String facebookLink;

    public GraduateOrder() {
    }

    public GraduateOrder(String fio, String birthDate, String graduateYear, String graduateClass, String favouriteSubjects, String achievements, String photo, String photoName, String vkLink, String facebookLink) {
        this.fio = fio;
        this.birthDate = birthDate;
        this.graduateYear = graduateYear;
        this.graduateClass = graduateClass;
        this.favouriteSubjects = favouriteSubjects;
        this.achievements = achievements;
        this.photo = photo;
        this.photoName = photoName;
        this.vkLink = vkLink;
        this.facebookLink = facebookLink;
    }

    public String getFio() {
        return fio;
    }

    public void setFio(String fio) {
        this.fio = fio;
    }

    public String getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(String birthDate) {
        this.birthDate = birthDate;
    }

    public String getGraduateYear() {
        return graduateYear;
    }

    public void setGraduateYear(String graduateYear) {
        this.graduateYear = graduateYear;
    }

    public String getGraduateClass() {
        return graduateClass;
    }

    public void setGraduateClass(String graduateClass) {
        this.graduateClass = graduateClass;
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

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
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
}
