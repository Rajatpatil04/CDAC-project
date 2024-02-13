package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.example.demo.entities.Host;

@Repository
public interface HostRepository extends JpaRepository<Host, Integer> {

<<<<<<< Updated upstream
	@Query("SELECT h FROM Host h WHERE h.user.uid IN (SELECT u.uid FROM User u WHERE u.status = 0)")
	List<Host> findAllByStatusIsZero();
=======
<<<<<<< HEAD
	@Query("SELECT h FROM Host h WHERE h.user.uid IN (select u.uid from User u where u.status =0)")
    List<Host> findAllByStatusIsZero();
=======
	@Query("SELECT h FROM Host h WHERE h.user.uid IN (SELECT u.uid FROM User u WHERE u.status = 0)")
	List<Host> findAllByStatusIsZero();
>>>>>>> b51956022e03ada66c7ada45edcd34f8bd7f6835
>>>>>>> Stashed changes
}
