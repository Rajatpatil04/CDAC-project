package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Area;
import com.example.demo.entities.Car;
import com.example.demo.entities.DummyCar;
import com.example.demo.services.CarService;

@RestController
public class CarController {
	@Autowired
	private CarService cservice;
	
	@PostMapping("/uploadcar")
    public void uploadCar(@RequestBody DummyCar dummyCar) {
		cservice.uploadCar(dummyCar);
    }
	
	@GetMapping("/getallcars")
	public List<Car> getAllCars() {
        return cservice.getAllCars();
    }

}
