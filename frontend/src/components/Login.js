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

    // const handleLogin = async (e) => {
    //     e.preventDefault();
    //         const req = {
    //           method: 'POST',
    //           headers: {'Content-Type': 'application/json'},
    //           body: JSON.stringify({ 
    //             username : username, 
    //             password : password
    //           })
    //       }
   
    //      fetch('http://localhost:8081/login',req)
    //      .then( resp=>resp.json())
    //      .then(data=>{
    //         //  if(data.password===password )
    //         //     {
    //           console.log(data);
    //               if(data === -1 ){
    //                 setError('You are not registered');
    //               }
    //               else{
    //                 if(data.role.role_id === 1){                    
    //                   console.log("login successful")
    //                   dispatch(login());
    //                   navigate("/AdminHome");

    //                 }else if(data.role.role_id === 2){                    
    //                   console.log("login successful")
    //                   dispatch(login());
    //                   navigate("/HostHome");

    //                 }
    //                 else if(data.role.role_id === 3){                    
    //                   console.log("login successful")
    //                   dispatch(login());
    //                   navigate("/customerhome");
    //                 }
    //             }
    //            // }
    //             // else{
    //             //   setError('You are not registered');
    //             // }             
    //      })
    //     }


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
    
        // const response = await fetch('http://localhost:8081/login', req);
        // const data = await response.json();
    
        // console.log(data);
    
        // if (data === -1) {
        //   setError('You are not registered');
        // } else {
        //   const role_id = data.role_id;
    
        //   if (role_id === 1) {
        //     console.log('Admin login successful');
        //     dispatch(login());
        //     localStorage.setItem('loggeduser', JSON.stringify(data));
        //     navigate('/admin/adminhome');
        //   } else if (role_id === 2) {
        //     console.log('Host login successful');
        //     dispatch(login());
        //     localStorage.setItem('loggeduser', JSON.stringify(data));
        //     navigate('/host/hosthome');
        //   } else if (role_id === 3) {
        //     console.log('Customer login successful');
        //     dispatch(login());
        //     localStorage.setItem('loggeduser', JSON.stringify(data));
        //     navigate('/customer/customerhome');
        //   }
         fetch('http://localhost:8081/login',req)
         .then( resp=>resp.json())
         .then(data=>{
              console.log(data);
                  if(data == null ){
                    console.log("Login Failed...!")
                    setError("You are not registered");
                  }
                  else{
                    if(data.role_id === 1){                    
                      console.log("login successful")
                      localStorage.setItem("loggedUser",JSON.stringify(data));
                      dispatch(login());
                      navigate("/admin/adminhome");

                    }else if(data.role_id === 2){                    
                      console.log("login successful")
                      localStorage.setItem("loggedUser",JSON.stringify(data));
                      dispatch(login());
                      navigate("/host/hosthome");

                    }
                    else if(data.role_id === 3){                    
                      console.log("login successful")
                      localStorage.setItem("loggedUser",JSON.stringify(data));
                      dispatch(login());
                      navigate("/customer/customerhome");
                    }
               }            
        })
        }
       catch (error) {
        // Handle network or other errors
        console.error('Login failed:', error.message);
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
      </div>
    );
}

export default Login;

{/* <button type="button" className='btn btn-block btn-secondary' onClick={Registerclick}>Register</button> 
                <button type="button" className='btn btn-block text-dark' onClick={handleClick}>Forgot Password?</button>
                 */}