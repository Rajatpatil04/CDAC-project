package com.example.demo.repositories;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import org.springframework.stereotype.Repository;
import com.example.demo.entities.User;


@Repository
@Transactional
public interface UserRepository extends JpaRepository<User, Integer> {
	
	@Query("SELECT u FROM User u WHERE u.username = ?1 AND u.password = ?2 AND u.status = 1")
	Optional<User> loginCheck(String username, String password);
	
	@Transactional
	@Modifying
	@Query("UPDATE User u SET u.status = 1 WHERE u.uid = :uid")
	int updateStatus( int uid);


	@Query("SELECT u FROM User u WHERE u.username = ?1")
	User getUser(String username);

	
	
	
}
