package com.example.odkApprenant.repositories;

import com.example.odkApprenant.model.ListPresence;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface PresenceRepository extends JpaRepository<ListPresence, Long> {
    public List<ListPresence> getPresenceListByDate(LocalDate localDate);
    public List<ListPresence> getPresenceListByDateGreaterThanEqualAndDateLessThanEqual(LocalDate min, LocalDate max);
}