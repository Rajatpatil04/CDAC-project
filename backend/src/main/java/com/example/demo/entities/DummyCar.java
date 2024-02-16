package com.example.demo.entities;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class DummyCar {
	private int car_id;

    private int model_id;

    private int host_id;

    private int fuel_id;

    private float mileage;

    private float price_per_hour;

    private String color;

    private String rc_no;

    private Date reg_date;

    private String insurance_type;

    private Date insurance_exp_date;

    private Boolean music_system;

    private Boolean ac;

    private byte[] car_image;
    
    private Boolean status;
}
