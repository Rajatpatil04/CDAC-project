
import {  Outlet, useNavigate } from "react-router-dom"

export default function CustomerHome(){
var name = JSON.parse(localStorage.getItem("loggedUser")).username;
let navigate = useNavigate();
const handleClick =()=>{
       navigate("/customer/searchcars")
}

  return(
      <div className="chome">
          <br/>
        <marquee ><h1 style={{fontFamily:"cursive"}}> Welcome {name} </h1></marquee>
        <div className="outercircle">
          <div className="start" onClick={handleClick} ><br></br><b>START <br /> SEARCH<br /></b></div>
        </div>
        <Outlet/>
      </div>
  )
}