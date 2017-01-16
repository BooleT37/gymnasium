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

    public GraduateClass(){};

    public GraduateClass(Integer graduateYear, Integer grade, String character) throws WrongGradeException {
        if (grade != 9 && grade != 11)
            throw new WrongGradeException(String.format("Grade must be equal to 9 or 11, %s given.", grade));
        this.graduateYear = graduateYear;
        this.grade = grade;
        this.character = character;
    }

    public Long getId() {
        return id;
    }

    public Integer getGraduateYear() {
        return graduateYear;
    }

    public Integer getGrade() {
        return grade;
    }

    public String getCharacter() {
        return character;
    }

    @Override
    public String toString() {
        return String.format("%d %s", grade, character);
    }
}
