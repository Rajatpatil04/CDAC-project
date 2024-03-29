import { Nav, Navbar } from "react-bootstrap"
import { useSelector } from "react-redux"
import { Link, NavLink, Outlet } from "react-router-dom"
import favicon from '../images/favicon-removebg-preview.png';

export default function AdminNavbar(){
  const mystate = useSelector((state) => state.logged)
  return(

      <div>
<Navbar  className='navcol container-fluid'expand="md" style={{display: mystate.loggedIn?"block":"none"}}>
        <div className="container-fluid">
          <Link to="/admin/adminhome" className="navbar-brand">
            <img src={favicon} alt="Book My Car Logo" width="90" height="40" className="d-inline-block align-text-top"/>
          </Link>
          <h1 className="text-dark" style={{ fontFamily: "-moz-initial" }}>BOOK MY CAR</h1>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* <div className="input-group search">
              <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
              <button type="button" className="btn btn-outline-primary" data-mdb-ripple-init>search</button>
            </div> */}
            
            <Nav className="ml-auto aroutes">
              <NavLink to ="/admin/viewcars" className="nav-link text-danger"><h5 style={{ fontFamily: "serif" }}><b>CARS</b></h5></NavLink>
              <NavLink to ="/admin/viewfeedback" className="nav-link text-danger"><h5 style={{ fontFamily: "serif" }}><b>FEEDBACKS</b></h5></NavLink>
              <NavLink to ="/admin/bookingdetails" className="nav-link text-danger"><h5 style={{ fontFamily: "serif" }}><b>BOOKINGS</b></h5></NavLink>
              <NavLink to ="/admin/carrequests" className="nav-link text-danger"><h5 style={{ fontFamily: "serif" }}><b>CAR REQUESTS</b></h5></NavLink>
              <NavLink to ="/admin/loginrequests" className="nav-link text-danger"><h5 style={{ fontFamily: "serif" }}><b>LOGIN REQUESTS</b></h5></NavLink>
              <NavLink to ="/logout" className="nav-link text-danger"><h5 style={{ fontFamily: "serif" }}><b>LOGOUT</b></h5></NavLink>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <Outlet/>
      </div>
  )
}