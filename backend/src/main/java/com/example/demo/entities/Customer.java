package com.example.demo.entities;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Table(name = "customers")
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "customerId")
    private int customer_id;
    
    @Column(name = "fname")
    private String fname;
    
    @Column(name = "lname")
    private String lname;
    
    @Column(name = "license_no")
    private String license_no;
    
    @Column(name = "contact")
    private String contact;
    
    @Column(name = "emergency_contact")
    private String emergency_contact;
    
    @Column(name = "dob")
    private Date dob;
    
    @Column(name = "reg_date")
    private Date reg_date;//
    
    @Column(name = "pancard_no")
    private String pancard_no;
    
    @Column(name = "adhar_card")
    private String adhar_card;

    @ManyToOne
    @JoinColumn(name = "uid")
    private User user;

    @ManyToOne
    @JoinColumn(name = "area_id")
    private Area area;
    
    @Column(name="address")
    private String address;
    
    @Column(name="email_id")
    private String email_id;
    
    
}