package com.example.demo.entities;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DummyHost {
    private String fname;
    
    private String lname;
    
    private String email_id;
    
    private String contact;
    
    private Date dob;
    
    private String pancard_number;
    
    private String adharcard_number;
    
    private String upi_id;
    
    private Date reg_date;

    private int  area_id;
    
    private String address;
    
    private String username;
    
    private String password;
    
    private int roleId;
	
}
