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
@Table(name = "cars")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "car_id")
    private Integer car_id;

    @ManyToOne
    @JoinColumn(name = "model_id")
    private CarModel carModel;

    @ManyToOne
    @Column(name = "host_id")
    private Host host;

    @ManyToOne
    @JoinColumn(name = "fuel_id")
    private FuelType fuelType;

    @Column(name = "mileage")
    private float mileage;

    @Column(name = "price_per_hour")
    private float price_per_hour;

    @Column(name = "color")
    private String color;

    @Column(name = "rc_no")
    private String rc_no;

    @Column(name = "reg_date")
    private Date reg_date;

    @Column(name = "insurance_type")
    private String insurance_type;

    @Column(name = "insurance_exp_date")
    private Date insurance_exp_date;

    @Column(name = "music_system")
    private Boolean music_system;

    @Column(name = "ac")
    private Boolean ac;

    @Column(name = "car_image")
    private byte[] car_image;
    
    @Column(name = "status")
    private Boolean status;

}