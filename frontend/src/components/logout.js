import { useDispatch, useSelector } from "react-redux"
import {  useNavigate } from "react-router-dom";
import { logout } from "../loggedslice.js";
import { useEffect } from "react";

export default function Logout() {
//     localStorage.removeItem("loggedUser");
//     const dispatch = useDispatch();
//     const Navigate=useNavigate("/");
//     dispatch(logout());
//     localStorage.removeItem('loggeduser');
//    const mystate = useSelector(state=>state.logged)
//     Navigate("/")

const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("loggedUser");
    dispatch(logout());
    // localStorage.removeItem('loggeduser');

    navigate("/");
  }, [dispatch, navigate]);

  const mystate = useSelector((state) => state.logged);

  return (
    <div>
    </div>
  );

   
}
