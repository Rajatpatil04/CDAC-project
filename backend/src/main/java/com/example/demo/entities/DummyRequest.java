package com.example.demo.entities;

import java.time.LocalDateTime;

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
public class DummyRequest {
	private int car_id;
	private int customer_id;
	private int package_id;
	private LocalDateTime journey_date_time;
	
}
