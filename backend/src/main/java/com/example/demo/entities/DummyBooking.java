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
public class DummyBooking {
	private int req_id;
	private float amount;
	private String payment_mode;
	private Date payment_date;
	private String transaction_id;
}
