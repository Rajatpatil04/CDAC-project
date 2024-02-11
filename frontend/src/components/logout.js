import { useDispatch, useSelector } from "react-redux"
import { Navigate, useNavigate } from "react-router-dom";
import { logout } from "../loggedslice.js";

export default function Logout() {
    const dispatch = useDispatch();
    const Navigate=useNavigate("/");
    dispatch(logout());
    const mystate = useSelector(state=>state.logged)
    Navigate("/")
   
}
