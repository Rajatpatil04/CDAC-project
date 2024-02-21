import { useState } from 'react';
import { Nav, NavDropdown, Navbar, Container, Row, Col } from "react-bootstrap";
import { Link, NavLink, Outlet } from "react-router-dom";
import favicon from '../images/favicon-removebg-preview.png';
import profile from '../images/profile.jpg';
import { useSelector } from "react-redux";

export default function CustomerNavbar() {
  const mystate = useSelector((state) => state.logged);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div>
      <Navbar className='bg-info ' expand="md" style={{ display: mystate.loggedIn ? "block" : "none"}} justify-content='end' >
        <Container fluid>
          <Link to="/customer/customerhome" className="navbar-brand">
            <img src={favicon} alt="Book My Car Logo" width="90" height="40" className="d-inline-block align-text-top img-fluid" />
          </Link>
          <h1 className="text-dark" style={{ fontFamily: "-moz-initial" }}>BOOK MY CAR</h1>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto croutes">
              <NavLink to="/customer/customerhome"  className="nav-link text-danger"><b>HOME</b></NavLink>
              <NavLink to="/customer/bookingdetails" className="nav-link text-danger"><b>MY BOOKINGS</b></NavLink>
              <NavLink to="/customer/viewcars" className="nav-link text-danger"><b>CARS</b></NavLink>
              <NavLink to="/customer/bookingStatus" className="nav-link text-danger"><b>STATUS</b></NavLink>
              <NavLink to="/customer/approvedbooking" className="nav-link text-danger"><b>APPROVED REQUESTS</b></NavLink>

              <NavDropdown
                title={<img className="pro" src={profile} alt="Profile" />}
                id="basic-nav-dropdown"
                className="text-dark"
                show={showDropdown}
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <NavLink to="/customer/profile" className="dropdown-item"><b>Profile</b></NavLink>
                <NavLink to="/logout" className="dropdown-item"><b>Logout</b></NavLink>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}
