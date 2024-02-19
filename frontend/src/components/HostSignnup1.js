import React, { useEffect, useReducer,useState } from 'react';
import {  useNavigate } from 'react-router-dom';

const init = {

    fname: { value: '', valid: false, touched: false, error: '' },
    lname: { value: '', valid: false, touched: false, error: '' },
    email_id: { value: '', valid: false, touched: false, error: '' },
    contact: { value: '', valid: false, touched: false, error: '' },
    dob: { value: '', valid: false, touched: false, error: '' },
    pancard_number: { value: '', valid: false, touched: false, error: '' },
    adharcard_number: { value: '', valid: false, touched: false, error: '' },
    upi_id: { value: '', valid: false, touched: false, error: '' },
    area_id: { value: '', valid: false, touched: false, error: '' },
    address: { value: '', valid: false, touched: false, error: '' },
    username: {value:'',valid: false, touched: false, error:""},
    password: {value:'',valid: false, touched: false, error:""},
    confirmPassword: {value:'',valid: false, touched: false, error:""},
    area_id: { value: '', valid: false, touched: false, error: '' },
    formValid: true,
  
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'update':
      return {
        ...state,[action.field]: {...state[action.field],
          value: action.value,
          valid: action.valid,
          touched: true,
          error: action.error,
        },
        formValid: Object.values(state).every((field) => field.valid),
      };

    default:
      return state;
  }
};

