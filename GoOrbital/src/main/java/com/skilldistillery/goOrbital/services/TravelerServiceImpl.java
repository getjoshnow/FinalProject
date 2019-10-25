package com.skilldistillery.goOrbital.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.goOrbital.entities.Traveler;
import com.skilldistillery.goOrbital.repositories.TravelerRepository;

@Service
public class TravelerServiceImpl implements TravelerService {

	@Autowired
	public TravelerRepository repo;
	
	@Override
	public List<Traveler> index() {
		List<Traveler> traveler = repo.findAll();
		return traveler;
	}

	@Override
	public Traveler findById(int id) {
		Optional<Traveler> optT = repo.findById(id);
		Traveler traveler = null;
		if (optT.isPresent()) {
			traveler = optT.get();
		}
		return traveler;
	}

	@Override
	public Traveler create(Traveler traveler) {
		return repo.saveAndFlush(traveler);
	}

	@Override
	public Traveler update(Traveler traveler, int id) {
		Traveler trav = findById(id);

		if (trav != null) {
			trav.setFirstName(traveler.getFirstName());
			trav.setLastName(traveler.getLastName());
			trav.setPhotoUrl(traveler.getPhotoUrl());
			trav.setTrips(traveler.getTrips());
		}
		return repo.saveAndFlush(trav);
	}

	@Override
	public boolean delete(int id) {
		try {
			if (repo.existsById(id)) {
				repo.deleteById(id);
				return true;
			} else {
				return false;
			}
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	@Override
	public Traveler findByUid(int uid) {
		Traveler traveler = repo.findByUser_Id(uid);
		return traveler;
	}

}
