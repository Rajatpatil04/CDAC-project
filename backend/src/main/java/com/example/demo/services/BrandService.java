package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Brand;
import com.example.demo.repositories.BrandRepository;

@Service
public class BrandService {
	
	@Autowired
	private BrandRepository brepo;
	
	public List<Brand> getAllBrands(){
		return brepo.findAll();
	}
}
