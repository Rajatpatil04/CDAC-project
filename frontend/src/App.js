import React from 'react';
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

function App() {
  const mystate = useSelector(state=> state.logged)
  return (
    <div >
      <Navbar bg="light" expand="lg" className='navcol' style={{display: mystate.loggedIn?"none":"block"}}>
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src={favicon} alt="Book My Car Logo" width="90" height="40" className="d-inline-block align-text-top"/>
          </Link>
          <h1 className="text-dark" style={{ fontFamily: "-moz-initial" }}>BOOK MY CAR</h1>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="input-group search">
              <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
              <button type="button" className="btn btn-outline-primary" data-mdb-ripple-init>search</button>
            </div>
            
            <Nav className="ml-auto">
              <NavLink to ="/" className="nav-link text-danger"><h5 style={{ fontFamily: "serif" }}><b>HOME</b></h5></NavLink>
              <NavLink to ="/Adminlogin" className="nav-link text-danger"><h5 style={{ fontFamily: "serif" }}><b>CARS</b></h5></NavLink>
              <NavDropdown title={<h5 style={{ fontFamily: "serif" }}><b>REGISTER</b></h5>} id="basic-nav-dropdown" className="text-danger">
                <NavLink to ="/customersignup" className="dropdown-item">Customer</NavLink>
                <NavLink to ="/hostsignup1" className="dropdown-item">Host</NavLink>
              </NavDropdown>
              <NavLink to ="/login" className="nav-link text-danger"><h5 style={{ fontFamily: "serif" }}><b>LOGIN</b></h5></NavLink>
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
        <Route path="/customerhome" element={<CustomerHome />} />
        <Route path="/hostsignup1" element={<Hostsignup1/>}/>
        <Route path="/adminhome" element={<AdminHome/>}/>
        <Route path="/hosthome" element={<HostHome/>}/>
      </Routes>

    </div>
  );
}

export default App;
