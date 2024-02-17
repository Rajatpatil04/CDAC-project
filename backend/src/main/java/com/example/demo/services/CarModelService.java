package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.CarModel;
import com.example.demo.repositories.CarModelRepository;

@Service
public class CarModelService {

	@Autowired
	CarModelRepository crepo;
	
	public List<CarModel> getAllCarModels() {
		return crepo.findAll();
	}
	
	public List<CarModel> getAllCarsWithSeatingCapacity( int seating_capacity) {
		return crepo.getAllCarsWithSeatingCapacity(seating_capacity);
	}
}
