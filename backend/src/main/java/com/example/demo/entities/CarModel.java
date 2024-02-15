package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
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
@Table(name = "models")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class CarModel {

    @Id
    @Column(name = "model_id")
    private int model_id;
    
    @Column(name="model_name")
    private String model_name;

    @ManyToOne
    @JoinColumn(name = "brand_id")
    private Brand brand;

    @Column(name = "transmission_type")
    private String transmission_type;

    @Column(name = "seating_capacity")
    private int seating_capacity;

    @Column(name = "gps_navigation_system")
    private Boolean gps_navigation_system;

    @ManyToOne
    @JoinColumn(name = "cat_id")
    private Category category;

}