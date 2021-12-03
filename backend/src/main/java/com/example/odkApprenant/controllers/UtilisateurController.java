package com.example.odkApprenant.controllers;

import com.example.odkApprenant.model.Profil;
import com.example.odkApprenant.model.Utilisateur;
import com.example.odkApprenant.services.UtilisateurServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/utilisateur")
public class UsersController {
    @Autowired
    private UtilisateurServiceImp utilisateurServiceImp;

    //Ajouter un utilisateur, l'attribut profile est la principale différence
    @PostMapping("/ajout")
    public String saveApprenant(@RequestBody Utilisateur utilisateur){
        utilisateurServiceImp.ajouterUtilisateur(utilisateur);
        return "Enregistrement effectuée avec succès...";
    }

    //La mise en jour d'un utilisateur
    @PutMapping("/modifier/{id}")
    public String editApprenant(@PathVariable("id") Long id, @RequestBody Utilisateur utilisateur){
        utilisateurServiceImp.modifierUtilisateur(id, utilisateur);
        return "Apprenant modifié avec success...";
    }

    //Recuperer un utilisateur par son id
    @GetMapping("/afficherById/{id}")
    public Optional<Utilisateur> getApprenantById(@PathVariable("id") Long id){
        return utilisateurServiceImp.utilisateurById(id);
    }

    //Recuperer tous les utilisateurs
    @GetMapping("/listUtilisateur")
    public List<Utilisateur> getAllUsers(){
        return utilisateurServiceImp.afficherUtilisateur();
    }

    //Recuperer les utilisateurs par profil
    @GetMapping("/profile/{profil}")
    public List<Utilisateur> getAllUserByProfil(@PathVariable("profil") Profil profil){
        return utilisateurServiceImp.utilisateurByProfil(profil);
    }

    //Supprimer un utilisateur par son id
    @DeleteMapping("/delete/{id}")
    public String deleteAnUsers(@PathVariable("id") Long id){
        utilisateurServiceImp.deleteUtilisateur(id);
        return "Apprenant effacé avec succèss...";
    }

    @GetMapping("/login/{login}&{password}")
    public Utilisateur checkUser(@PathVariable("login") String login,
                                 @PathVariable("password") String password){
        return utilisateurServiceImp.getAuth(login, password);
    }
}
