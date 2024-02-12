package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.repositories.CityRepository;

@Service
public class CityService {
	@Autowired
	CityRepository crepo;
}
