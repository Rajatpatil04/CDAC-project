package com.example.demo.entities;

import java.sql.Date;
import java.time.LocalDateTime;

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
@Table(name = "bookings")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "booking_id")
    private Integer bookingId;

    @Column(name = "actual_pickup_date")
    private LocalDateTime actual_pickup_date;

    @Column(name = "actual_return_date")
    private LocalDateTime actual_return_date;

    @Column(name = "amount")
    private float amount;

    @Column(name = "payment_mode")
    private String payment_mode;

    @Column(name = "payment_date")
    private Date payment_date;

    @Column(name = "transaction_id")
    private String transaction_id;

    @ManyToOne
    @JoinColumn(name = "req_id")
    private BookingRequest bookingRequest;
}
