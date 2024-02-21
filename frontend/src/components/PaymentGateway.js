import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import payment_img from'../images/payment_gateway.jpg';
import { useLocation } from 'react-router-dom';

const PaymentGateway = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [upiId, setUpiId] = useState(''); // New state for UPI ID
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState('');
  const [paymentInitiated, setPaymentInitiated] = useState(false);
  const [paymentMode, setPaymentMode] = useState("");
  const[request, setRequest] = useState([]);
  
  const location = useLocation();

  useEffect(() => {
      setRequest(location.state.request);
  }, [location.state]);

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value.replace(/\D/g, ''));
  };

  const handleCardNameChange = (event) => {
    setCardName(event.target.value);
  };

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value.replace(/\D/g, ''));
  };

  const handleUpiIdChange = (event) => {
    setUpiId(event.target.value);
  };

  const handlePaymentModeChange = (event) => {
    setPaymentMode(event.target.value);
  };

  const handleSaveBooking = (request) => {
    const booking = {
      amount: request.car.price_per_hour * request.pack.hours * 1.3,
      payment_mode: paymentMode,
      payment_date: new Date().toISOString().split('T')[0], // Today's date
      //transaction_id: transactionId,
      req_id: request.req_id
    };
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setIsProcessing(true);
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          const success = Math.random() > 0.5;
          resolve(success);
        }, 1000);
      });

      setPaymentStatus('Payment successful!');
    } catch (error) {
      setPaymentStatus('Payment failed. Please try again later.');
    } finally {
      setIsProcessing(false);
      setPaymentInitiated(true);
    }
  };

  return (
    <div className="container mt-5">
      {!paymentInitiated && (
        <>
          <h2 style={{textAlign:"center"}} className='mb-4'>Payment Gateway Form</h2>
          <form onSubmit={handleSubmit}>
          <div>
            <div className='mb-2 fw-bold'>
              <label htmlFor="paymentMode">Select Payment Mode : </label>
              <select id="paymentMode" value={paymentMode} onChange={handlePaymentModeChange}>
                <option value="" disabled>-- Select Payment Mode --</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Debit Card">Debit Card</option>
                <option value="upi">UPI</option>
              </select>
            </div>
          </div>

          {paymentMode !== 'upi' && (
            <>
              <div className="mb-3">
                <label htmlFor="cardNumber" className="form-label">Card Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="cardNumber"
                  maxLength={16}
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                  required
                />
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
                  <input
                    type="text"
                    className="form-control"
                    id="expiryDate"
                    placeholder="MM/YY"
                    maxLength={5}
                    value={expiryDate}
                    onChange={handleExpiryDateChange}
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="cvv" className="form-label">CVV</label>
                <input
                  type="text"
                  className="form-control"
                  id="cvv"
                  maxLength={3}
                  value={cvv}
                  onChange={handleCvvChange}
                  required
                />
              </div>
            </>
          )}

          {paymentMode === 'upi' && (
            <div className="mb-3 fw-bold">
              <label htmlFor="upiId" className="form-label">Enter Transaction ID :</label>
              <input
                type="text"
                className="form-control"
                id="upiId"
                value={upiId}
                onChange={handleUpiIdChange}
                required
              />
              
            </div>
          )}

          <div className='fw-bolder mb-2 fs-2 text-primary'><span className='text-danger'>Total</span> : {request.car.price_per_hour}</div>
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
