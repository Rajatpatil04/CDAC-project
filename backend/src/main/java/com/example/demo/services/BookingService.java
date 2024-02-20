package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Booking;
import com.example.demo.entities.Customer;
import com.example.demo.repositories.BookingRepository;
import com.example.demo.repositories.CustomerRepository;

@Service
public class BookingService {
	
	@Autowired
	BookingRepository brepo;
	
	@Autowired
	CustomerRepository crepo;
	
	public List<Booking> getaAllBookingsForCustomer(int uid){
		Customer c = crepo.findCustomerByUid(uid);
		return brepo.getAllBookingsForCustomer(c.getCustomer_id());
	}

}
