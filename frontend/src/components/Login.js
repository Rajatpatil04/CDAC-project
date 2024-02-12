
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
    const [err , setErr] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
            const req = {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({ 
                username : username, 
                password : password
              })
          }
   
         fetch('http://localhost:8081/login',req)
         .then( resp=>resp.json())
         .then(data=>{
              console.log(data);
                  if(data.userid === -1 ){
                    console.log("Login Failed...!")
                    setErr("You are not registered");
                    setError("You are not registered");
                  }
                  else{
                    if(data.role.role_id === 1){                    
                      console.log("login successful")
                      dispatch(login());
                      navigate("/AdminHome");

                    }else if(data.role.role_id === 2){                    
                      console.log("login successful")
                      dispatch(login());
                      navigate("/HostHome");

                    }
                    else if(data.role.role_id === 3){                    
                      console.log("login successful")
                      dispatch(login());
                      navigate("/customerhome");
                    }
                }            
         })
        }
        

    // const handleClick = () => {
    //     navigate('/forgotPassword');
    //   };
      const cross = () => {
        navigate('/');
      };
      // const Registerclick = () => {
      //   navigate('/customersignup');
      // };
    
        return (
      <div className='body' >
        <div className='admin col-sm-3' >
            <div className='crosss'>
                <button type="button" className='btn btn-danger' onClick={cross}>X</button>
                </div>
            <h2>User Login</h2>
            <form onSubmit={handleLogin}>
            <div>
                    <label >Username:</label>
                     <input type="text" id="username" name='username' className='form-control' value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div> 
                   <label >Password:</label>
                     <input type="password" id="password" name='password' className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <br />
                <button type="submit" className='btn btn-block btn-primary'>Login</button>
                <span> </span>
                
            </form>
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </div>
        <p> Logged in : {err} </p>
        {err && <div style={{ color: 'red' }}>{error}</div>}
      </div>
    );
}

export default Login;

{/* <button type="button" className='btn btn-block btn-secondary' onClick={Registerclick}>Register</button> 
                <button type="button" className='btn btn-block text-dark' onClick={handleClick}>Forgot Password?</button>
                 */}