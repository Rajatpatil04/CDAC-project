package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.BookingRequest;
import com.example.demo.entities.DummyRequest;
import com.example.demo.entities.Host;
import com.example.demo.services.BookingRequestService;
import com.example.demo.services.HostService;

@RestController
public class BookingRequestController {

	@Autowired
	private BookingRequestService bservice;
	
	@Autowired
	private HostService hservice;
	
	@PostMapping("/addbookingrequest")
	public BookingRequest addRequest(@RequestBody DummyRequest dr) {
		System.out.println(dr);
		return bservice.addRequest(dr);
	}
	
	@PutMapping("/approverequest")
	public int approveStatus(@RequestParam("req_id") int req_id) {
 	    return bservice.approveStatus(req_id);
 	        
 	}
	
	@PutMapping("/rejectbooking")
	public int rejectStatus(@RequestParam("req_id") int req_id) {
 	    return bservice.rejectStatus(req_id);     
 	}
	
	@GetMapping("/getallbookings")
	public List<BookingRequest> getAllBookingsForHost(@RequestParam("uid")int uid){
		return bservice.getAllRequestsForHost(uid); 
	}
		
}
