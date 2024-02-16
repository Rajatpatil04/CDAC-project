package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Package;

@Repository
public interface PackageRepository extends JpaRepository<Package, Integer> {

}
