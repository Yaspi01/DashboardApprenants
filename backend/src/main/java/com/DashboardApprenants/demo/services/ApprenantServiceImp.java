package com.DashboardApprenants.demo.services;

import com.DashboardApprenants.demo.model.Utilisateur;
import com.DashboardApprenants.demo.repositories.UtilisateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ApprenantServiceImp implements ApprenantService{

    @Autowired
    UtilisateurRepository utilisateurRepository;
    @Override
    public Utilisateur ajouter_apprenant(Utilisateur utilisateur) {
        return utilisateurRepository.save(utilisateur);
    }

    @Override
    public Utilisateur modifier_apprenant(Long id, Utilisateur utilisateur) {
        Utilisateur utilisateurExistant = utilisateurRepository.findById(id).get();
        utilisateurExistant.setNom(utilisateur.getNom());
        utilisateurExistant.setPrenom(utilisateur.getPrenom());
        utilisateurExistant.setAge(utilisateur.getAge());
        utilisateurExistant.setGenre(utilisateur.getGenre());
        utilisateurExistant.setEmail(utilisateur.getEmail());
        utilisateurExistant.setLogin(utilisateur.getLogin());
        utilisateurExistant.setPassword(utilisateur.getPassword());
        utilisateurExistant.setTelephone(utilisateur.getTelephone());
        utilisateurExistant.setApprenantStatut(utilisateur.getApprenantStatut());
        utilisateurExistant.setDateCreation(utilisateur.getDateCreation());
        utilisateurExistant.setDateModification(utilisateur.getDateModification());
        return utilisateurRepository.save(utilisateurExistant);
    }

    @Override
    public List<Utilisateur> liste_apprenant() {
        return utilisateurRepository.findAll();
    }

    @Override
    public Utilisateur afficher_apprenant_by_id(Long id) {
        return utilisateurRepository.findById(id).get();
    }

    @Override
    public Optional<Utilisateur> loginUser(String login, String password) {
        return utilisateurRepository.getUserByLoginAndPassword(login, password);
    }

    @Override
    public void supprimer_apprenant(Long id) {
        utilisateurRepository.deleteById(id);
    }

}
