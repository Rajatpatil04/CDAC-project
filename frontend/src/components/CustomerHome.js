
import {  Outlet } from "react-router-dom"

export default function CustomerHome(){
var name = JSON.parse(localStorage.getItem("loggedUser")).username;

  return(
      <div className="chome">
          <br/>
        <marquee ><h1 style={{fontFamily:"cursive"}}> Welcome {name} </h1></marquee>
        <Outlet/>
      </div>
  )
}