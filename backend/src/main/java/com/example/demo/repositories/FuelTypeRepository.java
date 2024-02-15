package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.FuelType;

public interface FuelTypeRepository extends JpaRepository<FuelType, Integer> {

}
