package com.DashboardApprenants.demo.services;

import com.DashboardApprenants.demo.model.Utilisateur;

import java.util.List;
import java.util.Optional;

public interface ApprenantService {

    public Utilisateur ajouter_apprenant(Utilisateur utilisateur);
    public Utilisateur modifier_apprenant(Long id, Utilisateur utilisateur);
    public List<Utilisateur> liste_apprenant();
    public Utilisateur afficher_apprenant_by_id(Long id);

    public Optional<Utilisateur> loginUser(String login, String password);
    void supprimer_apprenant(Long id);
}
