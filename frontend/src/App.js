import React, { useState } from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './App.css';

import Home from './components/Home';
import HostHome from './components/HostHome';
import AdminHome from './components/AdminHome';
import Login from './components/Login';
import CustomerSignup from './components/CustomerSignup';

import favicon from './images/favicon-removebg-preview.png';
import  CustomerHome from './components/CustomerHome';
import Logout from './components/logout';
import { useSelector } from 'react-redux';
import HostSignup from './components/HostSignup';
import Hostsignup1 from './components/HostSignnup1';
import ViewCars from './components/ViewCars';
import AdminApproval from './components/AdminApproval';
import CustomerNavbar from './components/CustomerNavbar';
import AdminNavbar from './components/AdminNavbar';
import HostNavbar from './components/HostNavbar';
import AddCars from './components/AddCars';
import ApproveCar from './components/Approvecars';
import CarRegistrationForm from './components/AddCars1';
import SearchCars from './components/SearchCars';
import CustomerProfile from './components/CustomerProfile';
import UpdateCustomer from './components/UpdateProfile';
import ApproveBooking from './components/ApproveBooking';
import BookingDetails from './components/BookingDetails';
import PaymentGateway from './components/PaymentGateway';
import BookingStatus from './components/BookingStatus';
import CustomerRequests from './components/PendingBookings';
import GiveFeedback from './components/GiveFeedback';
import BookingHistory from './components/BookingHistory';
import ErrorPage from './components/ErrorPage';

function App() {
      const mystate = useSelector((state) => state.logged);
      const [showDropdown, setShowDropdown] = useState(false);
    
      return (
        <div>
        <Navbar className='navcol container-fluid' expand="md" style={{ display: mystate.loggedIn ? "none" : "block" }}>
          <div className="container">
            <Link to="/" className="navbar-brand">
              <img src={favicon} alt="Book My Car Logo" width="90" height="40" className="d-inline-block align-text-top"/>
            </Link>
            <h1 className="text-dark" style={{ fontFamily: "-moz-initial" }}>BOOK MY CAR</h1>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            
              <Nav className="ml-auto routes">
               <NavLink to="/" className="nav-link text-dark"><h5 style={{ fontFamily: "serif" }}><b>HOME</b></h5></NavLink>
                <NavLink to="/viewcars" className="nav-link text-dark"><h5 style={{ fontFamily: "serif" }}><b>CARS</b></h5></NavLink>
                <NavDropdown
                  title={<h5 style={{ fontFamily: "serif" }}><b>REGISTER</b></h5>}
                  id="basic-nav-dropdown"
                  className="text-dark"
                  show={showDropdown}
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}
                >
                  <NavLink to="/customersignup" className="dropdown-item"><h6>Customer</h6></NavLink>
                  <NavLink to="/hostsignup1" className="dropdown-item"><h6>Host</h6></NavLink>
                </NavDropdown>
                <NavLink to="/login" className="nav-link text-dark"><h5 style={{ fontFamily: "serif" }}><b>LOGIN</b></h5></NavLink>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
     
    
    
   
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout/>} />
        <Route path="/customersignup" element={<CustomerSignup />} />
        <Route path="/hostsignup" element={<HostSignup />} />
        <Route path="/hostsignup1" element={<Hostsignup1/>}/>
        <Route path="/viewcars" element={<ViewCars/>}/>
        <Route path="/errorpage" element={<ErrorPage/>}/>
        <Route path="/bookingStatus" element={<BookingStatus/>}/>
            {/* <Route path="/searchcars" element={<SearchCars/>}/> */}
       
    {/* Customer side */}
        <Route path ="/customer" element={<CustomerNavbar/>}>
             <Route path="customerhome" element={<CustomerHome />} />
             <Route path="viewcars" element={<ViewCars/>}/>
             <Route path="profile" element={<CustomerProfile/>}/>
             <Route path='updatecustomer' element={<UpdateCustomer/>}/>
             <Route path="searchcars" element={<SearchCars/>}/>
             <Route path="bookingdetails" element={<BookingDetails/>}/>
             <Route path="bookingStatus" element={<BookingStatus/>}/>
             <Route path="approvedbooking" element={<CustomerRequests/>}/>
             <Route path="givefeedback" element={<GiveFeedback/>}/>
             <Route path="bookinghistory" element={<BookingHistory/>}/>
            <Route path="payment" element={<PaymentGateway/>}/>
            
        </Route>
     {/* Admin side    */}
     <Route path ="/admin" element={<AdminNavbar/>}>
             <Route path="adminhome" element={<AdminHome />} />
             <Route path='carrequests' element={<ApproveCar/>}/> 
             <Route path="viewcars" element={<ViewCars/>}/>
             <Route path="loginrequests" element={<AdminApproval/>}/>
        </Route>
      {/* Host side    */}
      <Route path ="/host" element={<HostNavbar/>}>
             <Route path="hosthome" element={<HostHome />} />
             <Route path="viewcars" element={<ViewCars/>}/>
             <Route path="addcars" element={<CarRegistrationForm/>}/>
             <Route path="viewbooking" element={<ApproveBooking/>}/>
          
        </Route>
        


      </Routes>

    </div>
  );
}

export default App;
