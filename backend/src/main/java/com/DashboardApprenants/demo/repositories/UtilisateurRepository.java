package com.DashboardApprenants.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.DashboardApprenants.demo.model.Utilisateur;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.Optional;

@RepositoryRestResource
public interface UtilisateurRepository extends JpaRepository<Utilisateur, Long> {

    Optional<Utilisateur> getUserByLoginAndPassword(@Param("login")String login, @Param("password")String password);

}
