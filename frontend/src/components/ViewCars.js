import React from 'react';
import camry from '../images/camry.jpg';
import civic from '../images/civic.jpg';
import mustang from '../images/mustang.jpg';
import creta from '../images/creta.jpg';
import wagonR from '../images/wagonR.jpg';
import { useSelector } from 'react-redux';
import harrier from '../images/harrier.jpg';
import banner from '../images/banner.jpg';
import { useNavigate } from 'react-router-dom';

function ViewCars() {
  useSelector(state => state.logged)
  const cars = [
    {
      id: 1,
      name: 'Toyota Camry',
      pricePerHour: '₹300',
      transmission: 'Automatic',
      fuelType: 'Petrol',
      image: camry,
    },
    {
      id: 2,
      name: 'Honda Civic',
      pricePerHour: '₹250',
      transmission: 'Automatic',
      fuelType: 'Petrol',
      image: civic,
    },
    {
      id: 3,
      name: 'Ford Mustang',
      pricePerHour: '₹350',
      transmission: 'Manual',
      fuelType: 'Petrol',
      image: mustang,
    },
    {
      id: 4,
      name: 'Hyundai Creta',
      pricePerHour: '₹200',
      transmission: 'Manual',
      fuelType: 'Petrol',
      image: creta,
    },
    {
      id: 5,
      name: 'Suzuki Wagon R',
      pricePerHour: '₹100',
      transmission: 'Manual',
      fuelType: 'Petrol',
      image: wagonR,
    },
    {
      id: 6,
      name: 'Tata Harrier',
      pricePerHour: '₹250',
      transmission: 'Manual',
      fuelType: 'Petrol',
      image: harrier,
    },
  ];

  const navigate = useNavigate();

  const uniqueCars = cars.filter((car, index, self) =>
    index === self.findIndex(c => c.name === car.name && c.id === car.id)
  );

  return (
    <div className="container-fluid" style={{ backgroundColor: 'white', margin: '0%' }}>
      <div className='m-0'>
        <img src={banner} className="container-fluid" alt='banner' />
      </div>
      <h2 className="text-2xl font-bold mb-4 mt-3" style={{ textAlign: "center" }}>  Available Cars for Rent</h2>
      <div className="row container-fluid">
        {uniqueCars.map(car => (
          <div key={car.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img src={car.image} className="card-img-top" alt={car.name} />
              <div className="card-body">
                <h5 className="card-title">{car.name}</h5>
                <p className="card-text">Price per hour: {car.pricePerHour}</p>
                <p className="card-text">Transmission: {car.transmission}</p>
                <p className="card-text">Fuel Type: {car.fuelType}</p>
              </div>
              <div className="card-footer d-flex justify-content-center">
                <button className="btn btn-primary" onClick={() => navigate("/login")}>Book This Car</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Footer */}
      <div className="footer bg-dark text-white py-4">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="mb-0" style={{ fontSize: '20px', fontWeight: 'bold' }}>10+ Verified Cars</p>
            </div>
            <div className="col">
              <p className="mb-0" style={{ fontSize: '20px', fontWeight: 'bold' }}>3+ Trusted Hosts</p>
            </div>
            <div className="col">
              <p className="mb-0" style={{ fontSize: '20px', fontWeight: 'bold' }}>500+ KMs Driven</p>
            </div>
            <div className="col">
              <p className="mb-0" style={{ fontSize: '20px', fontWeight: 'bold' }}>1 City And Counting...</p>
            </div>
            <div className="col">
              <p className="mb-0" style={{ fontSize: '20px', fontWeight: 'bold' }}>10+ Locations in Pune</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default ViewCars;
