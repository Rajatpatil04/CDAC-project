import { useDispatch } from "react-redux"
import {  useNavigate } from "react-router-dom";
import { logout } from "../loggedslice.js";

export default function Logout() {
    const dispatch = useDispatch();
    const Navigate=useNavigate("/");
    dispatch(logout());
    localStorage.removeItem('loggeduser');
 //   const mystate = useSelector(state=>state.logged)
    Navigate("/")
   
}
