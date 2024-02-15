package com.example.demo.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Area;
import com.example.demo.entities.DummyUser;
import com.example.demo.entities.User;
import com.example.demo.services.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
	
	@Autowired
	private UserService uservice;
	
	@PostMapping("/login")
	public User login(@RequestBody DummyUser u) {

        Optional<User> user = uservice.checkCredentials(u.getUsername(), u.getPassword());
        User u1 = null;
        try {
			 u1 = user.get();
			 System.out.println(u1);
		} catch (Exception e) {
//			u1 = new User();
//			u1.setUid(-1);
		}
        return u1;
        
    }
	
	@GetMapping("/getallusers")
	public List<User> getAll() {
        return uservice.getAllUsers();
    }
	
	@PutMapping("/changestatus")
	public int updateStatus(@RequestParam int uid) {
	    return uservice.updateStatus(uid);
	}
}
