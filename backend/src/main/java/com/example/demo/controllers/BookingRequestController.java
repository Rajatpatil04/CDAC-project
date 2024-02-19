package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.BookingRequest;
import com.example.demo.entities.DummyRequest;
import com.example.demo.services.BookingRequestService;

@RestController
public class BookingRequestController {

	@Autowired
	private BookingRequestService bservice;
	
	@PostMapping("/addbookingrequest")
	public BookingRequest addRequest(@RequestBody DummyRequest dr) {
		System.out.println(dr);
		return bservice.addRequest(dr);
	}
	
	@PutMapping("/approverequest")
	public int approveStatus(@RequestParam("req_id") int req_id) {
 	    return bservice.approveStatus(req_id);
 	        
 	}
	
	@PutMapping("/rejectrequest")
	public int rejectStatus(@RequestParam("req_id") int req_id) {
 	    return bservice.rejectStatus(req_id);
 	        
 	}
}
