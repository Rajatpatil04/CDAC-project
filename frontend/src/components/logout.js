import { useDispatch, useSelector } from "react-redux"
import {  useNavigate } from "react-router-dom";
import { logout } from "../loggedslice.js";

export default function Logout() {
    const dispatch = useDispatch();
    const Navigate=useNavigate("/");
    localStorage.removeItem("loggedUser");
    dispatch(logout());
    localStorage.removeItem('loggeduser');
   const mystate = useSelector(state=>state.logged)
    Navigate("/")
   
}
