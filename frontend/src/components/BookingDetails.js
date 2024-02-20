import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default  function BookingDetails(){

  const mystate =useSelector(state=>state.logged)
  const [Booking,setBooking] = useState([]);

  const formatDate = (dateArray) => {
    try {
      const [year, month, day, hour, minute] = dateArray;
      const journeyDate = new Date(year, month - 1, day, hour, minute);
      
      if (isNaN(journeyDate.getTime())) {
        throw new Error('Invalid date');
      }
      return `${journeyDate.toLocaleDateString()} ${journeyDate.toLocaleTimeString()}`;
    } catch (error) {
      console.error('Error formatting journey date:', error);
      return 'Invalid date';
    }
  };

  var uid = JSON.parse(localStorage.getItem("loggedUser")).uid;
  const fetchBooking =()=>{
      fetch(`http://localhost:8081/bookingdetails?uid=${uid}`,{method:'GET'})
      .then((resp)=>resp.json())
      .then((data)=>{
        console.log(data);
        console.log("Bookings fetched");
        setBooking(data);
      })
        .catch((error)=> console.error('Error fetching bookings',error));
  };

  useEffect(()=>{
     fetchBooking();
  },[])
   var index=0;
  return(
    <div className="container">
      <table border={1} className="table table-striped" >
          <thead>
            <tr>
            <th>SR. NO.</th>
            <th>Host Name</th>
            <th>Area</th>
            <th>Car Name</th>
            <th>Fuel type</th>
            <th>Transmission</th>
            <th>Mileage</th>
            <th>Color</th>
            <th>Music System</th>
            <th>Air Conditioning</th>
            <th>Registration Number</th>
            <th>Package</th>
            <th>Journey Date</th>
            <th>Deposit</th>
            <th>Total Amount</th>
            <th>Status</th>
            </tr>
          </thead>
          <tbody>
          {Booking.map((booking) => (
              <tr key={booking.booking_id}>
                      <td>{++index}</td>
                      <td>{booking.req_id.car.host.fname} {booking.car.host.lname} </td>
                      <td>{booking.req_id.car.host.area}</td>
                      <td>{booking.req_id.car.carModel.model_name}</td>
                      <td>{booking.req_id.car.fueltype.fueltype}</td>
                      <td>{booking.req_id.car.carModel.transmission_type}</td>
                      <td>{booking.req_id.car.host.mileage}</td>
                      <td>{booking.req_id.car.color}</td>
                      <td>{booking.req_id.car.music_system}</td>
                      <td>{booking.req_id.car.ac}</td>
                      <td>{booking.req_id.car.rc_no}</td>
                      <td>{booking.req_id.pack.hours} hrs ,{booking.req_id.pack.kilometers} kms </td>
                      <td>{formatDate(booking.req_id.journey_date_time)}</td>
                      <td>{1000}</td>
                      <td>{(booking.req_id.car.price_per_hour)*(booking.req_id.pack.hours) }</td>
                      <td style={{ color: booking.req_id.status === 0 ? "blue" : booking.req_id.status === 1 ? "green" : "red" }}>
                        {booking.req_id.status === 0 ? "Pending" : booking.req_id.status === 1 ? "Approved" : "Rejected"}
                          </td>
                     </tr>
                         ))}
         
          </tbody>
      </table>


    </div>
  )
}