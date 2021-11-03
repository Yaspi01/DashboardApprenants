package com.DashboardApprenants.demo.model;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.ManyToOne;

@Entity
public class Apprenant extends Utilisateur{

    @Enumerated(EnumType.STRING)
    private TypeUtilisateur typeUtilisateur;
    @ManyToOne
    private Admin id_admin;
}
