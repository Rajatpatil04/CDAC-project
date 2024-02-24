import { Navbar, Nav } from 'react-bootstrap';
import { useSelector } from "react-redux"
import { Link, NavLink, Outlet } from "react-router-dom"
import favicon from '../images/favicon-removebg-preview.png';

export default function AdminHome(){
  var name = JSON.parse(localStorage.getItem("loggedUser")).username; 
  return(
      <div className='abody container-fluid'>
     
     <h1 style={{fontFamily:"revert"}}> Welcome {name} </h1>
        <Outlet/>
      </div>
  )
}