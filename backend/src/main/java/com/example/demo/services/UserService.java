package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Area;
import com.example.demo.entities.User;
import com.example.demo.repositories.UserRepository;

@Service
public class UserService {
	@Autowired
	UserRepository urepo;
	
	 public Optional<User> checkCredentials(String username, String password) {
		 return urepo.loginCheck(username, password);
	 }
	 
	 public List<User> getAllUsers() {
		 return urepo.findAll();
	 } 
	
}
