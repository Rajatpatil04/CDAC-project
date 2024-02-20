package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Booking;
import com.example.demo.entities.BookingRequest;
import com.example.demo.entities.Customer;
import com.example.demo.entities.DummyRequest;
import com.example.demo.entities.Host;
import com.example.demo.repositories.BookingRequestRepository;
import com.example.demo.repositories.CarRepository;
import com.example.demo.repositories.CustomerRepository;
import com.example.demo.repositories.HostRepository;
import com.example.demo.repositories.PackageRepository;

@Service
public class BookingRequestService {
	
	@Autowired
	private BookingRequestRepository brepo;
	
	@Autowired
	private CarRepository crepo;
	
	@Autowired
	private CustomerRepository curepo;
	
	@Autowired
	private PackageRepository prepo;
	
	@Autowired
	private HostRepository hrepo;
	
	public BookingRequest addRequest(DummyRequest dr) {
		System.out.println(dr);
		BookingRequest br = new BookingRequest();
		br.setCar(crepo.findById(dr.getCar_id()).get());
		br.setCustomer(curepo.findCustomerByUid(dr.getCustomer_id()));
		br.setPack(prepo.findById(dr.getPackage_id()).get());
		br.setJourney_date_time(dr.getJourney_date_time());
		
		return brepo.save(br);
	}

	public int approveStatus(int req_id) {
		return brepo.approveStatus(req_id);
	}

	public int rejectStatus(int req_id) {
		return brepo.rejectStatus(req_id);
	}
	
	public List<BookingRequest> getAllRequestsForHost(int uid){
		Host h = hrepo.findByUid(uid).get();
		int host_id = h.getHost_id();
		return brepo.getAllRequestsForHost(host_id);
	}

	public List<BookingRequest> getApprovedBookingsForCustomer(int uid){
		Customer c = curepo.findCustomerByUid(uid);
		return brepo.getApprovedBookingsForCustomer(c.getCustomer_id());
	}
}
