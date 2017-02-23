package ru.levin.entities;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "TBL_TEACHER")
public class Teacher {
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
    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(
        name="TBL_SUBJECTS"
    )
    private List<String> subjects;
    private Integer employmentYear;
    private Integer releaseYear;
    private String photoName;

    private Teacher() {}

    public Teacher(String firstName, String lastName, String patronymic) {
        this(firstName, lastName, patronymic, null, null, null, null, null);
    }

    public Teacher(String firstName, String lastName, String patronymic, LocalDate birthDate, List<String> subjects, Integer employmentYear, Integer releaseYear, String photoName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.patronymic = patronymic;
        this.birthDate = birthDate;
        this.subjects = subjects;
        this.employmentYear = employmentYear;
        this.releaseYear = releaseYear;
        this.photoName = photoName;
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

    public String getPhotoName() {
        return photoName;
    }

    public void setPhotoName(String photoName) {
        this.photoName = photoName;
    }
}
