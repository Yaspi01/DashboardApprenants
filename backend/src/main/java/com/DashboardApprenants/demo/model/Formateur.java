package com.DashboardApprenants.demo.model;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

@Entity
public class Formateur extends Utilisateur{

    @Enumerated(EnumType.STRING)
    private TypeUtilisateur typeUtilisateur;
}
