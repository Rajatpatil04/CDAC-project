import React, { useEffect, useState } from 'react';

const GiveFeedback = (props) => {
  const [feedback, setFeedback] = useState('');
  const [customer, setCustomer] = useState(null);

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  useEffect(() => {
    fetchCustomer();
  }, []);

  const fetchCustomer = () => {
    fetch(`http://localhost:8081/getCustomer?uid=${JSON.parse(localStorage.getItem("loggedUser")).uid}`, { method: 'GET' })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCustomer(data);
      })
      .catch((error) => {
        console.error('Error fetching customer:', error);
      });
    };
    
   
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Check if customer data is available
    if (!customer) {
      console.error('Customer data not available');
      return;
    }

  const carid = props.car_id;
    const reqOption = {
      method: 'POST',
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        Feedback1: feedback,
        CustomerId: customer.Customer_id,
        CarId: carid  
      })
    };

    fetch('http://localhost:8081/api/Feedback/givefeedback', reqOption)
      .then(response => response.json())
      .then(data => {
        console.log('Feedback submitted successfully:', data);
      
        setFeedback('');
      })
      .catch(error => {
        console.error('Error submitting feedback:', error);
      });
  };

  return (
    <div className='container col-md-6'><br/><br/>
      <h1 style={{ fontFamily: "serif" }}>Give Feedback</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="feedbackTextarea">Your Feedback:</label><br/>
          <textarea
            id="feedbackTextarea"
            className="form-control"
            rows="4"
            value={feedback}
            onChange={handleFeedbackChange}
            required
          ></textarea>
        </div>
        <br/>
        <button type="submit" className="btn btn-primary col-sm-6">
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default GiveFeedback;

