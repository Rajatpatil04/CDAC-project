package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.entities.Customer;
import com.example.demo.entities.DummyCustomer;
import com.example.demo.services.CustomerService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CustomerController {
	@Autowired
	private CustomerService cservice;
	
	@GetMapping("/getallcustomers")
	public List<Customer> getAllRoles() {
        return cservice.getAllCustomers();
    }
	 @GetMapping("/getcustomerrequests")
	    public List<Customer> getCustomersWithStatusZero() {
	        return cservice.getCustomersWithStatusZero();
	 }
	
	@GetMapping("/getcustomerrequests")
    public List<Customer> getCustomersWithStatusZero() {
        return cservice.getCustomersWithStatusZero();
	}
	
	@PostMapping("/registercustomer")
    public ResponseEntity<String> registerUser(@RequestBody DummyCustomer dummyCustomer) {
		try {
            cservice.registerCustomer(dummyCustomer);
            return new ResponseEntity<>("Customer registered successfully", HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("Error registering customer: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
	
	@GetMapping("/getemailverification")
    public boolean isEmailExists(@RequestParam String email) {
        return cservice.isEmailExists(email);
    }
}
