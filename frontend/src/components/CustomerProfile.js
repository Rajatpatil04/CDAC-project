import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";

export default function CustomerProfile(){
  const mystate =useSelector(state=>state.logged)
  const[customer, setCustomer] = useState([]);
  let navigate = useNavigate();
  useEffect(()=>
  {
   fetchCustomer();
  
  },[])

  const fetchCustomer = () => {
    let uid = localStorage.getItem("loggedUser").uid;

    fetch(`http://localhost:8081/getCustomer?uid=${uid}`, {method:'GET'})
        .then(res => res.json())
        .then(data => {
            
            console.log(data);
            setCustomer(data);
        })
        .catch(error => {
            console.error('Error fetching customer:', error);
        });
};
  const handleclick=()=>{
        navigate("/customer/updateProfile");
  }

  return(
    <div>
         <div className="container">
            <h2 style={{fontFamily:"initial"}}>Customers</h2>
      <table border="1" className="table table-striped">
        <thead>
          <tr>
         
            <th>First Name</th>
            <th>Last Name</th>
            <th>License</th>
            <th>Contact</th>
            <th>Emergency Contact</th>
            <th>Date Of Birth</th>
            <th>Date of Registration</th>
            <th>Pan card</th>
            <th>Adhar card</th>
            <th>Address</th>
            <th>Email ID</th>  
            <th></th>  
          </tr>
        </thead>
        <tbody>
          {customer.map((customer) => (
              <tr key={customer.customer_id}>
                
              <td>{customer.fname}</td>
              <td>{customer.lname}</td>
              <td>{customer.license_no}</td>
              <td>{customer.contact}</td>
              <td>{customer.emergency_contact}</td>
              <td>{new Date(customer.dob).toLocaleDateString() }</td>
              <td>{new Date(customer.reg_date).toLocaleDateString()}</td>
              <td>{customer.pancard_no}</td>
              <td>{customer.adhar_card}</td>
              <td>{customer.address}</td>
              <td>{customer.email_id}</td>
              <td>
              <button
                  type="button"
                 className="btn "
                  onClick={() => handleclick(customer.customer_id)} >
                  {/* {approve[customer.user.uid] ? 'Approved' : 'Approve'} */}Update Profile
                </button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
     </div>
    </div>
  )
}