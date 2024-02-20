package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Booking;

@Repository
public interface BookingRepository extends JpaRepository<Booking,Integer> {
	
	@Query("SELECT b FROM Booking b WHERE b.req_id IN (SELECT c.customer_id FROM Customer c WHERE c.customer_id = :customer_id)")
	public List<Booking> getAllBookingsForCustomer(int customer_id);

	
}
