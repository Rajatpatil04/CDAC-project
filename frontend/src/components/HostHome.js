import { Navbar, Nav } from 'react-bootstrap';
import { useSelector } from "react-redux"
import { Link, NavLink, Outlet } from "react-router-dom"


export default function HostHome(){
  var name = JSON.parse(localStorage.getItem("loggedUser")).username; 
  const mystate = useSelector(state=>state.logged)
  return(
      <div className='hbody'>   
     <h1 style={{fontFamily:"revert"}}> Welcome {name} </h1>
        <Outlet/>
      </div>
  )
}