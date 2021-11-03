package com.DashboardApprenants.demo.model;

import javax.persistence.ManyToOne;

public class Gerer {

    Long id;
    @ManyToOne
    private Utilisateur id_user;
    @ManyToOne
    private Admin id_admin;

    public Gerer() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


}
