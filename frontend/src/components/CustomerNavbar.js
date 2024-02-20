import { useState } from 'react'; // Import useState
import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link, NavLink, Outlet } from "react-router-dom";
import favicon from '../images/favicon-removebg-preview.png';
import profile from '../images/profile.jpg';
import { useSelector } from "react-redux";


export default function CustomerNavbar() {
  const mystate = useSelector((state) => state.logged);
  const [showDropdown, setShowDropdown] = useState(false); // Add state for dropdown visibility

  return (
    <div>
      <Navbar className='cnavcol container-fuild' style={{ display: mystate.loggedIn ? "block" : "none"}}>
        <div className="container-fluid">
          <Link to="/customer/customerhome" className="navbar-brand">
            <img src={favicon} alt="Book My Car Logo" width="90" height="40" className="d-inline-block align-text-top" />
          </Link>
          <h1 className="text-dark" style={{ fontFamily: "-moz-initial" }}>BOOK MY CAR</h1>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* <div className="input-group csearch ">
              <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
              <button type="button" className="btn btn-outline-primary" data-mdb-ripple-init>search</button>
            </div> */}

            <Nav className="ml-auto croutes">
            <NavLink to="/customer/customerhome" className="nav-link text-danger"><h5 style={{ fontFamily: "serif" }}><b>HOME</b></h5></NavLink>
            <NavLink to="/customer/bookingdetails" className="nav-link text-danger"><h5 style={{ fontFamily: "serif" }}><b>MY BOOKINGS</b></h5></NavLink>
              <NavLink to="/customer/viewcars" className="nav-link text-danger"><h5 style={{ fontFamily: "serif" }}><b>CARS</b></h5></NavLink>
              <NavLink to="/customer/bookingStatus" className="nav-link text-danger"><h5 style={{ fontFamily: "serif" }}><b>STATUS</b></h5></NavLink>

              <NavDropdown
                title={<img className="pro" src={profile} alt="Profile"></img>}
                id="basic-nav-dropdown"
                className="text-dark"
                show={showDropdown}
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <NavLink to="/customer/profile" className="dropdown-item"><h6>Profile</h6></NavLink>
                <NavLink to="/logout" className="dropdown-item"><h6>Logout</h6></NavLink>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <Outlet />
    </div>
  );
}
