package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Car;

@Repository
public interface CarRepository extends JpaRepository<Car, Integer> {
	@Query("select c from Car c where")
	public List<Car> getCars(int capacity, int category_id);
}
