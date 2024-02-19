import { Nav, Navbar } from "react-bootstrap";
import { Link, NavLink, Outlet } from "react-router-dom";
import favicon from '../images/favicon-removebg-preview.png';
import { useSelector } from "react-redux";

export default function HostNavbar(){
  const mystate = useSelector((state) => state.logged)
  return(
    <div>

    <Navbar className='navcol' style={{display: mystate.loggedIn?"block":"none"}}>
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src={favicon} alt="Book My Car Logo" width="90" height="40"  className="d-inline-block align-text-top"/>
          </Link>
          <h1 className="text-dark text-bd" style={{ fontFamily: "-moz-initial" }}>BOOK MY CAR</h1>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* <div className="input-group search">
              <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
              <button type="button" className="btn btn-outline-primary" data-mdb-ripple-init>search</button>
            </div> */}
            
            <Nav className="ml-auto " style={{marginLeft:"70%"}}>
              {/* <NavLink to ="/" className="nav-link text-danger"><h5 style={{ fontFamily: "serif" }}><b>HOME</b></h5></NavLink> */}
              <NavLink to ="/host/viewbooking" className="nav-link text-danger"><h5 style={{ fontFamily: "serif" }}><b>REQUESTS</b></h5></NavLink>
              <NavLink to ="/host/addcars" className="nav-link text-danger"><h5 style={{ fontFamily: "serif" }}><b>ADD CARS</b></h5></NavLink>
              <NavLink to ="/logout" className="nav-link text-danger"><h5 style={{ fontFamily: "serif" }}><b>LOGOUT</b></h5></NavLink>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <Outlet/>
    </div>

  )
}