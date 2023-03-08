package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
@Entity
public class Customer {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private int bikeId;
	private String customerName;
	private String bikeVariant;
	private String bikeColor;
	private String paymentMode;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getBikeId() {
		return bikeId;
	}
	public void setBikeId(int bikeId) {
		this.bikeId = bikeId;
	}
	public String getCustomerName() {
		return customerName;
	}
	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}
	public String getBikeVariant() {
		return bikeVariant;
	}
	public void setBikeVariant(String bikeVariant) {
		this.bikeVariant = bikeVariant;
	}
	public String getBikeColor() {
		return bikeColor;
	}
	public void setBikeColor(String bikeColor) {
		this.bikeColor = bikeColor;
	}
	public String getPaymentMode() {
		return paymentMode;
	}
	public void setPaymentMode(String paymentMode) {
		this.paymentMode = paymentMode;
	}
}
