// import { useState } from 'react';

// const PaymentGateway = () => {
//   const [processing, setProcessing] = useState(false);
//   const [success, setSuccess] = useState(false);

//   const handlePayment = () => {
//     setProcessing(true);
//     
//     setTimeout(() => {
//       setProcessing(false);
//       setSuccess(true);
//     }, 2000);
//   };

//   return (
//     <div>
//       {!success && (
//         <div>
//           <h2>Payment Gateway</h2>
//           <p>Please proceed with the payment to confirm your booking.</p>
//           <p>Total Amount: $100</p>
//           <button onClick={handlePayment} disabled={processing}>
//             {processing ? 'Processing...' : 'Make Payment'}
//           </button>
//         </div>
//       )}
//       {success && (
//         <div>
//           <h2>Payment Successful!</h2>
//           <p>Thank you for your payment.</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PaymentGateway;

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import payment_img from'../images/payment_gateway.jpg';

const PaymentGateway = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState('');
  const [paymentInitiated, setPaymentInitiated] = useState(false);

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
                <label htmlFor="cardName" className="form-label">Card Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="cardName"
                  value={cardName}
                  onChange={handleCardNameChange}
                  required
                />
              </div>
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
            <div className='fw-bolder mb-2 fs-2 text-primary'><span className='text-danger'>Total</span> : ₹2500</div>
            <button type="submit" className="btn btn-success container-fluid" disabled={isProcessing}>
              {isProcessing ? 'Processing...' : 'Make Payment'}
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
