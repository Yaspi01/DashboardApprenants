package com.example.odkApprenant.services;

import com.example.odkApprenant.model.ListPresence;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public interface PresenceService {

    //Add to an user to presence list
    public void addPresence(ListPresence listPresence);

    //Get all presence list
    public List<ListPresence> getAPresenceList();

    //Get presence list by date
    public List<ListPresence> getPresenceList(LocalDate localDate);

    //Get presence list by week
    public List<ListPresence> getPresenceList(int year, int month, int day);

    //Get presence list by month
    public List<ListPresence> getPresenceList(int year, int month);

    //Get presence list between two periodes of time
    public List<ListPresence> getPresenceList(LocalDate min, LocalDate max);
}
