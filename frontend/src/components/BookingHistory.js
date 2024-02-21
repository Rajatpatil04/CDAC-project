import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function BookingHistory() {
  const mystate = useSelector((state) => state.logged);
  const [requests, setRequests] = useState([]);
  const [customer, setCustomer] = useState('');
  const navigate =useNavigate();

  useEffect(() => {
    fetchRequests();
    // fetchCustomer();
  }, []);

  // const fetchCustomer = () => {
  //   fetch(`http://localhost:8081/getCustomer?uid=${JSON.parse(localStorage.getItem("loggedUser")).uid}`, { method: 'GET' })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setCustomer(data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching customer:', error);
  //     });
  // };

  const fetchRequests = () => {
    var customer_id = customer.customer_id;
    fetch(`http://localhost:8081/bookingdetails?uid=${JSON.parse(localStorage.getItem("loggedUser")).uid}`, { method: 'GET' })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRequests(data);
      })
      .catch((error) => {
        console.error('Error fetching requests:', error);
      });
  };

  const handleFeedback = (customer_id) => {
    navigate("/customer/givefeedback")
    console.log(`Feedback for car ID: ${customer_id}`); 
  };

  var index = 0;
  return (
    <div className="container-fluid">
      <h1 style={{fontFamily:"serif"}} className="text-center">Booking History</h1><br/><br/>
      <div className="table-responsive">
        <table border={1} className="table table-striped">
          <thead>
            <tr>
              <th>SR. NO.</th>
              <th>Selected Car</th>
              <th>Date of Pick-Up</th>
              <th>Date of Drop</th>
              <th>Payment Mode</th>
              <th>Amount</th>
              <th>Payment Date</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr key={request.req_id}>
                <td>{++index}</td>
                <td>{request.bookingRequest.car.carModel.model_name}</td>
                <td>{request.actual_pickup_date}</td>
                <td>{request.actual_return_date}</td>
                <td>{request.payment_mode}</td>
                <td>{request.amount} Rs.</td>
                <td>{request.payment_date}</td>
                <td>
                  <button className="btn btn-primary" onClick={() => handleFeedback(request.bookingRequest.customer)}>
                    Give Feedback
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
