package com.example.demo.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Customer;
import com.example.demo.ApiService;
@CrossOrigin("*")
@RestController
public class Controller{
	@Autowired
	ApiService repos;
	@GetMapping("/customer")
	public List<Customer> getCust(){
		return repos.getCustomers();
	}
	@GetMapping("/customer/{id}")
	public Optional<Customer> getCustById(@PathVariable int id){
		return repos.getCustomerById(id);
	}
	@PostMapping("/customer")
	public String postCust(@RequestBody Customer p) {
		return repos.addCustomer(p);
	}
	@PutMapping("/customer")
	public String putCust(@RequestBody Customer p) {
		return repos.addCustomer(p);
	}
	@DeleteMapping("/customer/{id}")
	public String delCust(@PathVariable int  id) {
		return repos.deleteCustomer(id);
	}
	
	
}