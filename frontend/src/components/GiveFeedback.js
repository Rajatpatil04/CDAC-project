import React, { useState } from 'react';

export default function GiveFeedback() {
  const [feedback, setFeedback] = useState('');

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //  const reqOption = {
    //   method : 'POST',
    //   headers :{"content-type":"application/json"},
    //   body : 

    //  }
    console.log('Feedback submitted:', feedback);
    // Clear the feedback input after submission
    setFeedback('');
  };

  return (
    <div className='container col-md-6'><br/><br/>
    <br/>
      <h1 style={{fontFamily:"serif"}}>Give Feedback</h1>
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
}
