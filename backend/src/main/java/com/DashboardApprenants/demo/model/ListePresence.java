package com.DashboardApprenants.demo.model;

import javax.persistence.*;
import java.util.Date;

@Entity
public class ListePresence {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    Date date;
    Date heure_arriver;
    Date heure_depart;
    String nom;
    String prenom;
    @ManyToOne
    private Admin id_admin;

    public ListePresence() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Date getHeure_arriver() {
        return heure_arriver;
    }

    public void setHeure_arriver(Date heure_arriver) {
        this.heure_arriver = heure_arriver;
    }

    public Date getHeure_depart() {
        return heure_depart;
    }

    public void setHeure_depart(Date heure_depart) {
        this.heure_depart = heure_depart;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }
}
