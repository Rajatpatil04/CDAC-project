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
    console.log(uid);
      fetch(`http://localhost:8081/getallbookingdetails`,{method:'GET'})
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
    <div className="container-fluid">
      <div className="table-responsive">
      <table border={1} className="table table-striped table-bordered" >
          <thead className=" table-success text-center">
            <tr>
            <th>SR. NO.</th>
            <th>Host Name</th>
            <th>Customer Name</th>
            <th>Area</th>
            <th>Car Name</th>
            {/* <th>Fuel type</th>
            <th>Transmission</th>
            <th>Mileage</th>
            <th>Color</th>
            <th>Music System</th>
            <th>Air Conditioning</th> */}
            <th>Registration Number</th>
            <th>Package</th>
            <th>Journey Date</th>
            <th>Deposit</th>
            <th>Total Amount</th>
            <th>Status</th>
            </tr>
          </thead>
          <tbody className="text-center">
          {Booking.map((booking) => (
            <tr key={booking.booking_id}>
                      <td>{++index}</td>
                      <td>{booking.bookingRequest.car.host.fname} {booking.bookingRequest.car.host.lname} </td>
                      <td>{booking.bookingRequest.customer.fname} {booking.bookingRequest.customer.lname} </td>
                      <td>{booking.bookingRequest.car.host.address},{booking.bookingRequest.car.host.area.area_name}</td>
                      <td>{booking.bookingRequest.car.carModel.model_name}</td>
                      {/* <td>{booking.bookingRequest.car.fuelType.fuel_type}</td>
                      <td>{booking.bookingRequest.car.carModel.transmission_type}</td>
                      <td>{booking.bookingRequest.car.mileage}</td>
                      <td>{booking.bookingRequest.car.color}</td>
                      <td>{booking.bookingRequest.car.music_system === 1 ? "Yes" : "No"}</td>
                      <td>{booking.bookingRequest.car.ac === 1 ? "Yes" : "No"}</td> */}
                      <td>{booking.bookingRequest.car.rc_no}</td>
                      <td>{booking.bookingRequest.pack.hours} hrs <br/>{booking.bookingRequest.pack.kilometers} kms </td>
                      <td>{formatDate(booking.bookingRequest.journey_date_time)}</td>
                      <td>{booking.amount * 0.3}</td>
                      <td>{booking.amount}</td>
                      <td style={{ color: booking.bookingRequest.status === 0 ? "blue" : booking.bookingRequest.status === 1 ? "yellow" : booking.bookingRequest.status === 2 ? "red" : "green" }}>
                          {booking.bookingRequest.status === 0 ? "Initiated" : booking.bookingRequest.status === 1 ? "Approved" : booking.bookingRequest.status === 2 ? "Rejected" : "Confirmed"}
                      </td>

                     </tr>
                         ))}
         
          </tbody>
      </table>
      </div>


    </div>
  )
}