function Hostsignup1() {
  let navigate = useNavigate();
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [areas, setAreas] = useState([]);
  const[hosts, setHosts] = useState([]);
  const[users, setUsers] = useState([]);
  
  useEffect(() => {
    fetchAreas();
    fetchHosts();
    fetchUsers();
  }, []);

  const fetchAreas = () => {
    fetch('http://localhost:8081/getallareas')
      .then((res) => res.json())
      .then((data) => {
        setAreas(data); 
        console.log(data);
      })
      .catch((error) => console.error('Error fetching areas:', error));
  };
  const fetchHosts = () => {
    fetch('http://localhost:8081/getallhosts')
      .then((res) => res.json())
      .then((data) => {
        setHosts(data);
        console.log(data);
      })
      .catch((error) => console.error('Error fetching hosts:', error));
  };
  const fetchUsers = () => {
    fetch('http://localhost:8081/getallusers')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        console.log(data);
      })
      .catch((error) => console.error('Error fetching users:', error));
  };
  const [host, dispatch] = useReducer(reducer, init);
  const validate1 = (key,value)=>{  
    let valid = true;
    let error = "";
    
    
    switch (key) {
      case 'fname':
        var fnameregex = /^[A-Z]{1}[a-z]+/;
        if(!fnameregex.test(value)){
            valid = false;
            error = "First Name not valid!!!"
        }
        break;
      case 'lname':
              var lnameregex = /^[A-Z]{1}[a-z]+/;
              if(!lnameregex.test(value)){
                  valid = false;
                  error = "Last Name not valid!!!"
              }
              break;
      case 'email_id':
                const email_idRegex=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                if(!email_idRegex.test(value)){
                  valid = false;
                  error = "Email_id is not valid!!!"
              }
              break;
      case 'contact' :
                const conRegex = /^[0-9]{10}$/;
                if(!conRegex.test(value)){
                    valid = false;
                    error = "Contact not valid!!!"
                }
                break;   
      case 'pancard_number' :
              const pancard_numberRegex =/^[A-Z]{5}[0-9]{4}[A-Z]$/;
              if(!pancard_numberRegex.test(value)){
                valid=false;
               error="pancard_number number is Invalid!!!"
              }
              break;

      case 'upi_id' :
              const upi_idRegex =/^[a-zA-Z0-9._-]+@[a-zA-Z]{3,}$/;
              if(!upi_idRegex.test(value)){
                valid=false;
               error="upi_id number is Invalid!!!"
              }
              break;
       case 'adharcard_number' :
                const adharcard_numberRegex =/^\d{12}$/;
                if(!adharcard_numberRegex.test(value)){
                  valid=false;
                 error="Adhar number is Invalid!!!"
                }
                break;
                case 'dob':
                  var cuDate = new Date();
                  var enteredDate = new Date(value);
                  let diff = cuDate.getTime() - enteredDate.getTime();
                  let age = Math.floor(diff / (365.25 * 24 * 60 * 60 * 1000));
                
                  if (cuDate < enteredDate) {
                    valid = false;
                    error = "BirthDate should not be in the future!!!";
                  } else if (age < 10) {
                    valid = false;
                    error = "Person's age needs to be above 10";
                  } else if (age >= 100) {
                    valid = false;
                    error = "Person's age needs to be below 100";
                  }
                  break;    
        case 'password':
                  // let weakPass = /^[a-zA-z]+$/;
                  // let avgPass = /(?=.[0-9!@#$%^&*]{1})[a-zA-z]+$/
                  // let strongPass = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@.#$!%?&^])[A-Za-z\d@.#$!%?&]{4,15}$/;
          
                  // if(!strongPass.test(value)){
                  //     if(!avgPass.test(value)){
                  //         if(value === ""){
                  //             valid = false;
                  //             error = "Please Enter PassWord!!!"
                  //         }else if(!weakPass.test(value)){
                  //             valid = false;
                  //             error = "Average PassWord!!!"
                  //         }else{
                  //             valid = false;
                  //             error = "Weak PassWord!!!"   
                  //         }
                  //     }
                  // }else{
                  //     error = "Strong PassWord!!!";
                  // }
                  let weakPass = /^[a-zA-Z]+$/;
                let avgPass = /(?=.*[0-9!@#$%^&*]{1})(?=.*[a-zA-Z])^[a-zA-Z]+$/;
                let strongPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%?&^])[A-Za-z\d@.#$!%?&]{4,15}$/;

                if (!strongPass.test(value)) {
                    if (!avgPass.test(value)) {
                        if (value === "") {
                            valid = false;
                            error = "Please Enter Password!!!";
                        } else if (!weakPass.test(value)) {
                            valid = false;
                            error = "Average Password!!!";
                        } else {
                            valid = false;
                            error = "Weak Password!!!";
                        }
                    }
                } else {
                    error = "Strong Password!!!";
                }

                  break; 
                  case 'confirmPassword':
                    if(value !== host.password.value){
                        valid = false;
                        error = "Both Password Dont Match. Re-Enter Pass!!!";
                    }
                    break;              
        default:
          break;
        }
        return {valid: valid,error: error};
      };
      const handleChange = (key, value) => {
        setMsg("");
        const { valid, error } = validate1(key, value);
        let formValid = true;
        for (let field in host) {
          if (field !== 'formValid' && host[field].valid === false) {
            formValid = false;
            break;
          }
        }
        dispatch({type: 'update',field: key,value,valid,error,});};
      
      const[msg,setMsg] = useState("");
      // const checkemail_id = (value) =>{
      //   fetch("http://localhost:8081/getemail_idverification?email_id="+value) 
      //   .then((res)=>{return res.json()})
      //   .then((data) => {
      //       if(data.length > 0){
      //           setMsg("User Already Present!!!")
      //           host.email_id.valid=false;
      //       }else{
      //           setMsg("");
      //           host.email_id.valid=true;
      //       }
      //   })
      //   console.log(msg);
      // }
      const checkemail_id = (value) => {
        const isemail_idTaken = hosts.some((host) => host.email_id === value);
      
        if (isemail_idTaken) {
          setMsg("email_id is already registered!");
          dispatch({
            type: 'update',
            field: 'email_id',
            value,
            valid: false,
            error: 'email_id is already registered!',
          });
        } else {
          setMsg("");
          dispatch({
            type: 'update',
            field: 'email_id',
            value,
            valid: true,
            error: '',
          });
        }
      };
      
      const checkContact = (value) => {
        const isContactTaken = hosts.some((host) => host.contact === value);
      
        if (isContactTaken) {
          setMsg("Contact number is already registered!");
          dispatch({
            type: 'update',
            field: 'contact',
            value,
            valid: false,
            error: 'Contact number is already registered!',
          });
        } else {
          setMsg("");
          dispatch({
            type: 'update',
            field: 'contact',
            value,
            valid: true,
            error: '',
          });
        }
      };
      const checkAdharCard = (value) => {
        const isAdharCardTaken = hosts.some((host) => host.adharcard_number === value);
    
        if (isAdharCardTaken) {
          setMsg('Adhar Card is already registered!');
          dispatch({
            type: 'update',
            field: 'adharcard_number',
            value,
            valid: false,
            error: 'Adhar Card is already registered!',
          });
        } else {
          setMsg('');
          dispatch({
            type: 'update',
            field: 'adharcard_number',
            value,
            valid: true,
            error: '',
          });
        }
      };
    
      const checkPancardNo = (value) => {
        const isPancardNoTaken = hosts.some((host) => host.pancard_number === value);
    
        if (isPancardNoTaken) {
          setMsg('Pancard No is already registered!');
          dispatch({
            type: 'update',
            field: 'pancard_number',
            value,
            valid: false,
            error: 'Pancard No is already registered!',
          });
        } else {
          setMsg('');
          dispatch({
            type: 'update',
            field: 'pancard_number',
            value,
            valid: true,
            error: '',
          });
        }
      };

      const checkUpiId = (value) => {
        const isUpiIdtaken = hosts.some((host) => host.upi_id === value);
    
        if (isUpiIdtaken) {
          setMsg('UPI Id is already registered!');
          dispatch({
            type: 'update',
            field: 'upi_id',
            value,
            valid: false,
            error: 'UpI Id is already registered!',
          });
        } else {
          setMsg('');
          dispatch({
            type: 'update',
            field: 'upi_id',
            value,
            valid: true,
            error: '',
          });
        }
      };
    
      
      const checkUsername = (value) => {
        const isUsernameTaken = users.some((user) => user.username === value);
      
        if (isUsernameTaken) {
          setMsg('Username is already taken!');
          dispatch({
            type: 'update',
            field: 'username',
            value,
            valid: false,
            error: 'Username is already taken!',
          });
        } else {
          setMsg('');
          dispatch({
            type: 'update',
            field: 'username',
            value,
            valid: true,
            error: '',
          });
        }
      };
      

  const handleSubmit = (e) => {
    e.preventDefault();
    const reqOption = {
      method : "POST",
      headers : {"content-type":"application/json"},
      body : JSON.stringify({
          fname : host.fname.value,
          lname : host.lname.value,
          email_id : host.email_id.value,
          contact:host.contact.value,
          dob : date,
          pancard_number: host.pancard_number.value,
          adharcard_number: host.adharcard_number.value,
          username : host.username.value,
          password : host.password.value,
          area_id : host.area_id.value,
          address : host.address.value,
          upi_id : host.upi_id.value
      })
  }
  console.log(reqOption);
  fetch("http://localhost:8081/registerhost",reqOption)
  .then((res)=>{return res.text()})
  .then((msg)=>{setRegistrationSuccess(true);})

      navigate("/login");  
    console.log('Form submitted:', host);
  };
  const[date,setDate] = useState("");

  return (
    <div className="border rounded container col-mb-6 mt-4 contain">
      <h2 className="text-2xl font-bold mb-4">Registration Form</h2>
      <form className="row g-3 needs-validation"  noValidate>

        <div className="col-md-4">
          <label className="form-label">First Name: </label>
          <input type="text" id="fname" name="fname"
            value={host.fname.value}
            onChange={(e)=>{handleChange("fname",e.target.value)}}
            onBlur={(e)=>{handleChange("fname",e.target.value)}}
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300 form-control" required/>
          <div style={{display: (!host.fname.valid && host.fname.touched)?"block":"none"}}><p className="text-danger">{host.fname.error}</p></div>
        </div>

        <div className="col-md-4">
          <label className="form-label">Last Name:</label>
            <input type="text" id="lname" name="lname"
            value={host.lname.value}
            onChange={(e)=>{handleChange("lname",e.target.value)}}
            onBlur={(e)=>{handleChange("lname",e.target.value)}}
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-danger-300 form-control" required/>
          <div style={{display: (!host.lname.valid && host.lname.touched)?"block":"none"}}><p className="text-danger">{host.lname.error}</p></div>
        </div>

        <div className="col-md-4">
          <label className="form-label"> EMAIL ID: </label>
          <input type="email_id" id="email_id" name="email_id"
            value={host.email_id.value}
            onChange={(e)=>{handleChange("email_id",e.target.value)}}
             onBlur={(e)=>{handleChange("email_id",e.target.value); 
             checkemail_id(e.target.value)}}
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300 form-control" required />
            <div style={{display: (!host.email_id.valid && host.email_id.touched)?"block":"none"}}><p className="text-danger">{host.email_id.error}</p></div>
            
        </div>

        <div className="col-md-4">
        <label className="form-label"> Contact No:</label>
        <input
          type="text"
          id="contact"
          name="contact"
          value={host.contact.value}
          onChange={(e) => {
            handleChange("contact", e.target.value);
          }}
          onBlur={(e) => {
            handleChange("contact", e.target.value);
            checkContact(e.target.value);
          }}
          className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300 form-control"
          required
        />
        <div style={{ display: !host.contact.valid && host.contact.touched ? "block" : "none" }}>
          <p className="text-danger">{host.contact.error}</p>
        </div>
      </div>

        <h2 className="text-2xl font-bold mb-4">Personal Details</h2>

        <div className="col-md-4">
          <label className="form-label"> DATE OF BIRTH:</label>
          <input type="date" id="dob" name="dob"
            onChange={(e)=>{setDate(e.target.value)}}
            onBlur={(e)=>handleChange("dob",e.target.value)}
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300 form-control" required/> 
            <div style={{display: (!host.dob.valid && host.dob.touched)?"block":"none"}}><p className="text-danger">{host.dob.error}</p></div>
        </div>

        <div className="col-md-4">
          <label className="form-label"> Pan Card: </label>
          <input
            type="text"
            id="pancard_number"
            name="pancard_number"
            value={host.pancard_number.value}
            onChange={(e) => {
              handleChange('pancard_number', e.target.value);
            }}
            onBlur={(e) => {
              handleChange('pancard_number', e.target.value);
              checkPancardNo(e.target.value);
            }}
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300 form-control"
            required
          />
          <div style={{ display: !host.pancard_number.valid && host.pancard_number.touched ? 'block' : 'none' }}>
            <p className="text-danger">{host.pancard_number.error}</p>
          </div>
        </div>

        <div className="col-md-4">
          <label className="form-label"> UPI Id: </label>
          <input
            type="text"
            id="upi_id"
            name="upi_id"
            value={host.upi_id.value}
            onChange={(e) => {
              handleChange('upi_id', e.target.value);
            }}
            onBlur={(e) => {
              handleChange('upi_id', e.target.value);
              checkUpiId(e.target.value);
            }}
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300 form-control"
            required
          />
          <div style={{ display: !host.upi_id.valid && host.upi_id.touched ? 'block' : 'none' }}>
            <p className="text-danger">{host.upi_id.error}</p>
          </div>
        </div>

        <div className="col-md-4">
          <label className="form-label"> Adhar Card No: </label>
          <input
            type="text"
            id="adharcard_number"
            name="adharcard_number"
            value={host.adharcard_number.value}
            onChange={(e) => {
              handleChange('adharcard_number', e.target.value);
            }}
            onBlur={(e) => {
              handleChange('adharcard_number', e.target.value);
              checkAdharCard(e.target.value);
            }}
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300 form-control"
            required
          />
          <div style={{ display: !host.adharcard_number.valid && host.adharcard_number.touched ? 'block' : 'none' }}>
            <p className="text-danger">{host.adharcard_number.error}</p>
          </div>
        </div>


        <div className="col-md-4">
        <label className="form-label">Area:</label>
        <select
          id="area_id"
          name="area_id"
          value={host.area_id.value}
          onChange={(e) => {
            handleChange('area_id', e.target.value);
          }}
          onBlur={(e) => {
            handleChange('area_id', e.target.value);
          }}
          className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300 form-control"
          required
        >
          <option value="" disabled>
            Select Area
          </option>
          {areas.map((area) => (
            <option key={area.area_id} value={area.area_id}>
              {area.area_name}
            </option>
          ))}
        </select>
        <div style={{ display: (!host.area_id.valid && host.area_id.touched) ? 'block' : 'none' }}>
          <p className="text-danger">{host.area_id.error}</p>
        </div>
      </div>


        <br />
        <div className="">
          <label className="form-label">Address:</label>
          <input type="text" id="address" name="address"
            value={host.address.value}
            onChange={(e)=>{handleChange("address",e.target.value)}} onBlur={(e)=>{handleChange("address",e.target.value)}}
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300 form-control" required />
           <div style={{display: (!host.address.valid && host.address.touched)?"block":"none"}}><p className="text-danger">{host.address.error}</p></div>
        </div>

        <h2 className="text-2xl font-bold mb-4">Login Details</h2>

        {/* <div className="col-md-4">
          <label className="form-label"> User Name: </label>
          <input type="text" id="username" name="username" 
            value={host.username.value}
            onChange={(e)=>{handleChange("username",e.target.value)}} onBlur={(e)=>{handleChange("username",e.target.value)}}
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300 form-control"required />
           <div style={{display: (!host.username.valid && host.username.touched)?"block":"none"}}><p className="text-danger">{host.username.error}</p></div>
        </div> */}

        <div className="col-md-4">
          <label className="form-label"> User Name: </label>
          <input
            type="text"
            id="username"
            name="username"
            value={host.username.value}
            onChange={(e) => {
              handleChange('username', e.target.value);
            }}
            onBlur={(e) => {
              handleChange('username', e.target.value);
              checkUsername(e.target.value);
            }}
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300 form-control"
            required
          />
          <div style={{ display: !host.username.valid && host.username.touched ? 'block' : 'none' }}>
            <p className="text-danger">{host.username.error}</p>
          </div>
        </div>

        <div className="col-md-4">
          <label className="form-label"> Password: </label>
          <input type="password" id="password" name="password"
            value={host.password.value}
            onChange={(e)=>{handleChange("password",e.target.value)}} onBlur={(e)=>{handleChange("password",e.target.value)}}
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300 form-control" required />
           <div style={{display: (!host.password.valid && host.password.touched)?"block":"none"}}><p className="text-danger">{host.password.error}</p></div>
        </div>

        <div className="col-md-4">
          <label className="form-label">Confirm Password:</label>
          <input type="password" id="confirmPassword" name="confirmPassword"
            value={host.confirmPassword.value}
            onChange={(e)=>{handleChange("confirmPassword",e.target.value)}} onBlur={(e)=>{handleChange("confirmPassword",e.target.value)}}
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300 form-control" required/>
          <div style={{display: (!host.confirmPassword.valid && host.confirmPassword.touched)?"block":"none"}}><p className="text-danger">{host.confirmPassword.error}</p></div>
        </div>

        <div className="col-md-4">
          <div className="custom-control custom-checkbox mb-3">
            <input type="checkbox" className="custom-control-input"  id="customControlValidation1" required />
            <label className="custom-control-label" htmlFor="customControlValidation1">Agree to terms and conditions </label>
            <div className="invalid-feedback"> Please tick the checkbox first </div>
          </div>
        </div>

        {registrationSuccess && (<div className="alert alert-success" role="alert">Registered successfully!</div>)}
        
      <div className='container '>
        <button type=" button" className="text-white p-2 col-md-6 rounded bg-dark bd" onClick={(e)=>{handleSubmit(e)}} disabled={host.formValid}>Register</button>
        <button type="reset" value={"Reset"} className="btn p-2 col-md-6 btn-danger bd">Reset</button>
      </div>
      </form>
    </div>
  );
}

export default Hostsignup1;
