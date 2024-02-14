package com.example.demo.entities;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

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
@Table(name = "area")
public class Area {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="area_id")
    private int area_id;
    
    @Column(name="area_name")
    private String area_name;
    
    @Column(name = "pincode")
    private int pincode;

    @ManyToOne
    @JoinColumn(name = "city_id")
    private City city;

    @JsonIgnoreProperties("area")
    @OneToMany(mappedBy = "area", cascade = CascadeType.ALL)
    Set<Customer> customers;

    @JsonIgnoreProperties("area")
    @OneToMany(mappedBy = "area", cascade = CascadeType.ALL)
    Set<Host> hosts;
}