import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function ApproveBooking() {
  const mystate = useSelector((state) => state.logged);
  const [Booking, setBooking] = useState([]);
  const [Approve, setApprove] = useState([]);
  const [Reject, setReject] = useState([]);
  const uid = JSON.parse(localStorage.getItem("loggedUser")).uid;

  const fetchBooking = () => {
    console.log(uid);
    fetch(`http://localhost:8081/getallbookings?uid=${uid}`, { method: 'GET' })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        console.log("got all requests");
        setBooking(data);
      })
      .catch((error) => console.error('Error fetching bookings:', error));
  };

  const handleApproval = (req_id) => {
    fetch(`http://localhost:8081/approverequest?req_id=${req_id}`, { method: 'PUT' })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data === 1) {
          setApprove((prevApprove) => {
            const newApprove = [...prevApprove];
            newApprove[req_id] = true;
            return newApprove;
          });
        } else {
          console.error('Failed to update status.....');
        }
      })
      .catch((error) => console.error('Error in changing status:', error));
  };

  const handleDeletion = (req_id) => {
    fetch(`http://localhost:8081/rejectbooking?req_id=${req_id}`, { method: 'PUT' })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data === 1) {
          setReject((prevReject) => {
            const newReject = [...prevReject];
            newReject[req_id] = true;
            return newReject;
          });
        } else {
          console.error('Failed to update status.....');
        }
      })
      .catch((error) => console.error('Error in changing status:', error));
  };

  // const formatDate = (dateArray) => {
  //   try {
  //     const [year, month, day, hour, minute] = dateArray;
  //     const journeyDate = new Date(year, month - 1, day, hour, minute);

  //     if (isNaN(journeyDate.getTime())) {
  //       throw new Error('Invalid date');
  //     }

  //     return `${journeyDate.toLocaleDateString()} ${journeyDate.toLocaleTimeString()}`;
  //   } catch (error) {
  //     console.error('Error formatting journey date:', error);
  //     return 'Invalid date';
  //   }
  // };

  useEffect(() => {
    fetchBooking();
  }, []);

  var index = 0;

  return (
    <div className="container-fluid">
      <h1 style={{ textAlign: "center" }}>REQUESTS FOR CARS</h1>
      <div className="table-responsive">
        <table  border={1} className="table table-striped">
          <thead>
            <tr>
              <th>SR. NO.</th>
              <th>Customer First Name</th>
              <th>Customer Last Name</th>
              <th>Customer Contact</th>
              <th>Selected Car</th>
              <th>Date of Pick-Up</th>
              <th>Date of Pick-Up</th>
              <th>Duration (hours)</th>
              <th>Distance (Km)</th>
              <th>Approve</th>
              <th>Reject</th>
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
                <td>{(request.journey_date_time)}</td>
                <td>{(request.expected_return_date)}</td>
                <td>{request.pack.hours}</td>
                <td>{request.pack.kilometers}</td>
                <td>
                  <button
                    type="button"
                    className={`btn ${Approve[request.req_id] ? 'btn-success' : 'btn-primary'}`}
                    onClick={() => handleApproval(request.req_id)}>
                    {Approve[request.req_id] ? 'Approved' : 'Approve'}
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className={`btn ${Reject[request.req_id] ? 'btn-danger' : 'btn-warning'}`}
                    onClick={() => handleDeletion(request.req_id)}>
                    {Reject[request.req_id] ? 'Rejected' : 'Reject'}
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

