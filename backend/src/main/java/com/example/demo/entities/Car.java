package com.example.demo.entities;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
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
@Table(name = "cars")
public class Car{

	  @Id
	  @GeneratedValue(strategy = GenerationType.AUTO)
	  @Column(name = "car_id")
	  private int car_id;

	  @Column(name = "model_id")
	  private int model_id;

//	  @ManyToOne
//	  @JoinColumn(name = "model_id")
//	  private CarModel model;

	  @Column(name = "color")
	  private String color;

	  @Column(name = "rc_no")
	  private String rcNo;

	  @Column(name = "insurance_exp_date")
	  private Date insuranceExpDate;

	  @Column(name = "reg_date")
	  private Date regDate;

	  @Lob
	  @Column(name = "car_img")
	  private byte[] carImg;

	}
