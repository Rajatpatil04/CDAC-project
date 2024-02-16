package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Car;

@Repository
public interface CarRepository extends JpaRepository<Car, Integer> {
	
	@Modifying
	@Query("Update Car set car_image = :photo WHERE car_id = :id")
	public int uploadImage(int id, byte[] photo);
}
