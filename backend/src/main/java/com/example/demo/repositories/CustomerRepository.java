package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.example.demo.entities.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {

	@Query("SELECT COUNT(c) > 0 FROM Customer c WHERE c.email_id = :email")
    boolean isEmailExists(String email);
	

	@Query("SELECT c FROM Customer c WHERE c.user.uid IN (SELECT u.uid FROM User u WHERE u.status = 0)")
	List<Customer> findAllByStatusIsZero();



}
