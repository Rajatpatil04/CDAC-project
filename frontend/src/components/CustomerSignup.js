import React, { useEffect, useReducer,useState } from 'react';
import {  useNavigate } from 'react-router-dom';

const init = {

  Fname: {value:'',valid: false, touched: false, error:""},
  Lname: {value:"",valid: false, touched: false, error:""},
  email_id: {value:'',valid: false, touched: false, error:""},
  contact: {value:'',valid: false, touched: false, error:""},
  emergency_contact: {value:'',valid: false, touched: false, error:""},
  dob: {value:'',valid: false, touched: false, error:""},
  license_no: {value:'',valid: false, touched: false, error:""},
  formValid: false,
  pancard_no: {value:'',valid: false, touched: false, error:""},
  adhar_card: {value:'',valid: false, touched: false, error:""},
  address: {value:'',valid: false, touched: false, error:""},
  username: {value:'',valid: false, touched: false, error:""},
  password: {value:'',valid: false, touched: false, error:""},
  confirmPassword: {value:'',valid: false, touched: false, error:""},
  area_id: { value: '', valid: false, touched: false, error: '' }
  
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'update':
      const formValid = Object.values(state).every((field) => field.valid);
      console.log(formValid); 
      return {
        ...state,[action.field]: {...state[action.field],
          value: action.value,
          valid: action.valid,
          touched: true,
          error: action.error,
        },
        formValid: formValid,
      };

    default:
      return state;
  }
};

