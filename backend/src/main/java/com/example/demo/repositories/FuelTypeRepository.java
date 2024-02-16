package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.FuelType;

@Repository
public interface FuelTypeRepository extends JpaRepository<FuelType, Integer> {

}
