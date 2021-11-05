package com.OdkApprenant.demo.controllers;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import com.OdkApprenant.demo.model.Presence;
import com.OdkApprenant.demo.services.PresenceService;
import com.fasterxml.jackson.databind.deser.DataFormatReaders.Match;

@RestController
@CrossOrigin("*")
public class PresenceController {
	@Autowired
	private PresenceService presenceService;

	@PostMapping(value = "/savePresence")
	public Presence save(@RequestBody Presence presence) {
		return presenceService.save(presence);
	}

	@GetMapping(value = "/Day/date={date}")
	public Optional<Presence> findByDate(@PathVariable("date") @DateTimeFormat(pattern = "yyyy-MM-dd") Date date) {
		return presenceService.findByDate(date);
	}

	@GetMapping(value = "/listByIntervale/dateDebut={debut}&dateFin={fin}")
	public List<Presence> findByStartDateBeforeAndEndDateAfter(
			@PathVariable("startDate") @DateTimeFormat(pattern = "yyyy-MM-dd") Date startDate,
			@PathVariable("enDate") @DateTimeFormat(pattern = "yyyy-MM-dd") Date endDate) {
		return presenceService.findByStartDateBeforeAndEndDateAfter(startDate, endDate);
	}

}
