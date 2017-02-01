package ru.levin.entities;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
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
    @ElementCollection
    @CollectionTable(
        name="TBL_SUBJECTS"
    )
    private List<String> subjects;
    private Integer employmentYear;
    private Integer releaseYear;
    private boolean famous;

    @Transient
    private final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd.MM.yyyy");

    private Teacher() {}

    public Teacher(String firstName, String lastName) {
        this(firstName, lastName, null, null, null, null, null, false);
    }

    public Teacher(String firstName, String lastName, String patronymic) {
        this(firstName, lastName, patronymic, null, null, null, null, false);
    }

    public Teacher(String firstName, String lastName, String patronymic, LocalDate birthDate, List<String> subjects, Integer employmentYear, Integer releaseYear, boolean famous) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.patronymic = patronymic;
        this.birthDate = birthDate;
        this.subjects = subjects;
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

    public void setEmploymentYear(int employmentYear) {
        this.employmentYear = employmentYear;
    }

    public Integer getReleaseYear() {
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
