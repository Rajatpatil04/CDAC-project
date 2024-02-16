package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.CarModel;

@Repository
public interface CarModelRepository extends JpaRepository<CarModel, Integer> {

}
