package com.example.demo.services;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Area;
import com.example.demo.entities.Customer;
import com.example.demo.entities.DummyCustomer;
import com.example.demo.entities.Host;
import com.example.demo.entities.Role;
import com.example.demo.entities.User;
import com.example.demo.repositories.AreaRepository;
import com.example.demo.repositories.CustomerRepository;
import com.example.demo.repositories.RoleRepository;
import com.example.demo.repositories.UserRepository;

@Service
public class CustomerService {
	
	@Autowired
	CustomerRepository crepo;
	
	@Autowired
    private UserRepository urepo;
	
	@Autowired
	private RoleRepository rrepo;
	
	@Autowired
	private AreaRepository arepo;
	
	public List<Customer> getAllCustomers() {
        return crepo.findAll();
    }
	
	public List<Customer> getCustomersWithStatusZero() {
        return crepo.findAllByStatusIsZero();
	}

    public void registerCustomer(DummyCustomer dummyCustomer) {
        User user = new User();
        user.setUsername(dummyCustomer.getUsername());
        user.setPassword(dummyCustomer.getPassword());
        user.setStatus(false);
        Role r = rrepo.findById(3).get();
        user.setRole(r);
        urepo.save(user);

        Customer customer = new Customer();
        customer.setFname(dummyCustomer.getFname());
        customer.setLname(dummyCustomer.getLname());
        customer.setLicense_no(dummyCustomer.getLicense_no());
        customer.setContact(dummyCustomer.getContact());
        customer.setEmergency_contact(dummyCustomer.getEmergency_contact());
        customer.setDob(dummyCustomer.getDob());
        LocalDate localDate = LocalDate.now();
        Date todayDate = Date.valueOf(localDate);
        customer.setReg_date(todayDate);
        customer.setPancard_no(dummyCustomer.getPancard_no());
        customer.setAdhar_card(dummyCustomer.getAdhar_card());
        customer.setEmail_id(dummyCustomer.getEmail_id());
        customer.setUser(user);
        Area a = arepo.getById(dummyCustomer.getArea_id());
        customer.setArea(a);
        customer.setAddress(dummyCustomer.getAddress());
        crepo.save(customer);
    }
    
    public boolean isEmailExists(String email) {
        return crepo.isEmailExists(email);
    }
    
    public Customer getByUid(int uid)
    {
    	 Customer c = null;
    	 c= crepo.findCustomerByUid(uid);
//    	try {
//    		c=o.get();
//    	
//    	}
//    	catch(Exception e)
//    	{
//    		e.printStackTrace();
//    	}
    	return c;
    	
    }

	public Customer updateCustomerProfile(int uid, DummyCustomer dummyCustomer) {
		User user = urepo.findById(uid).get();
        //user.setUsername(dummyCustomer.getUsername());
       // user.setPassword(dummyCustomer.getPassword());
        //user.setStatus(false);
//        Role r = rrepo.findById(3).get();
//        user.setRole(r);
        urepo.save(user);

        Customer customer = crepo.findCustomerByUid(user.getUid());
        customer.setFname(dummyCustomer.getFname());
        customer.setLname(dummyCustomer.getLname());
        customer.setLicense_no(dummyCustomer.getLicense_no());
        customer.setContact(dummyCustomer.getContact());
        customer.setEmergency_contact(dummyCustomer.getEmergency_contact());
        customer.setDob(dummyCustomer.getDob());
//        LocalDate localDate = LocalDate.now();
//        Date todayDate = Date.valueOf(localDate);
//        customer.setReg_date(todayDate);
//        customer.setPancard_no(dummyCustomer.getPancard_no());
//        customer.setAdhar_card(dummyCustomer.getAdhar_card());
        customer.setEmail_id(dummyCustomer.getEmail_id());
        customer.setUser(user);
//        Area a = arepo.findById(null);
//        customer.setArea(a);
        customer.setAddress(dummyCustomer.getAddress());
        return crepo.save(customer);
		
	}
}
