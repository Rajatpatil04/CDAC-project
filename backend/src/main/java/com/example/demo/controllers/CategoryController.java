package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Category;
import com.example.demo.entities.FuelType;
import com.example.demo.services.CategoryService;
import com.example.demo.services.FuelTypeService;

@RestController
public class CategoryController {
	@Autowired
	CategoryService cservice;
	
	@GetMapping("/getallcategories")
	public List<Category> getAll() {
        return cservice.getAllCatagories();
    }
}
