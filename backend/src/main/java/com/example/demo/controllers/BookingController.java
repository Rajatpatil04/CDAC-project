package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Booking;
import com.example.demo.services.BookingService;

@RestController
public class BookingController {
	
	@Autowired
	private BookingService bservice;
	
	@GetMapping("/bookingdetails")
	public List<Booking> getAllBookingsForCustomer(@RequestParam("uid") int uid){
		return bservice.getaAllBookingsForCustomer(uid);
	}
}
