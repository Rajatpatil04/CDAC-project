package com.example.demo.repositories;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Booking;
import com.example.demo.entities.BookingRequest;

@Repository
@Transactional
public interface BookingRequestRepository extends JpaRepository<BookingRequest, Integer> {

	@Modifying
	@Query("UPDATE BookingRequest b SET b.status = 1 WHERE b.req_id = :req_id")
	public int approveStatus(int req_id);

	@Modifying
	@Query("UPDATE BookingRequest b SET b.status = 2 WHERE b.req_id = :req_id")
	public int rejectStatus(int req_id);

//	@Query("SELECT b From BookingRequest b WHERE b.car_id IN (SELECT c.car_id from Car c WHERE c.host_id = : host_id )")
//	public List<BookingRequest> getAllRequests(int host_id);
	
	@Query(value = "SELECT * FROM booking_requests b WHERE b.car_id IN (SELECT c.car_id FROM cars c WHERE c.host_id = :host_id )AND b.status = 0", nativeQuery = true)
	public List<BookingRequest> getAllRequestsForHost(int host_id);

//	@Query("SELECT b FROM BookingRequest b WHERE b.customer_id = :customer_id AND b.status = 1")
//	public List<BookingRequest> getApprovedBookingsForCustomer(int customer_id);
	
	@Query("SELECT b FROM BookingRequest b WHERE b.customer.customer_id = :customer_id AND b.status = 1")
	List<BookingRequest> getApprovedBookingsForCustomer(int customer_id);
	
	@Modifying
	@Query("UPDATE BookingRequest b SET b.status = 3 WHERE b.req_id = :req_id")
	public int confirmStatus(int req_id);


}
