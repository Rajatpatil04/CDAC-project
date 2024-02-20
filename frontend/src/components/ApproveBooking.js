import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function ApproveBooking(){
  const mystate =useSelector(state=>state.logged)
  const [Booking,setBooking] = useState([]);
  const [Approve,setApprove] = useState([]);
  const [Reject,setReject] = useState([]);
  const uid = JSON.parse(localStorage.getItem("loggedUser")).uid;

  const fetchBooking =() =>{
    console.log(uid);
    fetch(`http://localhost:8081/getallbookings?uid=${uid}`,{method:'GET'})
    .then((resp)=>resp.json())
    .then((data)=>{
      console.log(data);
        console.log("got all requests")
        setBooking(data);
    })
    .catch((error) => console.error('Error fetching bookings:', error));
  };

  const handleApproval = (req_id) => {
    // const userId = parseInt(uid, 10);
    fetch(`http://localhost:8081/approverequest?req_id=${req_id}`, { method: 'PUT' })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data === 1) {
          // Update the state based on a successful approval
          setApprove((prevApprove) => {
            const newApprove = [...prevApprove];
            newApprove[req_id] = true; // Assuming 'true' represents 'approved'
            return newApprove;
          });
        
        } else {
          console.error('Failed to update status.....');
        }
      })
      .catch((error) => console.error('Error in changing status:', error));
  };
  const handleDeletion = (req_id) => {
    // const userId = parseInt(uid, 10);
    fetch(`http://localhost:8081/rejectbooking?req_id=${req_id}`, { method: 'PUT' })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data === 1) {
        
          setReject((prevReject) => {
            const newReject = [...prevReject];
            newReject[req_id] = true; // Assuming 'true' represents 'approved'
            return newReject;

          });
         
        } else {
          console.error('Failed to update status.....');
        }
      })
      .catch((error) => console.error('Error in changing status:', error));
  };

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


  useEffect(()=>
   {
    fetchBooking();
   },[])
  var index=0;
  return(
     <div className="container">
          <h1 style={{textAlign:"center"}}>REQUESTS FOR CARS</h1>
             <table border="2" className="table table-striped">
                  <thead>
                     <tr>
                        <td>SR. NO.</td>
                        <td>Customer First Name </td>
                        <td>Customer Last Name </td>
                        <td>Customer Contact </td>
                        <td>Selected Car </td>
                        <td>Date of Pick-Up </td>
                        <td>Date of Pick-Up </td>
                        <td>Duration (hours)</td>
                        <td>Distance  (Km)</td>
                     </tr>
                  </thead>
                  <tbody>
                  {Booking.map((request) => (
              <tr key={request.req_id}>
                      <td>{++index}</td>
                      <td>{request.customer.fname}</td>
                      <td>{request.customer.lname}</td>
                      <td>{request.customer.contact}</td>
                      <td>{request.car.carModel.model_name}</td>
                      <td>{formatDate(request.journey_date_time)}</td>
                      <td>{formatDate(request.journey_date_time)}</td>
                      <td>{request.pack.hours}</td>
                      <td>{request.pack.kilometers}</td>
                      <td>
              <button type="button" className={`btn ${Approve[request.req_id] ? 'btn-success' : 'btn-primary'}`}
                  onClick={() => handleApproval(request.req_id)} >
                  {Approve[request.req_id] ? 'Approved' : 'Approve'}
                </button>
                  </td>
                  <td>
              <button type="button" className={`btn ${Reject[request.req_id] ? 'btn-danger' : 'btn-warning'}`}
                  onClick={() => handleDeletion(request.req_id)}
                  >
                  {Reject[request.req_id] ? 'Rejected' : 'Reject'}
                </button>
                  </td>  
                     </tr>
                         ))}
                  </tbody>
             </table>
     </div>
  )
}