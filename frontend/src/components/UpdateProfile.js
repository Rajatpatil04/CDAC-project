import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function UpdateCustomer() {
  const mystate = useSelector((state) => state.logged);
  const [customer, setCustomer] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetchCustomer();
  }, []);

  const fetchCustomer = () => {
    const uid = JSON.parse(localStorage.getItem("loggedUser")).uid;

    fetch(`http://localhost:8081/getCustomer?uid=${uid}`, { method: 'GET' })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCustomer(data);
      })
      .catch((error) => {
        console.error('Error fetching customer:', error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    const uid = JSON.parse(localStorage.getItem("loggedUser")).uid;

    fetch(`http://localhost:8081/updatecustomer?uid=${uid}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(customer),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Customer updated successfully:', data);
        navigate("/customer/profile");
      })
      .catch((error) => {
        console.error('Error updating customer:', error);
      });
  };

  return (
    <div className="container col-md-6 ">
      <br/>
      <h2 style={{ textAlign: "center" }}>UPDATE PROFILE</h2> <br/>
      <Form className="form border p-4">
        <Form.Group controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your first name"
            name="fname"
            value={customer.fname || ""}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your last name"
            name="lname"
            value={customer.lname || ""}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formLicenseNo">
          <Form.Label>License No</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your license number"
            name="license_no"
            value={customer.license_no || ""}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formContact">
          <Form.Label>Contact</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter your Contact number"
            name="contact"
            value={customer.contact || ""}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formDOB">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter your date of birth"
            name="dob"
            value={customer.dob || ""}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formRegDate">
          <Form.Label>Registration Date</Form.Label>
          <Form.Control
            type="date"
            name="reg_date"
            value={customer.reg_date || ""}
            onChange={handleInputChange}
            disabled
          />
        </Form.Group>

        <Form.Group controlId="formpancard">
          <Form.Label>Pancard</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your Pancard number"
            name="pancard_no"
            value={customer.pancard_no || ""}
            onChange={handleInputChange}
            disabled
          />
        </Form.Group>

        <Form.Group controlId="formadharcard">
          <Form.Label>Adhaar Card</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your Adhaar number"
            name="adhar_card"
            value={customer.adhar_card || ""}
            onChange={handleInputChange}
            disabled
          />
        </Form.Group>

        <Form.Group controlId="formaddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your Address"
            name="address"
            value={customer.address || ""}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formemailID">
          <Form.Label>Email ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your EmailID "
            name="email_id"
            value={customer.email_id || ""}
            onChange={handleInputChange}
          />
        </Form.Group>
         <br/>
        <div className="text-center">
          <Button variant="warning" onClick={handleUpdate}>
            Update Profile
          </Button>
        </div>
      </Form>
    </div>
  );
}
