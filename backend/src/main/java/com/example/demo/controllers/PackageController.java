package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Package;
import com.example.demo.services.PackageService;

@RestController
public class PackageController {
	
	@Autowired
	public PackageService pservice;
	
	
	@GetMapping("/getallpackages")
	public List<Package> getAllPackages() {
        return pservice.getAllPackages();
    }

}
