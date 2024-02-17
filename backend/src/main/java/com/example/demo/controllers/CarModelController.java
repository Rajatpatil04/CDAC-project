package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.CarModel;
import com.example.demo.services.CarModelService;

@RestController
public class CarModelController {
	
	@Autowired
	CarModelService cmservice;
	
	@GetMapping("/getallcarmodels")
	public List<CarModel> getAll() {
        return cmservice.getAllCarModels();
    }
	
	@GetMapping("/getallcarmodelswithseatingcapacity")
	public List<CarModel> getAllCarsWithSeatingCapacity(@RequestParam("seating_capacity") int seating_capacity) {
        return cmservice.getAllCarsWithSeatingCapacity(seating_capacity);
    }
	
}
