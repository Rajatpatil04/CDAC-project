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
public class DummyCustomer {
    private String fname;
    
    private String lname;
    
    private String license_no;
    
    private String contact;
    
    private String emergency_contact;
    
    private Date dob;
    
    private Date reg_date;
    
    private String pancard_no;

    private String adhar_card;
    
    private String email_id;

    private int area_id;
    
    private String address;
    
    private String username;
    
    private String password;
    
    private int role_id;

}
