package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Area;
import com.example.demo.entities.Role;
import com.example.demo.repositories.AreaRepository;

@Service
public class AreaService {
	@Autowired
	AreaRepository arepo;
	
	public List<Area> getAllAreas() {
        return arepo.findAll();
    }
	
}
