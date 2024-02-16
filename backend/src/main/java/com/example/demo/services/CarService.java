package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.entities.Area;
import com.example.demo.entities.Car;
import com.example.demo.entities.DummyCar;
import com.example.demo.repositories.CarModelRepository;
import com.example.demo.repositories.CarRepository;
import com.example.demo.repositories.FuelTypeRepository;
import com.example.demo.repositories.HostRepository;

@Service
public class CarService {
	
	@Autowired
	private CarRepository crepo;
	
	@Autowired
	private CarModelRepository cmrepo;
	
	@Autowired
	private HostRepository hrepo;
	
	@Autowired
	private FuelTypeRepository ftrepo;
	
	public void uploadCar(DummyCar dcar) {
		System.out.println(dcar);
		Car c = new Car();
		c.setCarModel( cmrepo.findById(dcar.getModel_id()).get());
		c.setHost(hrepo.findById(dcar.getHost_id()).get());
		c.setFuelType(ftrepo.findById(dcar.getFuel_id()).get());
		c.setMileage(dcar.getMileage());
		c.setPrice_per_hour(dcar.getPrice_per_hour());
		c.setColor(dcar.getColor());
		c.setRc_no(dcar.getRc_no());
		c.setReg_date(dcar.getReg_date());
		c.setInsurance_type(dcar.getInsurance_type());
		c.setInsurance_exp_date(dcar.getInsurance_exp_date());
		c.setMusic_system(dcar.getMusic_system());
		c.setAc(dcar.getAc());
		//c.setCar_image(dcar.getCar_image());
		c.setStatus(false);
		crepo.save(c);
	}

	public boolean updateImg(int id, byte[] arr) {
		{
			boolean flag = false;
			try
			{
				Car c = crepo.findById(id).get();
				c.setCar_image(arr);
				crepo.save(c);
			}
			catch(Exception e)
			{
				e.printStackTrace();
			}
			return flag;
		}
	}
	
	public List<Car> getAllCars() {
		return crepo.findAll();
	}
	
	public List<Car> getAllCars(int capacity, int category_id) {
		return crepo.findAll();
	}
}
