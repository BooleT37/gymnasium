package ru.levin.entities;


import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import ru.levin.entities.enums.AdministrationPosition;

import javax.persistence.*;
import java.time.LocalDate;

import static javax.persistence.EnumType.STRING;


@Entity
@Table(name = "TBL_ADMINISTRATION_EMPLOYEE")
@JsonDeserialize
public class AdministrationEmployee {
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
    private Integer employmentYear;
    private Integer releaseYear;
    private String photoName;
    @Enumerated(STRING)
    @Column(nullable = false)
    private AdministrationPosition position;

    private AdministrationEmployee() {}

    public AdministrationEmployee(String firstName, String lastName, String patronymic, AdministrationPosition position) {
        this(firstName, lastName, patronymic, null, null, null, null, position);
    }

    public AdministrationEmployee(String firstName, String lastName, String patronymic, LocalDate birthDate, Integer employmentYear, Integer releaseYear, String photoName, AdministrationPosition position) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.patronymic = patronymic;
        this.birthDate = birthDate;
        this.employmentYear = employmentYear;
        this.releaseYear = releaseYear;
        this.photoName = photoName;
        this.position = position;
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

    public AdministrationPosition getPosition() {
        return position;
    }

    public void setPosition(AdministrationPosition position) {
        this.position = position;
    }
}