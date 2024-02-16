package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.FuelType;
import com.example.demo.repositories.FuelTypeRepository;

@Service
public class FuelTypeService {
	
	@Autowired
	private FuelTypeRepository frepo;
	
	public List<FuelType> getAllFuelTypes() {
        return frepo.findAll();
    }
}
