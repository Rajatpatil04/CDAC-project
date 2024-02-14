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
@Table(name = "hosts")
public class Host {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="hostId")
    private int host_id;
    
    @Column(name="fname")
    private String fname;
    
    @Column(name="lname")
    private String lname;
    
    @Column(name="emailId")
    private String email_id;
    
    @Column(name="contact")
    private String contact;
    
    @Column(name="dob")
    private Date dob;
    
    @Column(name="pancard_number")
    private String pancard_number;
    
    @Column(name="adharcard_number")
    private String adharcard_number;
    
    @Column(name="upi_id")
    private String upi_id;
    
    @Column(name="reg_date")
    private Date reg_date;

    @ManyToOne
    @JoinColumn(name = "area_id")
    private Area area;

    @ManyToOne
    @JoinColumn(name = "uid")
    private User user;
    
    @Column(name="address")
    private String address;

}