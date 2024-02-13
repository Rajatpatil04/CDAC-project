package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import com.example.demo.entities.Host;

@Repository
public interface HostRepository extends JpaRepository<Host, Integer> {

	@Query("SELECT h FROM host h WHERE h.user.uid = (select u.uid from User u where u.status =0)")
    List<Host> findAllByStatusIsZero();
}
