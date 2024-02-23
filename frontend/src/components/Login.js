import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import { login } from '../loggedslice';

const Login = () => {
   const dispatch = useDispatch();
   const mystate = useSelector((state) => state.logged)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();


    const handleLogin = async (e) => {
      e.preventDefault();
  
      try {
          const req = {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  username: username,
                  password: password,
              }),
          };
  
          const resp = await fetch('http://localhost:8081/login', req);
  
          if (!resp.ok) {
              // Handle non-OK status (e.g., 401 Unauthorized)
              if (resp.status === 401) {
                  console.log("Login Failed...");
                  setError("Login Failed...");
              } else {
                  throw new Error(`HTTP error! Status: ${resp.status}`);
              }
          }
  
          const data = await resp.json();
  
          if (data === null) {
              console.log("Login Failed...");
              setError("Login Failed...");
          } else {
              if (data.status === false) {
                  console.log("Pending Approval...");
                  setError("Pending Approval...");
              } else if (data.role.role_id === 1) {
                  console.log("login successful")
                  localStorage.setItem("loggedUser", JSON.stringify(data));
                  dispatch(login());
                  navigate("/admin/adminhome");
              } else if (data.role.role_id === 2) {
                  console.log("login successful")
                  localStorage.setItem("loggedUser", JSON.stringify(data));
                  dispatch(login());
                  navigate("/host/hosthome");
              } else if (data.role.role_id === 3) {
                  console.log("login successful")
                  localStorage.setItem("loggedUser", JSON.stringify(data));
                  dispatch(login());
                  navigate("/customer/customerhome");
              }
          }
      } catch (error) {
          //console.error('Login failed:', error.message);
          setError("Invalid Credentials. Try again.");
      }
  };
  
    
        
      const cross = () => {
        navigate('/');
      };
  
    
        return (
      <div className='body' >
        <div className='admin col-sm-3' >
            <div className='crosss'>
                <button type="button" className='btn btn-danger' onClick={cross}>X</button>
                </div>
            <h2 >User Login</h2><br/>
            <form onSubmit={handleLogin}>
            <div>
                    <label >Username:</label>
                     <input type="text" id="username" name='username' className='form-control' value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <br/>
                <div> 
                   <label  >Password:</label>
                     <input type="password" id="password" name='password' className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <br />
                <button type="submit" className='login'>Login</button>
                <span> </span>
                
            </form>
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </div>
        
      </div>
    );
}

export default Login;
