package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Booking;
import com.example.demo.entities.Customer;
import com.example.demo.entities.DummyBooking;
import com.example.demo.entities.Host;
import com.example.demo.repositories.BookingRepository;
import com.example.demo.repositories.BookingRequestRepository;
import com.example.demo.repositories.CustomerRepository;
import com.example.demo.repositories.HostRepository;

@Service
public class BookingService {
	
	@Autowired
	private BookingRepository brepo;
	
	@Autowired
	private CustomerRepository crepo;
	
	@Autowired
	private BookingRequestRepository brrepo;
	
	@Autowired
	private HostRepository hrepo;
	
	public List<Booking> getaAllBookingsForCustomer(int uid){
		Customer c = crepo.findCustomerByUid(uid);
		return brepo.getAllBookingsForCustomer(c.getCustomer_id());
	}
	 public Booking saveBooking(DummyBooking dbooking) {
		 Booking b = new Booking();
		 b.setBookingRequest(brrepo.findById(dbooking.getReq_id()).get());
		 b.setAmount(dbooking.getAmount());
		 b.setPayment_mode(dbooking.getPayment_mode());
		 b.setPayment_date(dbooking.getPayment_date());
		 b.setTransaction_id(dbooking.getTransaction_id());
		 brrepo.confirmStatus(b.getBookingRequest().getReq_id());
		 return brepo.save(b);
	 }
	public List<Booking> getaAllBookings() {
		return brepo.findAll();
	}
	public List<Booking> getaAllBookingsForHost(int uid) {
		Host h = hrepo.findByUid(uid).get();
		return brepo.getAllBookingsForHost(h.getHost_id());
	}
}
