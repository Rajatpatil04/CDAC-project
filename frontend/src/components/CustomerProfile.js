import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function CustomerProfile() {
  const mystate = useSelector((state) => state.logged);
  const [customer, setCustomer] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCustomer();
  }, []);

  const fetchCustomer = () => {
    // var uid = localStorage.getItem("loggedUser").uid;
    // console.log(uid);
    // console.log(localStorage.getItem("loggedUser").uid)

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

  const handleUpdateProfile = (customerId) => {
    navigate(`/customer/updatecustomer`);
  };

  return (
      <div className="container col-md-6"><br/>
        <h2 style={{textAlign:"center"}}>MY PROFILE</h2> <br/>
        <table  border='2' style={{textAlign:"center"}} className="table table-striped">
          <thead style={{fontSize:30}}>
            <th>FIELDS</th>
            
            <th>VALUES</th>
          </thead>
          <tbody>

           <tr>
               <td>First Name</td>
               <td>{customer.fname}</td>
            </tr>
            <tr>
               <td>Last Name</td>
               <td>{customer.lname}</td>
            </tr> 
            <tr>
               <td>License No</td>
               <td>{customer.license_no}</td>
            </tr> 
            <tr>
               <td>Contact</td>
               <td>{customer.contact}</td>
            </tr> 
            <tr>
               <td>Date Of Birth</td>
               <td>{new Date(customer.dob).toLocaleDateString()}</td>
            </tr> 
            <tr>
               <td>Date Of Registration</td>
               <td>{new Date(customer.reg_date).toLocaleDateString()}</td>
            </tr>
            <tr>
               <td>Pan Card</td>
               <td>{customer.pancard_no}</td>
            </tr> 
            <tr>
               <td>Adhaar Card</td>
               <td>{customer.adhar_card}</td>
            </tr> 
            <tr>
               <td>Address</td>
               <td>{customer.address}</td>
            </tr> 
            <tr>
               <td>Email ID</td>
               <td>{customer.email_id}</td>
            </tr>    
          </tbody>
        </table>
        <div className="text-center">
        <Button variant="primary"
          onClick={() => handleUpdateProfile(customer.customer_id)} >
          Update Profile
        </Button>
      </div>
      </div>
      
  )
}
