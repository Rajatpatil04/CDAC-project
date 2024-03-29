package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Role;
import com.example.demo.services.RoleService;

@RestController
public class RoleController {
	@Autowired
	private RoleService rservice;
	
	@GetMapping("/getallRoles")
	public List<Role> getAll() {
        return rservice.getAllRoles();
    }
}
