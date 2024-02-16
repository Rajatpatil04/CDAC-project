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
	
//	@GetMapping("/getAllCars")
//	public List<CarModel> getCars() {
//        return cmservice.getAllCarModels();
//    }
	
}
