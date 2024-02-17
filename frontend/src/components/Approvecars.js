import { useEffect, useState } from "react"
import { useSelector } from "react-redux";

export default function ApproveCar(){
  const mystate =useSelector(state=>state.logged)
  const[cars,setCars]=useState([]);
  const[approve,setApprove] = useState([]);
  const[reject,setReject]=useState([]);

  const formatDate = (milliseconds) => {
    const date = new Date(milliseconds);
    return date.toLocaleDateString(); 
  };
   useEffect(()=>
   {
      fetchCars();
   },[])
   const fetchCars = () => {
    fetch('http://localhost:8081/getcarrequests')
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
        console.log(data);
      })
      .catch((error) => console.error('Error fetching cars:', error));
    };
    
    const handleApproval = (car_id) => {
      // const userId = parseInt(uid, 10);
      fetch(`http://localhost:8081/approvecars?car_id=${car_id}`, { method: 'PUT' })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data === 1) {
            // Update the state based on a successful approval
            setApprove((prevApprove) => {
              const newApprove = [...prevApprove];
              newApprove[car_id] = true; // Assuming 'true' represents 'approved'
              return newApprove;
            });
            alert('Car Approved successfully!');
          } else {
            console.error('Failed to update status.....');
          }
        })
        .catch((error) => console.error('Error in changing status:', error));
    };

    const handleDeletion = (car_id) => {
      // const userId = parseInt(uid, 10);
      fetch(`http://localhost:8081/rejectcars?car_id=${car_id}`, { method: 'PUT' })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data === 1) {
          
            setReject((prevReject) => {
              const newReject = [...prevReject];
              newReject[car_id] = true; // Assuming 'true' represents 'approved'
              return newReject;

            });
            alert('Car successfully rejected!');
          } else {
            console.error('Failed to update status.....');
          }
        })
        .catch((error) => console.error('Error in changing status:', error));
    };
    
    var indexc =1;
    
  return(
    <div className="container">
            <h2 style={{fontFamily:"initial" ,textAlign:"center"}}>CARS</h2><br/><br/> 
      <table border="1" className="table table-striped">
        <thead>
          <tr>
            <th>Sr. no</th>
            <th>Model Name</th>
            <th>Host Name</th> 
            <th>RC Number</th>  
            <th>Registration Date</th>
            <th>Insurance Type</th>
            <th>Insurance Expiration Date</th>
            <th>Fuel Type</th>
            <th>Mileage</th>
            <th>Color</th>
            <th>Price per Hour</th>  
            <th>Car Image</th> 
            <th></th> 
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
              <tr key={car.car_id}>
                <td>{indexc++}</td>
              <td>{car.carModel.model_name}</td>
              <td>{car.host.host_id}</td>
              <td>{car.rc_no}</td>
              <td>{new Date(car.reg_date).toLocaleDateString()}</td>
              <td>{car.insurance_type }</td>
              <td>{new Date(car.insurance_exp_date).toLocaleDateString()}</td>
              <td>{car.fuelType.fuel_type}</td>
              <td>{car.mileage}</td>
              <td>{car.color}</td>
              <td>{car.price_per_hour}</td>
              <td></td>
              <td>
              <button type="button" className={`btn ${approve[car.car_id] ? 'btn-success' : 'btn-primary'}`}
                  onClick={() => handleApproval(car.car_id)} >
                  {approve[car.car_id] ? 'Approved' : 'Approve'}
                </button>
                  </td>
                  <td>
              <button type="button" className={`btn ${reject[car.car_id] ? 'btn-danger' : 'btn-warning'}`}
                  onClick={() => handleDeletion(car.car_id)}
                  >
                  {reject[car.car_id] ? 'Rejected' : 'Reject'}
                </button>
                  </td>  
                  
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}