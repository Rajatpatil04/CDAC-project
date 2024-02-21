import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function AdminApproval() {
  const mystate = useSelector((state) => state.logged);
  const [customers, setCustomers] = useState([]);
  const [hosts, setHosts] = useState([]);
  const [approve, setApprove] = useState([]);

  useEffect(() => {
    fetchCustomers();
    fetchHosts();
  }, []);

  const fetchCustomers = () => {
    fetch('http://localhost:8081/getcustomerrequests')
      .then((res) => res.json())
      .then((data) => {
        setCustomers(data);
        console.log(data);
      })
      .catch((error) => console.error('Error fetching Customers:', error));
  };

  const fetchHosts = () => {
    fetch('http://localhost:8081/gethostrequests')
      .then((res) => res.json())
      .then((data) => {
        setHosts(data);
        console.log(data);
      })
      .catch((error) => console.error('Error fetching hosts:', error));
  };

  const handleApproval = (uid) => {
    fetch(`http://localhost:8081/changestatus?uid=${uid}`, { method: 'PUT' })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data === 1) {
          // Update the state based on a successful approval
          setApprove((prevApprove) => ({
            ...prevApprove,
            [uid]: true, // Assuming 'true' represents 'approved'
          }));
        } else {
          console.error('Failed to update status.....');
        }
      })
      .catch((error) => console.error('Error in changing status:', error));
  };

  var indexc = 1;
  var indexh = 1;

  return (
    <div className="container-fluid">
      <h2 className="text-center" style={{ fontFamily: "initial" }}>Customers</h2>
      <div className="table-responsive">
        <table  border={1} className="table table-striped">
          <thead>
            <tr>
              <th>Sr. no</th>
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
            {customers.map((customer) => (
              <tr key={customer.customer_id}>
                <td>{indexc++}</td>
                <td>{customer.fname}</td>
                <td>{customer.lname}</td>
                <td>{customer.license_no}</td>
                <td>{customer.contact}</td>
                <td>{customer.emergency_contact}</td>
                <td>{new Date(customer.dob).toLocaleDateString()}</td>
                <td>{new Date(customer.reg_date).toLocaleDateString()}</td>
                <td>{customer.pancard_no}</td>
                <td>{customer.adhar_card}</td>
                <td>{customer.address}</td>
                <td>{customer.email_id}</td>
                <td>
                  <button
                    type="button"
                    className={`btn ${approve[customer.user.uid] ? 'btn-success' : 'btn-primary'}`}
                    onClick={() => handleApproval(customer.user.uid)}>
                    {approve[customer.user.uid] ? 'Approved' : 'Approve'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br /><br /><br />
      <h2 className="text-center" style={{ fontFamily: "initial" }}>Hosts</h2>
      <div className="table-responsive">
        <table border={1} className="table table-striped">
          <thead>
            <tr>
              <th>Sr. no</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email ID</th>
              <th>Contact</th>
              <th>Date Of Birth</th>
              <th>Date of Registration</th>
              <th>Pan card</th>
              <th>Adhar card</th>
              <th>Address</th>
              <th> Approve</th>
            </tr>
          </thead>
          <tbody>
            {hosts.map((host) => (
              <tr key={host.host_id}>
                <td>{indexh++}</td>
                <td>{host.fname}</td>
                <td>{host.lname}</td>
                <td>{host.email_id}</td>
                <td>{host.contact}</td>
                <td>{new Date(host.dob).toLocaleDateString()}</td>
                <td>{new Date(host.reg_date).toLocaleDateString()}</td>
                <td>{host.pancard_number}</td>
                <td>{host.adharcard_number}</td>
                <td>{host.address}</td>
                <td>
                  <button
                    type="button"
                    className={`btn ${approve[host.user.uid] ? 'btn-success' : 'btn-primary'}`}
                    onClick={() => handleApproval(host.user.uid)}>
                    {approve[host.user.uid] ? 'Approved' : 'Approve'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
