package com.DashboardApprenants.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.DashboardApprenants.demo.model.Utilisateur;

public interface ApprenantRepository extends JpaRepository<Utilisateur, Long> {

}
