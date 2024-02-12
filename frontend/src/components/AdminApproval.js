import { useEffect, useState } from "react"

export default function AdminApproval(){
  const[customers, setCustomers] = useState([]);
  const[hosts, setHosts] = useState([]);
  const[approve,setApprove] = useState([]);

   useEffect(()=>
   {
    fetchCustomers();
    fetchHosts();
   },[])
   const fetchCustomers = () => {
    fetch('http://localhost:8081/getallcustomers')
      .then((res) => res.json())
      .then((data) => {
        setCustomers(data);
        console.log(data);
      })
      .catch((error) => console.error('Error fetching Customers:', error));
    };
    const fetchHosts = () => {
      fetch('http://localhost:8081/getallhosts')
        .then((res) => res.json())
        .then((data) => {
          setHosts(data);
          console.log(data);
        })
        .catch((error) => console.error('Error fetching hosts:', error));
    };
    const handleApproval = (username) => {
      fetch(`http://localhost:8081/changestatus?username=${username}`, {
        method: 'PUT',
      })
      .then((res) => res.json())
      .then((data) => {
        setApprove((prevApprove) => ({
          ...prevApprove,
          [username]: data.status === 'approved', // Assuming 'approved' is the status received
        }));
        console.log(data);
      })
      .catch((error) => console.error('Error in changing status:', error));
    };
  return(
    <div>
            <h2>Customers</h2>
      <table border="1" className="table">
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
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
              <tr key={customer.customer_id}>
              <td>{customer.fname}</td>
              <td>{customer.lname}</td>
              <td>{customer.license_no}</td>
              <td>{customer.contact}</td>
              <td>{customer.emergency ? customer.emergency.contact : 'N/A'}</td>
              <td>{customer.dob}</td>
              <td>{customer.reg_date}</td>
              <td>{customer.pancard_no}</td>
              <td>{customer.adhar_card}</td>
              <td>{customer.address}</td>
              <td>{customer.email_id}</td>
              <td>
              <button
                  type="button"
                  className={`btn ${approve[customer.email_id] ? 'btn-success' : 'btn-primary'}`}
                  onClick={() => handleApproval(customer.email_id)}
                  >
                  {approve[customer.email_id] ? 'Approved' : 'Approve'}
                </button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br/><br/><br/>
      <h2>Hosts</h2>
      <table border="1" className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th> 
            <th>Email ID</th>  
            <th>Contact</th>
            <th>Date Of Birth</th>
            <th>Date of Registration</th>
            <th>Pan card</th>
            <th>Adhar card</th>
            <th>Address</th>   
          </tr>
        </thead>
        <tbody>
          {hosts.map((host) => (
              <tr key={host.id}>
              <td>{host.fname}</td>
              <td>{host.lname}</td>
              <td>{host.email_id}</td>
              <td>{host.contact}</td>
              <td>{host.dob}</td>
              <td>{host.reg_date}</td>
              <td>{host.pancard_number}</td>
              <td>{host.adharcard_number}</td>
              <td>{host.address}</td>
              <td>
              <button
                  type="button"
                  className={`btn ${approve[host.email_id] ? 'btn-success' : 'btn-primary'}`}
                  onClick={() => handleApproval(host.email_id)}
                  >
                  {approve[host.email_id] ? 'Approved' : 'Approve'}
                </button>
                  </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}