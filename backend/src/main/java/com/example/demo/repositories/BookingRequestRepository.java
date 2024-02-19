package com.example.demo.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

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

}
