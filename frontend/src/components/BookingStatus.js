import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const BookingStatus = ({ onRequestSubmit }) => {
  const [status, setStatus] = useState(0); 

  const handleRequestSubmit = () => {
    setStatus(1);
  };

  return (
    <div className="container mt-5" style={{ textAlign: "center" }}>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div>
            {status === 0 && (
              <div>
                <p className='text-danger fs-4'>Your booking request is pending approval from the host</p>
                <p className='fw-bold'>Please wait for confirmation.</p>
              </div>
            )}
            {status === 1 && (
              <div>
                <p className='text-success fs-4 fw-bold'>Your booking request has been approved!</p>
                <p>Please proceed with the payment to confirm your booking.</p>
                <Link to="/payment" className="btn btn-success">Proceed to Payment</Link>
              </div>
            )}
          </div>
          <div className="mt-3">
            <button onClick={handleRequestSubmit} className="btn btn-primary">Get Approved from Host</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingStatus;
