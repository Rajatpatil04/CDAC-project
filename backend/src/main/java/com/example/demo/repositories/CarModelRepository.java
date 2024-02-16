package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.CarModel;

@Repository
public interface CarModelRepository extends JpaRepository<CarModel, Integer> {
	@Query("select c from CarModel c where seating_capacity=?1 AND cat_id=?2")
	public List<CarModel> getCars(int capacity, int category_id);
}
