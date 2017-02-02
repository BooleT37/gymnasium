package ru.levin.entities;


import javax.persistence.*;

@Entity
@Table(name = "TBL_SOUVENIR")
public class Souvenir {
    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    private String name;

    private String photoName;

    private Souvenir() {}

    public Souvenir(Long id, String name, String photoName) {
        this.id = id;
        this.name = name;
        this.photoName = photoName;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhotoName() {
        return photoName;
    }

    public void setPhotoName(String photoName) {
        this.photoName = photoName;
    }
}
