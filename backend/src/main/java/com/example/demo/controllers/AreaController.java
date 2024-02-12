package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Area;
import com.example.demo.services.AreaService;

@RestController
public class AreaController {

	@Autowired
	private AreaService aservice;
	
	@GetMapping("/getallareas")
	public List<Area> getAll() {
        return aservice.getAllAreas();
    }
}
