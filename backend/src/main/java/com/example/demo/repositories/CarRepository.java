package com.example.demo.repositories;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Car;
import com.example.demo.entities.Customer;

@Transactional
@Repository
public interface CarRepository extends JpaRepository<Car, Integer> {
	
	@Modifying
	@Query("Update Car set car_image = :photo WHERE car_id = :id")
	public int uploadImage(int id, byte[] photo);
	
	@Query("SELECT c FROM Car c WHERE c.status = 0")
	List<Car> findAllByStatusIsZero();
	
	@Transactional
	@Modifying
	@Query("UPDATE Car c SET c.status = 1 WHERE c.car_id = :cid")
	int updateStatus( int cid);
	
	@Transactional
	@Modifying
	@Query("UPDATE Car c SET c.status = NULL WHERE c.car_id = :cid")
	int updateStatusToNull( int cid);
}

 