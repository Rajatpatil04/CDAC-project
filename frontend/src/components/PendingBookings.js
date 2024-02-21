

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CustomerRequests = () => {
  const [requests, setRequests] = useState([]);
  const [paymentMode, setPaymentMode] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const navigate = useNavigate();

  var uid = JSON.parse(localStorage.getItem("loggedUser")).uid;

  useEffect(() => {
    fetch(`http://localhost:8081/getallbookingsforCustomer?uid=${uid}`, { method: 'GET' })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRequests(data);
      })
      .catch((error) => console.error("Error fetching requests:", error));
  }, []);

  const formatDate = (dateArray) => {
    try {
      const [year, month, day, hour, minute] = dateArray;
      const journeyDate = new Date(year, month - 1, day, hour, minute);

      if (isNaN(journeyDate.getTime())) {
        throw new Error('Invalid date');
      }
      return ` ${journeyDate.toLocaleDateString()} | Time: ${journeyDate.toLocaleTimeString()}`;
    } catch (error) {
      console.error('Error formatting journey date:', error);
      return 'Invalid date';
    }
  };


  const handleSaveBooking = (request) => {
    const booking = {
      amount: request.car.price_per_hour * request.pack.hours * 1.3,
      payment_mode: paymentMode,
      payment_date: new Date().toISOString().split('T')[0], // Today's date
      transaction_id: transactionId,
      req_id: request.req_id
    };

    console.log(booking);
    navigate("../payment", { state: { booking } });
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Customer Requests</h1>
      <table border="2" className="table table-striped">
        <thead>
          <tr>
            <th>Car</th>
            <th>RC No</th>
            <th>Pickup and Drop location</th>
            <th>Pickup Date</th>
            <th>Total Cost</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.req_id}>
              <td>{request.car.carModel.model_name}</td>
              <td>{request.car.rc_no}</td>
              <td>{request.car.host.address}, {request.car.host.area.area_name}</td>
              <td>{formatDate(request.journey_date_time)}</td>
              <td>{request.car.price_per_hour * request.pack.hours} <br /> + Deposit({request.car.price_per_hour * request.pack.hours * 1.3 - request.car.price_per_hour * request.pack.hours}) <br /> = {request.car.price_per_hour * request.pack.hours * 1.3}</td>
              <td>
                <button onClick={() => handleSaveBooking(request)}>Confirm Booking</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerRequests;


