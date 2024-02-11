// import React, { useState } from 'react';

// function HostSignup() {
//   const [formData, setFormData] = useState({
//     fname: '',
//     lname: '',
//     email_id: '',
//     contact: '',
//     dob: '',
//     pancard_number: '',
//     adharcard_number: '',
//     address: '',
//     upi_id: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (formData.password !== formData.confirmPassword) {
//       alert("Password and Confirm Password must match.");
//       return;
//     }

//     console.log('Form submitted:', formData);
    
//     fetch('your-backend-url', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     })
//     .then(response => response.json())
//     .then(data => {
//       console.log('Response from server:', data);
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });
//   };

//   return (
//     <div className="border rounded container col-mb-6 mt-4 contain">
//       <h2 className="text-2xl font-bold mb-4">Host Registration Form</h2>
//       <form className="row g-3 needs-validation" onSubmit={handleSubmit}>
//         <div className="col-md-4">
//           <label htmlFor="fname" className="form-label">
//             First Name :
//           </label>
//           <input
//             type="text"
//             id="fname"
//             name="fname"
//             value={formData.fname}
//             onChange={handleChange}
//             className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300 form-control"
//             required
//           />
//         </div>
//         <div className="col-md-4">
//           <label htmlFor="lname" className="form-label">
//             Last Name :
//           </label>
//           <input
//             type="text"
//             id="lname"
//             name="lname"
//             value={formData.lname}
//             onChange={handleChange}
//             className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300 form-control"
//             required
//           />
//         </div>
//         <div className="col-md-4">
//           <label htmlFor="email_id" className="form-label">
//             Email :
//           </label>
//           <input
//             type="email"
//             id="email_id"
//             name="email_id"
//             value={formData.email_id}
//             onChange={handleChange}
//             className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300 form-control"
//             required
//           />
//         </div>
//         <div className="col-md-4">
//           <label htmlFor="contact" className="form-label">
//             Contact :
//           </label>
//           <input
//             type="text"
//             id="contact"
//             name="contact"
//             value={formData.contact}
//             onChange={handleChange}
//             className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300 form-control"
//             required
//           />
//         </div>
//         <div className="col-md-4">
//           <label htmlFor="dob" className="form-label">
//             Date of Birth :
//           </label>
//           <input
//             type="date"
//             id="dob"
//             name="dob"
//             value={formData.dob}
//             onChange={handleChange}
//             className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300 form-control"
//             required
//           />
//         </div>
//         <div className="col-md-4">
//           <label htmlFor="pancard_number" className="form-label">
//             Pan Card Number :
//           </label>
//           <input
//             type="text"
//             id="pancard_number"
//             name="pancard_number"
//             value={formData.pancard_number}
//             onChange={handleChange}
//             className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300 form-control"
//             required
//           />
//         </div>
//         <div className="col-md-4">
//           <label htmlFor="adharcard_number" className="form-label">
//             Aadhar Card Number :
//           </label>
//           <input
//             type="text"
//             id="adharcard_number"
//             name="adharcard_number"
//             value={formData.adharcard_number}
//             onChange={handleChange}
//             className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300 form-control"
//             required
//           />
//         </div>
//         <div className="col-md-4">
//           <label htmlFor="address" className="form-label">
//             Address :
//           </label>
//           <textarea
//             id="address"
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//             className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300 form-control"
//             required
//           ></textarea>
//         </div>
//         <div className="col-md-4">
//           <label htmlFor="upi_id" className="form-label">
//             UPI ID :
//           </label>
//           <input
//             type="text"
//             id="upi_id"
//             name="upi_id"
//             value={formData.upi_id}
//             onChange={handleChange}
//             className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300 form-control"
//             required
//           />
//           </div>
//           <div className="col-md-4">
//           <label htmlFor="password" className="form-label">
//             Password :
//           </label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300 form-control"
//             required
//           />
//         </div>
//         <div className="col-md-4">
//           <label htmlFor="confirmPassword" className="form-label">
//             Confirm Password :
//           </label>
//           <input
//             type="password"
//             id="confirmPassword"
//             name="confirmPassword"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300 form-control"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="text-white p-2 rounded bg-dark"
//         >
//           Register 
//         </button>
//       </form>
//     </div>
//   );
// }

// export default HostSignup;

import React, { useState } from 'react';

