package ru.levin.models;

import java.util.List;

public class TeacherJson {
    private Long id;
    private String firstName;
    private String lastName;
    private String patronymic;
    private String birthDate;
    private List<String> subjects;
    private Integer employmentYear;
    private Integer releaseYear;
    private boolean famous;

    public TeacherJson(Long id, String firstName, String lastName, String patronymic, String birthDate, List<String> subjects, Integer employmentYear, Integer releaseYear, boolean famous) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.patronymic = patronymic;
        this.birthDate = birthDate;
        this.subjects = subjects;
        this.employmentYear = employmentYear;
        this.releaseYear = releaseYear;
        this.famous = famous;
    }

    public TeacherJson(String firstName, String lastName, String patronymic, String birthDate, List<String> subjects, Integer employmentYear, Integer releaseYear, boolean famous) {
        this(null, firstName, lastName, patronymic, birthDate, subjects, employmentYear,releaseYear, famous);
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

    public String getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(String birthDate) {
        this.birthDate = birthDate;
    }

    public List<String> getSubjects() {
        return subjects;
    }

    public void setSubjects(List<String> subjects) {
        this.subjects = subjects;
    }

    public Integer getEmploymentYear() {
        return employmentYear;
    }

    public void setEmploymentYear(Integer employmentYear) {
        this.employmentYear = employmentYear;
    }

    public Integer getReleaseYear() {
        return releaseYear;
    }

    public void setReleaseYear(Integer releaseYear) {
        this.releaseYear = releaseYear;
    }

    public boolean isFamous() {
        return famous;
    }

    public void setFamous(boolean famous) {
        this.famous = famous;
    }
}
