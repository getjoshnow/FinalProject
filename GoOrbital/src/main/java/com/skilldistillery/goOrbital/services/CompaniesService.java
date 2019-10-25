package com.skilldistillery.goOrbital.services;

import java.util.List;

import com.skilldistillery.goOrbital.entities.Companies;

public interface CompaniesService {
	List<Companies> index();
	
	Companies findById(int id);
	
	Companies create(Companies company);

	Companies update(Companies provider, int id);

	boolean delete(int id);
	
	Companies findByUid(int id);

	Companies findByName(String name);

}
