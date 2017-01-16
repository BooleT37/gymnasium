package ru.levin.entities;

import javax.persistence.*;
import java.util.Date;

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
    private Date birthDate;
    @Column(length = 100)
    private String subject;
    private Integer employmentYear;
    private Integer releaseYear;
    private boolean famous;

    private Teacher() {}

    public Teacher(String firstName, String lastName) {
        this(firstName, lastName, null, null, null, null, null, false);
    }

    public Teacher(String firstName, String lastName, String patronymic) {
        this(firstName, lastName, patronymic, null, null, null, null, false);
    }

    public Teacher(String firstName, String lastName, String patronymic, Date birthDate, String subject, Integer employmentYear, Integer releaseYear, boolean famous) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.patronymic = patronymic;
        this.birthDate = birthDate;
        this.subject = subject;
        this.employmentYear = employmentYear;
        this.releaseYear = releaseYear;
        this.famous = famous;
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

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
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

    public boolean isFamous() {
        return famous;
    }

    public void setFamous(boolean famous) {
        this.famous = famous;
    }
}
