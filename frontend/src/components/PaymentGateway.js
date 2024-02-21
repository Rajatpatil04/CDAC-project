import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import payment_img from '../images/payment_gateway.jpg';
import { useLocation } from 'react-router-dom';

const PaymentGateway = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState('');
  const [paymentInitiated, setPaymentInitiated] = useState(false);
  const [paymentMode, setPaymentMode] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [bookingData, setBookingData] = useState({});
  const [amount, setAmount] = useState(0); 

  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setBookingData(location.state);
      setAmount(location.state.booking?.amount || 0); 
      setPaymentMode(location.state.payment_mode || "");
    }
  }, [location.state]);

  const handlePaymentModeChange = (event) => {
    setPaymentMode(event.target.value);
  };

  const handleTransactionIdChange = (event) => {
    setTransactionId(event.target.value);
  };

  const handleSaveBooking = async () => {
    const bookingDataToUpdate = {
      req_id: bookingData.booking?.req_id,
      amount: amount,
      payment_mode: paymentMode,
      payment_date: new Date().toISOString().split('T')[0],
      transaction_id: transactionId
    };

    console.log(bookingDataToUpdate);

    fetch("http://localhost:8081/confirmbooking", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingDataToUpdate),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        alert('Booking Confirmed:', data);
      })
      .catch(error => {
        console.error('Error saving booking:', error);
      });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      try {
        setPaymentStatus('Payment successful!');
        setPaymentInitiated(true);
        handleSaveBooking();
      } catch (error) {
        setPaymentStatus('Payment failed. Please try again later.');
      }
      setIsProcessing(false);
    }, 1000);
  };

  return (
    <div className="container mt-5">
      {!paymentInitiated && (
        <>
          <h2 style={{ textAlign: "center" }} className='mb-4'>Payment Gateway Form</h2>
          <form onSubmit={handleSubmit}>
            <div className='mb-2 fw-bold'>
              <label htmlFor="paymentMode">Select Payment Mode:</label>
              <select id="paymentMode" value={paymentMode} onChange={handlePaymentModeChange} className="form-control">
                <option value="" disabled>-- Select Payment Mode --</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Debit Card">Debit Card</option>
                <option value="UPI">UPI</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="transactionId" className="form-label">Enter Transaction ID:</label>
              <input
                type="text"
                className="form-control"
                id="transactionId"
                value={transactionId}
                onChange={handleTransactionIdChange}
                required
              />
            </div>

            <div className='fw-bolder mb-2 fs-2'><span className='text-danger'>Total:</span> Rs {amount}</div>
            <button type="submit" className="btn btn-success container-fluid" disabled={isProcessing}>
              {isProcessing ? 'Processing...' : 'Confirm Payment'}
            </button>
          </form>
        </>
      )}

      {paymentInitiated && (
        <div className="alert alert-success mt-3" role="alert">
          <p style={{textAlign:"center"}} className='fs-4 fw-bold'>{paymentStatus}</p>
          <img src={payment_img} alt="Payment Success" className="img-fluid" />
        </div>
      )}
    </div>
  );
};

export default PaymentGateway;
