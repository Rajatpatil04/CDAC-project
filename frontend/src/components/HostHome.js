import { Navbar, Nav } from 'react-bootstrap';
import { useSelector } from "react-redux"
import { Link, NavLink, Outlet } from "react-router-dom"


export default function HostHome(){
  const mystate = useSelector(state=>state.logged)
  return(
      <div>
     
        <h1>Host Home</h1>
        <Outlet/>
      </div>
  )
}