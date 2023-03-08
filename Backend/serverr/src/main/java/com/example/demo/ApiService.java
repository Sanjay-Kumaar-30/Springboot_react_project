package com.example.demo;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class ApiService {
	@Autowired
	ApiRepository repo;
	public List<Customer> getCustomers(){
		return repo.findAll();
	}
	public Optional<Customer> getCustomerById(int id){
		return repo.findById(id);
	}
	public String addCustomer(Customer p) {
		repo.save(p);
		return "Customer is added";
	}
	public String deleteCustomer(int id) {
		repo.deleteById(id);
		return "Customer is deleted";
	}

	
	

}
