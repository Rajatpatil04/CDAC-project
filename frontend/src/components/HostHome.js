import { Navbar, Nav } from 'react-bootstrap';
import { useSelector } from "react-redux"
import { Link, NavLink, Outlet } from "react-router-dom"
import favicon from '../images/favicon-removebg-preview.png';

export default function HostHome(){
  const mystate = useSelector(state=>state.logged)
  return(
      <div>
        <Navbar bg="light" expand="lg" className='navcol'>
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
              {/* <NavLink to ="/" className="nav-link text-danger"><h5 style={{ fontFamily: "serif" }}><b>HOME</b></h5></NavLink> */}
              <NavLink to ="/showcars" className="nav-link text-danger"><h5 style={{ fontFamily: "serif" }}><b>CARS</b></h5></NavLink>
              <NavLink to ="/logout" className="nav-link text-danger"><h5 style={{ fontFamily: "serif" }}><b>LOGOUT</b></h5></NavLink>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
        <h1>Host Home</h1>
        <p> Login status: {mystate.loggedIn.toString()}</p>
        <Outlet/>
      </div>
  )
}