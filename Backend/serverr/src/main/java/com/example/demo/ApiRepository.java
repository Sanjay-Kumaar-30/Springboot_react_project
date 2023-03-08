package com.example.demo;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ApiRepository extends JpaRepository<Customer,Integer> {

}
