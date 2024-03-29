package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Package;
import com.example.demo.repositories.PackageRepository;

@Service
public class PackageService {
	
	@Autowired
	PackageRepository prepo;
	
	public List<Package> getAllPackages(){
		return prepo.findAll();
	}
}
