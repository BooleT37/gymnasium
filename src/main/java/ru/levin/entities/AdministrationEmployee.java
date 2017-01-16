package ru.levin.entities;


import ru.levin.entities.enums.AdministrationPosition;

import javax.persistence.*;
import java.util.Date;

import static javax.persistence.EnumType.STRING;


@Entity
@Table(name = "TBL_ADMINISTRATION_EMPLOYEE")
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
    private Date birthDate;
    private Integer employmentYear;
    private Integer releaseYear;
    @Enumerated(STRING)
    @Column(nullable = false)
    private AdministrationPosition position;

    private AdministrationEmployee() {};

    public AdministrationEmployee(String firstName, String lastName, AdministrationPosition position) {
        this(firstName, lastName, null, null, null, null, position);
    }

    public AdministrationEmployee(String firstName, String lastName, String patronymic, AdministrationPosition position) {
        this(firstName, lastName, patronymic, null, null, null, position);
    }

    public AdministrationEmployee(String firstName, String lastName, String patronymic, Date birthDate, Integer employmentYear, Integer releaseYear, AdministrationPosition position) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.patronymic = patronymic;
        this.birthDate = birthDate;
        this.employmentYear = employmentYear;
        this.releaseYear = releaseYear;
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

    public Date getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(Date birthDate) {
        this.birthDate = birthDate;
    }

    public int getEmploymentYear() {
        return employmentYear;
    }

    public void setEmploymentYear(int employmentYear) {
        this.employmentYear = employmentYear;
    }

    public int getReleaseYear() {
        return releaseYear;
    }

    public void setReleaseYear(int releaseYear) {
        this.releaseYear = releaseYear;
    }

    public AdministrationPosition getPosition() {
        return position;
    }

    public void setPosition(AdministrationPosition position) {
        this.position = position;
    }
}
