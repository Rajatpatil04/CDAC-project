package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Customer;
import com.example.demo.entities.DummyHost;
import com.example.demo.entities.Host;
import com.example.demo.services.HostService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class HostController {
	@Autowired
	private HostService hservice;
	
	@GetMapping("/getallhosts")
	public List<Host> getAllRoles() {
        return hservice.getAllHosts();
    }
	 @GetMapping("/gethostrequests")
	    public List<Host> getCustomersWithStatusZero() {
	        return hservice.getCustomersWithStatusZero();
	 }
	
	@PostMapping("/registerhost")
    public ResponseEntity<String> registerHost(@RequestBody DummyHost dummyHost) {        
        try {
        	hservice.registerHost(dummyHost);
            return new ResponseEntity<>("Host registered successfully", HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("Error registering Host: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
