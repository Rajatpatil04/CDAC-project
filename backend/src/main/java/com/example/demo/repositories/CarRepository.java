package com.example.demo.repositories;

import java.time.LocalDateTime;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
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
	@Query("UPDATE Car c SET c.status = 2 WHERE c.car_id = :cid")
	int updateStatusToNull( int cid);
	
//	@Query("SELECT c FROM Car c WHERE c.model_id IN (SELECT c1.model_id FROM CarModel c1 WHERE c1.cat_id = :cat_id) AND c.model_id IN (SELECT c2.model_id FROM CarModel c2 WHERE c2.seating_capacity = :seating_capacity)")
//	List<Car> getSpecificCars(@Param("cat_id") int cat_id, @Param("seating_capacity") int seating_capacity);
	
//	@Query(value = "SELECT * FROM cars c " +
//            "WHERE c.model_id IN (SELECT c1.model_id FROM models c1 WHERE c1.cat_id = :cat_id) " +
//            "AND c.model_id IN (SELECT c2.model_id FROM models c2 WHERE c2.seating_capacity = :seating_capacity)", nativeQuery = true)
//List<Car> getSpecificCars(@Param("cat_id") int cat_id, @Param("seating_capacity") int seating_capacity);
	
	@Query(value = "SELECT * FROM cars c " +
            "WHERE c.model_id IN (SELECT m.model_id FROM models m WHERE m.cat_id = :cat_id) " +
            "AND c.model_id IN (SELECT m.model_id FROM models m WHERE m.seating_capacity = :seating_capacity) " +
            "AND c.car_id NOT IN (SELECT br.car_id FROM booking_requests br WHERE br.journey_date_time <= :journeyDate AND :journeyDate <= br.expected_return_date )" 
       //     + "AND c.car_id IN (SELECT b.car_id FROM booking_requests b WHERE b.status IN (1,2) )"
            +"AND c.status = 1"
            ,nativeQuery = true) // status pending
	List<Car> getSpecificCars(@Param("cat_id") int cat_id, @Param("seating_capacity") int seating_capacity, @Param("journeyDate") LocalDateTime journeyDate);


}

 