function HostSignup() {
  const [formData, setFormData] = useState({
    fname: { value: '', valid: false, touched: false, error: '' },
    lname: { value: '', valid: false, touched: false, error: '' },
    email_id: { value: '', valid: false, touched: false, error: '' },
    contact: { value: '', valid: false, touched: false, error: '' },
    dob: { value: '', valid: false, touched: false, error: '' },
    pancard_number: { value: '', valid: false, touched: false, error: '' },
    adharcard_number: { value: '', valid: false, touched: false, error: '' },
    address: { value: '', valid: false, touched: false, error: '' },
    upi_id: { value: '', valid: false, touched: false, error: '' },
    password: { value: '', valid: false, touched: false, error: '' },
    confirmPassword: { value: '', valid: false, touched: false, error: '' },
    formValid: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: { ...formData[name], value: value },
    });
    validateField(name, value);
  };

  const validateField = (fieldName, value) => {
    let valid = true;
    let error = "";

    // Implement validation rules for each field
    // Example validation rules for 'fname'
    if (fieldName === 'fname') {
      if (value.trim() === "") {
        valid = false;
        error = "First name is required";
      }
      // Add more validation rules as needed
    }

    // Update form state with validation result
    setFormData(prevState => ({
      ...prevState,
      [fieldName]: {
        ...prevState[fieldName],
        value: value,
        valid: valid,
        error: error,
        touched: true,
      },
      formValid: Object.values(prevState).every((field) => field.valid),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password.value !== formData.confirmPassword.value) {
      alert("Password and Confirm Password must match.");
      return;
    }

    console.log('Form submitted:', formData);

    // Add fetch request here to submit form data
  };

  return (
    <div className="border rounded container col-mb-6 mt-4 contain">
      <h2 className="text-2xl font-bold mb-4">Host Registration Form</h2>
      <form className="row g-3 needs-validation" onSubmit={handleSubmit}>
        <div className="col-md-4">
          <label htmlFor="fname" className="form-label">
            First Name :
          </label>
          <input
            type="text"
            id="fname"
            name="fname"
            value={formData.fname.value}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300 form-control"
            required
          />
          <div style={{ display: (!formData.fname.valid && formData.fname.touched) ? "block" : "none" }}>
            <p className="text-danger">{formData.fname.error}</p>
          </div>
        </div>
        {/* Add similar code for other form fields */}
        {/* Last Name */}
        <div className="col-md-4">
          <label htmlFor="lname" className="form-label">
            Last Name :
          </label>
          <input
            type="text"
            id="lname"
            name="lname"
            value={formData.lname.value}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300 form-control"
            required
          />
          <div style={{ display: (!formData.lname.valid && formData.lname.touched) ? "block" : "none" }}>
            <p className="text-danger">{formData.lname.error}</p>
          </div>
        </div>
        {/* Email */}
        <div className="col-md-4">
          <label htmlFor="email_id" className="form-label">
            Email :
          </label>
          <input
            type="email"
            id="email_id"
            name="email_id"
            value={formData.email_id.value}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300 form-control"
            required
          />
          <div style={{ display: (!formData.email_id.valid && formData.email_id.touched) ? "block" : "none" }}>
            <p className="text-danger">{formData.email_id.error}</p>
          </div>
        </div>
        {/* Contact */}
        <div className="col-md-4">
          <label htmlFor="contact" className="form-label">
            Contact :
          </label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={formData.contact.value}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300 form-control"
            required
          />
          <div style={{ display: (!formData.contact.valid && formData.contact.touched) ? "block" : "none" }}>
            <p className="text-danger">{formData.contact.error}</p>
          </div>
        </div>
        {/* Date of Birth */}
        <div className="col-md-4">
          <label htmlFor="dob" className="form-label">
            Date of Birth :
          </label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob.value}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300 form-control"
            required
          />
          <div style={{ display: (!formData.dob.valid && formData.dob.touched) ? "block" : "none" }}>
            <p className="text-danger">{formData.dob.error}</p>
          </div>
        </div>
        {/* Pan Card Number */}
        <div className="col-md-4">
          <label htmlFor="pancard_number" className="form-label">
            Pan Card Number :
          </label>
          <input
            type="text"
            id="pancard_number"
            name="pancard_number"
            value={formData.pancard_number.value}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300 form-control"
            required
          />
          <div style={{ display: (!formData.pancard_number.valid && formData.pancard_number.touched) ? "block" : "none" }}>
            <p className="text-danger">{formData.pancard_number.error}</p>
          </div>
        </div>
        {/* Aadhar Card Number */}
        <div className="col-md-4">
          <label htmlFor="adharcard_number" className="form-label">
            Aadhar Card Number :
          </label>
          <input
            type="text"
            id="adharcard_number"
            name="adharcard_number"
            value={formData.adharcard_number.value}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300 form-control"
            required
          />
          <div style={{ display: (!formData.adharcard_number.valid && formData.adharcard_number.touched) ? "block" : "none" }}>
            <p className="text-danger">{formData.adharcard_number.error}</p>
          </div>
        </div>
        {/* Address */}
        <div className="col-md-4">
          <label htmlFor="address" className="form-label">
            Address :
          </label>
          <textarea
            id="address"
            name="address"
            value={formData.address.value}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300 form-control"
            required
          ></textarea>
          <div style={{ display: (!formData.address.valid && formData.address.touched) ? "block" : "none" }}>
            <p className="text-danger">{formData.address.error}</p>
          </div>
        </div>
        {/* UPI ID */}
        <div className="col-md-4">
          <label htmlFor="upi_id" className="form-label">
            UPI ID :
          </label>
          <input
            type="text"
            id="upi_id"
            name="upi_id"
            value={formData.upi_id.value}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300 form-control"
            required
          />
          <div style={{ display: (!formData.upi_id.valid && formData.upi_id.touched) ? "block" : "none" }}>
            <p className="text-danger">{formData.upi_id.error}</p>
          </div>
        </div>
        {/* Password */}
        <div className="col-md-4">
          <label htmlFor="password" className="form-label">
            Password :
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password.value}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300 form-control"
            required
          />
          <div style={{ display: (!formData.password.valid && formData.password.touched) ? "block" : "none" }}>
            <p className="text-danger">{formData.password.error}</p>
          </div>
        </div>
        {/* Confirm Password */}
        <div className="col-md-4">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password :
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword.value}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300 form-control"
            required
          />
          <div style={{ display: (!formData.confirmPassword.valid && formData.confirmPassword.touched) ? "block" : "none" }}>
            <p className="text-danger">{formData.confirmPassword.error}</p>
          </div>
        </div>
        <button
          type="submit"
          className="text-white p-2 rounded bg-dark"
          disabled={!formData.formValid} 
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default HostSignup;
