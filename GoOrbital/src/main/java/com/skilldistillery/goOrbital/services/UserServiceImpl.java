package com.skilldistillery.goOrbital.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.goOrbital.entities.User;
import com.skilldistillery.goOrbital.repositories.UserRepository;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepository repo; 

	@Override
	public List<User> index() {
		List<User> user = repo.findAll();
		return user;
	}

	@Override
	public User findById(int id) {
		Optional<User> optU = repo.findById(id);
		User user = null;
		if (optU.isPresent()) {
			user = optU.get();
		}
		return user;
	}

	@Override
	public User create(User user) {
		return repo.saveAndFlush(user);
	}

	@Override
	public User update(User user, int id) {
		User us = findById(id);
		
		if (us != null) {
			us.setPassword(user.getPassword());
			us.setUsername(user.getUsername());
			us.setEmail(user.getEmail());
			us.setEnabled(user.isEnabled());
			us.setRole(user.getRole());
		}
		return repo.saveAndFlush(us);
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
	public User findByUsername(String username) {
		return repo.findByUsername(username);
	}

}
