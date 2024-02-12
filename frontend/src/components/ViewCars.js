// import React, { useState, useEffect } from 'react';

// function ViewCars() {
//   const [cars, setCars] = useState([]);

//   useEffect(() => {
//     fetch('your-backend-url/viewCars')
//       .then(response => response.json())
//       .then(data => setCars(data))
//       .catch(error => console.error('Error fetching cars:', error));
//   }, []);

//   return (
//     <div className="container mt-4">
//       <h2 className="text-2xl font-bold mb-4">Available Cars</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {cars.map(car => (
//           <div key={car.id} className="border rounded p-4">
//             <img src={car.image} alt={car.name} className="w-full h-40 object-cover mb-4" />
//             <h3 className="text-lg font-semibold mb-2">{car.name}</h3>
//             <p className="text-gray-700 mb-2">{`Price per hour: ${car.pricePerHour}`}</p>
//             <p className="text-gray-700 mb-2">{`Transmission: ${car.transmission}`}</p>
//             <p className="text-gray-700 mb-2">{`Fuel Type: ${car.fuelType}`}</p>
//             {/* Add more details as needed */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ViewCars;







import React from 'react';
import camry from '../images/camry.jpg';
import civic from '../images/civic.jpg';
import mustang from '../images/mustang.jpg';
import creta from '../images/creta.jpg';
import wagonR from '../images/wagonR.jpg';
import harrier from '../images/harrier.jpg'

function ViewCars() {
  const cars = [
    {
      id: 1,
      name: 'Toyota Camry',
      pricePerHour: '$20',
      transmission: 'Automatic',
      fuelType: 'Petrol',
      image: camry, 
    },
    {
      id: 2,
      name: 'Honda Civic',
      pricePerHour: '$18',
      transmission: 'Automatic',
      fuelType: 'Petrol',
      image: civic, 
    },
    {
      id: 3,
      name: 'Ford Mustang',
      pricePerHour: '$25',
      transmission: 'Manual',
      fuelType: 'Petrol',
      image: mustang, 
    },
    {
      id: 4,
      name: 'Hyundai Creta',
      pricePerHour: '$15',
      transmission: 'Manual',
      fuelType: 'Petrol',
      image: creta, 
    },
    {
      id: 5,
      name: 'Suzuki Wagon R',
      pricePerHour: '$10',
      transmission: 'Manual',
      fuelType: 'Petrol',
      image: wagonR, 
    },
    {
      id: 6,
      name: 'Tata Harrier',
      pricePerHour: '$15',
      transmission: 'Manual',
      fuelType: 'Petrol',
      image: harrier, 
    },
  ];

  const uniqueCars = cars.filter((car, index, self) =>
    index === self.findIndex(c => c.name === car.name && c.id === car.id)
  );

  return (
    <div className="container mt-4">
      <h2 className="text-2xl font-bold mb-4">  Available Cars for Rent</h2>
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
                <button className="btn btn-primary">Book This Car</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewCars;