function CustomerSignup() {
  let navigate = useNavigate();
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [areas, setAreas] = useState([]);
  const[customers, setCustomers] = useState([]);
  const[users, setUsers] = useState([]);
  
  useEffect(() => {
    fetchAreas();
    fetchCustomers();
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
  const fetchCustomers = () => {
    fetch('http://localhost:8081/getallcustomers')
      .then((res) => res.json())
      .then((data) => {
        setCustomers(data);
        console.log(data);
      })
      .catch((error) => console.error('Error fetching Customers:', error));
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
  const [customer, dispatch] = useReducer(reducer, init);
  const validate1 = (key,value)=>{  
    let valid = true;
    let error = "";
    
    
    switch (key) {
      case 'Fname':
        var Fnameregex = /^[A-Z]{1}[a-z]+/;
        if(!Fnameregex.test(value)){
            valid = false;
            error = "First Name not valid!!!"
        }
        break;
      case 'Lname':
              var Lnameregex = /^[A-Z]{1}[a-z]+/;
              if(!Lnameregex.test(value)){
                  valid = false;
                  error = "Last Name not valid!!!"
              }
              break;
      case 'email_id':
                const email_idRegex=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                if(!email_idRegex.test(value)){
                  valid = false;
                  error = "email_id not valid!!!"
              }
              break;
      case 'contact' :
                const conRegex = /^[0-9]{10}$/;
                if(!conRegex.test(value)){
                    valid = false;
                    error = "Contact not valid!!!"
                }
                break;   
      case 'emergency_contact' :
          const econRegex = /^[0-9]{10}$/;
          if(!econRegex.test(value)){
               valid = false;
               error = "Contact not valid!!!"
           }
            break;  
      case 'license_no' :
           const license_noregex=/^[A-Z0-9]{1,10}$/;   
           if(!license_noregex.test(value)){
                   valid=false;
                  error="License number is Invalid!!!"
          }
          break;
      case 'pancard_no' :
              const pancard_noRegex =/^[A-Z]{5}[0-9]{4}[A-Z]$/;
              if(!pancard_noRegex.test(value)){
                valid=false;
               error="pancard_no number is Invalid!!!"
              }
              break;
       case 'adhar_card' :
                const adhar_cardRegex =/^\d{12}$/;
                if(!adhar_cardRegex.test(value)){
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
                  } else if (age < 18) {
                    valid = false;
                    error = "Person's age needs to be above 18";
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
                    if(value !== customer.password.value){
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
        for (let field in customer) {
          if(customer[field].valid===false)
          {
            formValid=false;
            break;
          }
        }
        dispatch({type: 'update',field: key,value,valid,error,formValid});};
      
      const[msg,setMsg] = useState("");

      const checkemail_id = (value) => {
        const isemail_idTaken = customers.some((customer) => customer.email_id === value);
      
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
        const isContactTaken = customers.some((customer) => customer.contact === value);
      
        if (isContactTaken) {
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
        const isAdharCardTaken = customers.some((customer) => customer.adhar_card === value);
    
        if (isAdharCardTaken) {
          dispatch({
            type: 'update',
            field: 'adhar_card',
            value,
            valid: false,
            error: 'Adhar Card is already registered!',
          });
        } else {
          setMsg('');
          dispatch({
            type: 'update',
            field: 'adhar_card',
            value,
            valid: true,
            error: '',
          });
        }
      };
    
      const checkPancardNo = (value) => {
        const isPancardNoTaken = customers.some((customer) => customer.pancard_no === value);
    
        if (isPancardNoTaken) {
          dispatch({
            type: 'update',
            field: 'pancard_no',
            value,
            valid: false,
            error: 'Pancard No is already registered!',
          });
        } else {
          setMsg('');
          dispatch({
            type: 'update',
            field: 'pancard_no',
            value,
            valid: true,
            error: '',
          });
        }
      };
    
      const checkLicenseNo = (value) => {
        const isLicenseNoTaken = customers.some((customer) => customer.license_no === value);
    
        if (isLicenseNoTaken) {
          dispatch({
            type: 'update',
            field: 'license_no',
            value,
            valid: false,
            error: 'License No is already registered!',
          });
        } else {
          setMsg('');
          dispatch({
            type: 'update',
            field: 'license_no',
            value,
            valid: true,
            error: '',
          });
        }
      };
      const checkUsername = (value) => {
        const isUsernameTaken = users.some((user) => user.username === value);
      
        if (isUsernameTaken) {
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
          fname : customer.Fname.value,
          lname : customer.Lname.value,
          email_id : customer.email_id.value,
          contact:customer.contact.value,
          emergency_contact:customer.emergency_contact.value,
          dob : date,
          license_no: customer.license_no.value,
          pancard_no: customer.pancard_no.value,
          adhar_card: customer.adhar_card.value,
          username : customer.username.value,
          password : customer.password.value,
          area_id : customer.area_id.value,
          address : customer.address.value
      })
  }
  console.log(reqOption);
  fetch("http://localhost:8081/registercustomer",reqOption)
  .then((res)=>{return res.text()})
  .then((msg)=>{setRegistrationSuccess(true);})
  if(customer.formValid == true){
    console.log("login")
    navigate("/login");  
    console.log('Form submitted:', customer);
  }
  };
  const[date,setDate] = useState("");

  return (
    <div className="border rounded container col-mb-6 mt-4 contain">
      <h2 className="text-2xl font-bold mb-4">Registration Form</h2>
      <form className="row g-3 needs-validation"  noValidate>

        <div className="col-md-4">
          <label className="form-label">First Name: </label>
          <input type="text" id="Fname" name="Fname"
            value={customer.Fname.value}
            onChange={(e)=>{handleChange("Fname",e.target.value)}}
            onBlur={(e)=>{handleChange("Fname",e.target.value)}}
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300 form-control inputGroup" required/>
          <div style={{display: (!customer.Fname.valid && customer.Fname.touched)?"block":"none"}}><p className="text-danger">{customer.Fname.error}</p></div>
        </div>

        <div className="col-md-4">
          <label className="form-label">Last Name:</label>
            <input type="text" id="Lname" name="Lname"
            value={customer.Lname.value}
            onChange={(e)=>{handleChange("Lname",e.target.value)}}
            onBlur={(e)=>{handleChange("Lname",e.target.value)}}
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-danger-300 form-control" required/>
          <div style={{display: (!customer.Lname.valid && customer.Lname.touched)?"block":"none"}}><p className="text-danger">{customer.Lname.error}</p></div>
        </div>

        <div className="col-md-4">
          <label className="form-label"> EMAIL ID: </label>
          <input type="email_id" id="email_id" name="email_id"
            value={customer.email_id.value}
            onChange={(e)=>{handleChange("email_id",e.target.value)}}
             onBlur={(e)=>{handleChange("email_id",e.target.value); 
             checkemail_id(e.target.value)}}
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300 form-control" required />
            <div style={{display: (!customer.email_id.valid && customer.email_id.touched)?"block":"none"}}><p className="text-danger">{customer.email_id.error}</p></div>
        </div>

        <div className="col-md-4">
        <label className="form-label"> Contact No:</label>
        <input
          type="text"
          id="contact"
          name="contact"
          value={customer.contact.value}
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
        <div style={{ display: !customer.contact.valid && customer.contact.touched ? "block" : "none" }}>
          <p className="text-danger">{customer.contact.error}</p>
        </div>
      </div>

        <div className="col-md-4">
          <label className="form-label"> Emergency Contact No: </label>
          <input type="text" id="emergency_contact" name="emergency_contact"
            value={customer.emergency_contact.value}
            onChange={(e)=>{handleChange("emergency_contact",e.target.value)}} onBlur={(e)=>{handleChange("emergency_contact",e.target.value)}}
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300 form-control" required />
           <div style={{display: (!customer.emergency_contact.valid && customer.emergency_contact.touched)?"block":"none"}}><p className="text-danger">{customer.emergency_contact.error}</p></div>
        </div>

        <h2 className="text-2xl font-bold mb-4">Personal Details</h2>

        <div className="col-md-4">
          <label className="form-label"> DATE OF BIRTH:</label>
          <input type="date" id="dob" name="dob"
            onChange={(e)=>{setDate(e.target.value)}}
            onBlur={(e)=>handleChange("dob",e.target.value)}
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300 form-control" required/> 
             <div style={{display: (!customer.dob.valid && customer.dob.touched)?"block":"none"}}><p className="text-danger">{customer.dob.error}</p></div>
        </div>

        <div className="col-md-4">
          <label className="form-label"> License no:</label>
          <input
            type="text"
            id="license_no"
            name="license_no"
            value={customer.license_no.value}
            onChange={(e) => {
              handleChange('license_no', e.target.value);
            }}
            onBlur={(e) => {
              handleChange('license_no', e.target.value);
              checkLicenseNo(e.target.value);
            }}
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300 form-control"
            required
          />
          <div style={{ display: !customer.license_no.valid && customer.license_no.touched ? 'block' : 'none' }}>
            <p className="text-danger">{customer.license_no.error}</p>
          </div>
        </div>

        <div className="col-md-4">
          <label className="form-label"> Pan Card: </label>
          <input
            type="text"
            id="pancard_no"
            name="pancard_no"
            value={customer.pancard_no.value}
            onChange={(e) => {
              handleChange('pancard_no', e.target.value);
            }}
            onBlur={(e) => {
              handleChange('pancard_no', e.target.value);
              checkPancardNo(e.target.value);
            }}
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300 form-control"
            required
          />
          <div style={{ display: !customer.pancard_no.valid && customer.pancard_no.touched ? 'block' : 'none' }}>
            <p className="text-danger">{customer.pancard_no.error}</p>
          </div>
        </div>

        <div className="col-md-4">
          <label className="form-label"> Adhar Card No: </label>
          <input
            type="text"
            id="adhar_card"
            name="adhar_card"
            value={customer.adhar_card.value}
            onChange={(e) => {
              handleChange('adhar_card', e.target.value);
            }}
            onBlur={(e) => {
              handleChange('adhar_card', e.target.value);
              checkAdharCard(e.target.value);
            }}
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300 form-control"
            required
          />
          <div style={{ display: !customer.adhar_card.valid && customer.adhar_card.touched ? 'block' : 'none' }}>
            <p className="text-danger">{customer.adhar_card.error}</p>
          </div>
        </div>


        <div className="col-md-4">
        <label className="form-label">Area:</label>
        <select
          id="area_id"
          name="area_id"
          value={customer.area_id.value}
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
        <div style={{ display: (!customer.area_id.valid && customer.area_id.touched) ? 'block' : 'none' }}>
          <p className="text-danger">{customer.area_id.error}</p>
        </div>
      </div>


        <br />
        <div className="">
          <label className="form-label">Address:</label>
          <input type="text" id="address" name="address"
            value={customer.address.value}
            onChange={(e)=>{handleChange("address",e.target.value)}} onBlur={(e)=>{handleChange("address",e.target.value)}}
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300 form-control" required />
           <div style={{display: (!customer.address.valid && customer.address.touched)?"block":"none"}}><p className="text-danger">{customer.address.error}</p></div>
        </div>

        <h2 className="text-2xl font-bold mb-4">Login Details</h2>

        {/* <div className="col-md-4">
          <label className="form-label"> User Name: </label>
          <input type="text" id="username" name="username" 
            value={customer.username.value}
            onChange={(e)=>{handleChange("username",e.target.value)}} onBlur={(e)=>{handleChange("username",e.target.value)}}
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300 form-control"required />
           <div style={{display: (!customer.username.valid && customer.username.touched)?"block":"none"}}><p className="text-danger">{customer.username.error}</p></div>
        </div> */}

        <div className="col-md-4">
          <label className="form-label"> User Name: </label>
          <input
            type="text"
            id="username"
            name="username"
            value={customer.username.value}
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
          <div style={{ display: !customer.username.valid && customer.username.touched ? 'block' : 'none' }}>
            <p className="text-danger">{customer.username.error}</p>
          </div>
        </div>

        <div className="col-md-4">
          <label className="form-label"> Password: </label>
          <input type="password" id="password" name="password"
            value={customer.password.value}
            onChange={(e)=>{handleChange("password",e.target.value)}} onBlur={(e)=>{handleChange("password",e.target.value)}}
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300 form-control" required />
           <div style={{display: (!customer.password.valid && customer.password.touched)?"block":"none"}}><p className="text-danger">{customer.password.error}</p></div>
        </div>

        <div className="col-md-4">
          <label className="form-label">Confirm Password:</label>
          <input type="password" id="confirmPassword" name="confirmPassword"
            value={customer.confirmPassword.value}
            onChange={(e)=>{handleChange("confirmPassword",e.target.value)}} onBlur={(e)=>{handleChange("confirmPassword",e.target.value)}}
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300 form-control" required/>
          <div style={{display: (!customer.confirmPassword.valid && customer.confirmPassword.touched)?"block":"none"}}><p className="text-danger">{customer.confirmPassword.error}</p></div>
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
        <button type=" button" className="text-white p-2 col-md-6 rounded bg-dark bd" onClick={(e)=>{handleSubmit(e)}} disabled={customer.formValid}>Register</button>
        <button type="reset" value={"Reset"} className="btn p-2 col-md-6 btn-danger bd">Reset</button>
      </div>
      </form>
    </div>
  );
}

export default CustomerSignup;
