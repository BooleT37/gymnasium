package ru.levin.entities;

import ru.levin.entities.exceptions.WrongGradeException;

import javax.persistence.*;

@Entity
@Table(name = "TBL_GRADUATE_CLASS")
public class GraduateClass {
    @Id
    @GeneratedValue
    private Long id;
    @Column(nullable = false)
    private Integer graduateYear;
    @Column(nullable = false)
    private Integer grade;
    @Column(nullable = false)
    private String character;
    private String photoName;

    public GraduateClass(){}

    public GraduateClass(Integer graduateYear, Integer grade, String character, String photoName) throws WrongGradeException {
        if (grade != 9 && grade != 11)
            throw new WrongGradeException(String.format("Grade must be equal to 9 or 11, %s given.", grade));
        this.graduateYear = graduateYear;
        this.grade = grade;
        this.character = character;
        this.photoName = photoName;
    }

    public GraduateClass(Integer graduateYear, Integer grade, String character) throws WrongGradeException {
        this(graduateYear, grade, character, null);
    }

    public Long getId() {
        return id;
    }

    public Integer getGraduateYear() {
        return graduateYear;
    }

    public void setGraduateYear(Integer graduateYear) {
        this.graduateYear = graduateYear;
    }

    public Integer getGrade() {
        return grade;
    }

    public void setGrade(Integer grade) {
        this.grade = grade;
    }

    public String getCharacter() {
        return character;
    }

    public void setCharacter(String character) {
        this.character = character;
    }

    public String getPhotoName() {
        return photoName;
    }

    public void setPhotoName(String photoName) {
        this.photoName = photoName;
    }

    @Override
    public String toString() {
        return String.format("%d %s", grade, character);
    }
}
