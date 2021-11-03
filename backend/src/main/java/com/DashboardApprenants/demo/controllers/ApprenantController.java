package com.DashboardApprenants.demo.controllers;

import com.DashboardApprenants.demo.model.Utilisateur;
import com.DashboardApprenants.demo.services.ApprenantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/apprenantOdk")
public class ApprenantController {
    @Autowired
    ApprenantService apprenantService;

    @PostMapping(value="/apprenant")
    public Utilisateur save(@RequestBody Utilisateur utilisateur) {
        return apprenantService.ajouter_apprenant(utilisateur);
    }

    @GetMapping(path = "/apprenant/{id}")
    public Utilisateur getOne (@PathVariable Long id){
        return apprenantService.afficher_apprenant_by_id(id);
    }

    @GetMapping(path="/ListeApprenants", produces = {MediaType.APPLICATION_JSON_VALUE})
    public List<Utilisateur> liste(){
        return apprenantService.liste_apprenant();
    }

    @PutMapping(path = "/apprenant/{id}")
    public Utilisateur update(@RequestBody Utilisateur utilisateur, @PathVariable Long id){
        return apprenantService.modifier_apprenant(id, utilisateur);
    }

    @DeleteMapping(value="/apprenant/{id}")
    public void delete(@PathVariable("id") Long id) {
        apprenantService.supprimer_apprenant(id);
    }

    @GetMapping(path = "login/login={login}&password={password}")
    Optional<Utilisateur> loginApprenant(@PathVariable("login") String login, @PathVariable("password") String password){
        return apprenantService.loginUser(login, password);
    }
}
