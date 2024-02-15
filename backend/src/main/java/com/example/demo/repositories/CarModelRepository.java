package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.CarModel;

public interface CarModelRepository extends JpaRepository<CarModel, Integer> {

}
