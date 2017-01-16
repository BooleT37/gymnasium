package ru.levin.entities;


import javax.persistence.*;

@Entity
@Table(name = "TBL_SOUVENIR")
public class Souvenir {
    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    private String Name;

    private Souvenir() {}

    public Souvenir(String name) {
        Name = name;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }
}
