package ru.levin.model;


import ru.levin.entities.Souvenir;

public class SouvenirOrder {
    private Souvenir souvenir;
    private String fio;
    private String phone;
    private String email;

    public SouvenirOrder() {
    }

    public SouvenirOrder(Souvenir souvenir, String fio, String phone, String email) {
        this.souvenir = souvenir;
        this.fio = fio;
        this.phone = phone;
        this.email = email;
    }

    public Souvenir getSouvenir() {
        return souvenir;
    }

    public void setSouvenir(Souvenir souvenir) {
        this.souvenir = souvenir;
    }

    public String getFio() {
        return fio;
    }

    public void setFio(String fio) {
        this.fio = fio;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
