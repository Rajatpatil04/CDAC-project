package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.entities.Area;
import com.example.demo.entities.Car;
import com.example.demo.entities.DummyCar;
import com.example.demo.services.CarService;

@RestController
public class CarController {
	@Autowired
	private CarService cservice;
	
	@PostMapping("/uploadcar")
    public Car uploadCar(@RequestBody DummyCar dummyCar) {
		return cservice.uploadCar(dummyCar);
    }
	
	@GetMapping("/getallcars")
	public List<Car> getAllCars() {
        return cservice.getAllCars();
    }
	
	@PostMapping(value="/uploadimage/{car_id}", consumes = "multipart/form-data")
	public boolean updateImg(@PathVariable("car_id") int id,@RequestBody MultipartFile file)
	{
		System.out.println("in controller");
		System.out.println(id);
		boolean flag = false;
		try
		{
			flag = cservice.uploadImg(id,file.getBytes());
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return flag;
	}
    
     @GetMapping("/getcarrequests")
      public List<Car> getcarswithrequests()
      {
    	 return cservice.getCarWithStatusZero();
      }
     
     @PutMapping("/approvecars")
 	  public int updateStatus(@RequestParam("car_id") int cid) {
 	    return cservice.updateStatus(cid);
 	        
 	}
     
     @PutMapping("/rejectcars")
	  public int updateStatusToRejetc(@RequestParam("car_id") int cid) {
	    return cservice.updateStatusToReject(cid);
     }
     
     @GetMapping("/cars")
 	public List<Car> getSpecificCars(@RequestParam("category") int cat_id, @RequestParam("seatingCapacity") int seating_capacity) {
    	 System.out.println(cat_id+" : "+ seating_capacity);
         return cservice.getSpecigicCars(cat_id, seating_capacity);
     }
     
}
