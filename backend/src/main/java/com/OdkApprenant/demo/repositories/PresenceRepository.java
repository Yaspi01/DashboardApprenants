package com.OdkApprenant.demo.repositories;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.OdkApprenant.demo.model.Presence;
import com.fasterxml.jackson.databind.deser.DataFormatReaders.Match;
@RepositoryRestResource
@CrossOrigin("*")
public interface PresenceRepository extends JpaRepository<Presence, Integer>{
	Optional<Presence>findByDate(@Param("date")Date date);
	List<Presence> findByDateBeforeAndDateAfter(@Param("startDate")Date startDate,@Param("enDate") Date endDate);

	

}
