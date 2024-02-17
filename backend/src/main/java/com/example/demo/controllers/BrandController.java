package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Brand;
import com.example.demo.services.BrandService;

@RestController
public class BrandController {
	
	@Autowired
	private BrandService bservice;
	
	@GetMapping("getallbrands")
	public List<Brand> getAllBrands(){
		return bservice.getAllBrands(); 
	}
}
