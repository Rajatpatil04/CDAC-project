package com.example.demo.services;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Area;
<<<<<<< HEAD

=======
import com.example.demo.entities.Customer;
>>>>>>> aditya
import com.example.demo.entities.DummyHost;
import com.example.demo.entities.Host;
import com.example.demo.entities.Role;
import com.example.demo.entities.User;
import com.example.demo.repositories.AreaRepository;
import com.example.demo.repositories.HostRepository;
import com.example.demo.repositories.RoleRepository;
import com.example.demo.repositories.UserRepository;

@Service
public class HostService {
	
	@Autowired
	HostRepository hrepo;
	
	@Autowired
	UserRepository urepo;
	
	@Autowired
	AreaRepository arepo;
	
	@Autowired
	RoleRepository rrepo;
	
	@Autowired
	private PasswordEncoder passwordencoder;
	
	public List<Host> getAllHosts() {
        return hrepo.findAll();
    }
<<<<<<< HEAD
	 public List<Host> getHostsWithStatusZero() {
=======
	 public List<Host> getCustomersWithStatusZero() {
>>>>>>> aditya
	        return hrepo.findAllByStatusIsZero();
	}
	
	public void registerHost(DummyHost dummyHost) {
        User user = new User();
        user.setUsername(dummyHost.getUsername());
        user.setPassword(passwordencoder.encode(dummyHost.getPassword()));
        System.out.println(passwordencoder.encode(dummyHost.getPassword()));
        user.setStatus(false);
        Role r = rrepo.findById(2).get();
        user.setRole(r);
        urepo.save(user);

        Host host = new Host();
     //   host.setHost_id(0);
        host.setFname(dummyHost.getFname());
        host.setLname(dummyHost.getLname());
        Area a = arepo.findById(dummyHost.getArea_id()).get();
        host.setArea(a);
        host.setEmail_id(dummyHost.getEmail_id());
        host.setContact(dummyHost.getContact());
        host.setDob(dummyHost.getDob());
        host.setPancard_number(dummyHost.getPancard_number());
        host.setAdharcard_number(dummyHost.getAdharcard_number());
        host.setUpi_id(dummyHost.getUpi_id());
        LocalDate localDate = LocalDate.now();
        Date todayDate = Date.valueOf(localDate);
        host.setReg_date(todayDate);
        host.setAddress(dummyHost.getAddress()); 
        host.setUser(user);
        
        hrepo.save(host);
    }
}
