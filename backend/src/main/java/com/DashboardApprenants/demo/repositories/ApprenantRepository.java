package com.DashboardApprenants.demo.repositories;

import com.DashboardApprenants.demo.model.Apprenant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApprenantRepository extends JpaRepository<Apprenant, Long> {
}
