package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.CarModel;

@Repository
public interface CarModelRepository extends JpaRepository<CarModel, Integer> {
	
	@Query("SELECT c FROM CarModel c WHERE c.seating_capacity = :seating_capacity")
    List<CarModel> getAllCarsWithSeatingCapacity(int seating_capacity);
}
