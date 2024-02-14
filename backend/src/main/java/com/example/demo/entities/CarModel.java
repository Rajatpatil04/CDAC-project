
package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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
@Table(name = "car_models")
public class CarModel {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "model_id")
  private int model_id;

  @Column(name = "model_name")
  private String model__name;

  @Column(name = "category")
  private String category;

  @Column(name = "seats")
  private int seats;

  @Column(name = "transmission")
  private String transmission;

  @Column(name = "fuel_type")
  private String fuel_type;

  @Column(name = "package_a")
  private int package_a;

  @Column(name = "package_b")
  private int package_b;
}
