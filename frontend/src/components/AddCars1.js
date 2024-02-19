import { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CarRegistrationForm() {
    const navigate = useNavigate();
    // const [ac, setAc] = useState(false);
    // const [music_system, setMusicSystem] = useState(false);
    const [fuelTypes, setFuelTypes] = useState([]);
    const [carModels, setCarModels] = useState([]);
    const [cars, setCars] = useState([]);


  const initialFormState = {
    model_id: { value: "", valid: false, touched: false, error: "" },
    rc_no: { value: "", valid: false, touched: false, error: "" },
    reg_date: { value: "", valid: false, touched: false, error: "" },
    color: { value: "", valid: false, touched: false, error: "" },
    insurance_type: { value: "", valid: false, touched: false, error: "" },
    insurance_exp_date: { value: "", valid: false, touched: false, error: "" },
    price_per_hour: { value: "", valid: false, touched: false, error: "" },
    music_system: { value: "", valid: true, touched: false, error: "" },
    ac: { value: "", valid: true, touched: false, error: "" },
    mileage: { value: "", valid: false, touched: false, error: "" },
    formValid: false,

  };

  const formReducer = (state, action) => {
    switch (action.type) {
      case "update":
        const { key, value, touched, valid, error, formValid } = action.data;
        return { ...state, [key]: { value, touched, valid, error }, formValid };
      case "reset":
        return initialFormState;
      default:
        return state;
    }
  };
  useEffect(() => {
    fetch("http://localhost:8081/getallfueltypes")
      .then((response) => response.json())
      .then((data) => {
        setFuelTypes(data);
        //console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching fuel types:", error);
      });

    fetch("http://localhost:8081/getallcarmodels")
      .then((response) => response.json())
      .then((data) => {
        setCarModels(data);
      })
      .catch((error) => {
        console.error("Error fetching car models:", error);
      });

      fetch("http://localhost:8081/getallcars")
      .then((response) => response.json())
      .then((data) => {
        setCars(data);
      })
      .catch((error) => {
        console.error("Error fetching car models:", error);
      });
  }, []);

  const [formData, dispatch] = useReducer(formReducer, initialFormState);
  const [file,setFile] = useState();
 

  const validateInput = (key, value) => {
    let valid = true;
       let error = "";
       switch(key){
           case'rc_no': 
                   var  pattern = /^[A-Z]{2}[0-9]{2}[A-Z]{1,2}[0-9]{1,4}$/;
                   if(!pattern.test(value))
                   {
                       valid = false;
                       error="Registration Number is not valid!";
                   }
                   break;
           case'price_per_hour': 
                   var  pattern = /^[0-9]+$ /;
                   if(!pattern.test(value))
                   {
                       valid = false;
                       error="Rent must be in numberic only!";
                   }  
                   break;
            case 'mileage':
                    var pattern = /^[0-9]+$/;
                    if(!pattern.test(value))
                    {
                       valid = false;
                       error = "Mileage must be in numeric only"
                    }  
                    break;
                    
              default:
                   break;
       }
    return { valid: true, error: "" };
  };

  const handleChange = (key, value) => {
    const { valid, error } = validateInput(key, value);
    let formValid = true;
    for (const field in formData) {
      if (field !== key && !formData[field].valid) {
        formValid = false;
        break;
      }
    }
    dispatch({ type: "update", data: { key, value, touched: true, valid, error, formValid } });

    // if (key === "rc_no") {
    //   checkRcNo(value);
    // }
  };

  const checkRcNo = (value) => {
    const isRc_No_Taken = cars.some((car) => car.rc_no === value);
  
    if (isRc_No_Taken) {
      dispatch({
        type: 'update',
        key: 'rc_no',
        value,
        valid: false,
        error: 'Car is already registered!',
      });
    } else {
      dispatch({
        type: 'update',
        key: 'rc_no',
        value,
        valid: true,
        error: '',
      });
    }
  };

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   dispatch({ type: "update", data: { key: "carImage", value: file, touched: true, valid: true, error: "" } });
  // };

 
  const handleSubmit = (e)=>{
    //console.log(JSON.parse(localStorage.getItem("loggedUser")).uid);
    console.log(formData.ac.value);
    console.log(formData.music_system.value);
    console.log(formData)
      e.preventDefault();
      const reqOptions = {
        method :'POST',
        headers : {'content-type':'application/json'},
        body : JSON.stringify({
          model_id: formData.model_id.value,
          fuel_id: formData.fuel_id.value,
          mileage: parseFloat(formData.mileage.value), 
          price_per_hour: parseFloat(formData.price_per_hour.value), 
          color: formData.color.value,
          rc_no: formData.rc_no.value,
          reg_date: formData.reg_date.value,
          insurance_type: formData.insurance_type.value,
          insurance_exp_date: formData.insurance_exp_date.value,
          music_system: formData.music_system.value,
          ac: formData.ac.value,          
          host_id: JSON.parse(localStorage.getItem("loggedUser")).uid
      })
      }
      //console.log(JSON.stringify(formData))
      fetch("http://localhost:8081/uploadcar",reqOptions)
      .then(resp=>{
        if(resp.ok)
           return resp.json();
        else 
           throw new Error("server error");  
      })
      .then(obj => {
              console.log(JSON.stringify(obj))
              var fd = new FormData();
              fd.append("file",file); 
              const reqOptions1 ={
                method :"POST",
                /*headers :{
                   "Content-Type":"multipart/form-data"
                },*/
                body:fd
              }
              fetch("http://localhost:8081/uploadimage/"+obj.car_id,reqOptions1)
              .then(resp => resp.json())
              .then(data => console.log(JSON.stringify(data)))

              navigate('/host/hosthome');
      })
      .catch((error)=> {console.log("Error:" + error)})

  }

  return (
    <div>
      <div className="border rounded container col-mb-6 mt-4 contain">
        <h1 className="text-2xl font-bold mb-4">Car Registration</h1>
        <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit}  encType="multipart/form-data">

          <div className="col-md-4">
            <label className="form-label">Car Model:</label>
            <select
              className="form-select"
              name="car_model"
              onChange={(e) => {
                handleChange("model_id", e.target.value);
              }}
              required defaultValue="select"
            >
              <option value="select" disabled>
                Choose Car Model
              </option>
              {carModels.map((model) => (
                <option key={model.model_id} value={model.model_id}>
                  {model.model_name}
                </option>
              ))}
            </select>
          </div>


          <div className="col-md-4">
          <label className="form-label">RC Number:</label>
            <input className="form-control" name="rc_no" type="text"placeholder="RC NUMBER" 
             onChange={(e)=>{handleChange("rc_no",e.target.value)}} required/>
             </div>

          <div className="col-md-4">
            <label className="form-label">Car Image:</label>
            <div className="input-group">
              <input
                type="file"
                className="form-control"
                name="carImage"
                onChange={(e) => setFile(e.target.files[0])} 
                required
              />
            </div>
          </div>

          <div className="col-md-4">
            <label className="form-label">Car Color:</label>
            <select className="form-select" id="carColor" name="color" onChange={(e)=>{handleChange("color",e.target.value)}} required defaultValue="select">
              <option value="select" disabled >Select Car Color</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="grey">Gray</option>
              <option value="white">White</option>
              <option value="black">Black</option>
              <option value="silver">Silver</option>
              <option value="brown">Brown</option>
              <option value="gold">Gold</option>
              <option value="others">Gold</option>
            </select>
          </div>

          <div className="col-md-4">
            <label className="form-label">Car Insurance Type:</label>
            <select className="form-select" id="insurance_type" name="insurance_type" onChange={(e)=>{handleChange("insurance_type",e.target.value)}} required defaultValue="select">
              <option value="select" disabled >Select Car Insurance Type</option>
              <option value="ownership">Owner</option>
              <option value="comprehensive">Comprehensive Insurance</option>
              <option value="third-party">Third-Party Liability Insurance</option>
           
            </select>
          </div>


          <div className="col-md-4">
            <label className="form-label">Car Registration Date:</label>
            <input
              type="date"
              id="reg_date"
              name="reg_date"
              onChange={(e) => {
                handleChange("reg_date", e.target.value);
              }}
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300 form-control"
              required/>
            </div>


          <div className="col-md-4">
            <label className="form-label">Car Insurance Expiration Date:</label>
            <input
              type="date"
              id="insurance_exp_date"
              name="insurance_exp_date"
             onChange={(e) => {
              handleChange("insurance_exp_date", e.target.value);
            }}
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300 form-control"
              required/>
          </div>
                    <div className="col-md-4">
            <label className="form-label">Air Conditioning:</label><br />
            <input
              type="radio"
              className="btn-check"
              name="ac"
              value={true}
              id="success-outlined"
              autoComplete="off"
              defaultChecked
              onClick={(e)=>{handleChange("ac",true)}}
              />
            <label className="btn btn-outline-success" htmlFor="success-outlined">
              YES
            </label>
            <span> </span>
            <input
              type="radio"
              className="btn-check"
              name="ac"
              value={true}
              id="danger-outlined"
              autoComplete="off"
              onClick={(e)=>{handleChange("ac",false)}}
              />
            <label className="btn btn-outline-danger" htmlFor="danger-outlined">
              NO
            </label>
          </div>

        {/* <div className="col-md-4">
          <label className="form-label">Music System:</label><br />
          <input type="radio"className="btn-check"name="music_system" 
            id="success-outlined-music"
            autoComplete="off"
            // onClick={(e)=>{handleChange("music_system",e.target.value)}}
            />

          <label className="btn btn-outline-success" htmlFor="success-outlined-music"> YES </label><span> </span>
          <input type="radio" className="btn-check" name="music_system" id="danger-outlined-music" autoComplete="off" 
           onClick={(e)=>{handleChange("music_system",true)}} />
            <label className="btn btn-outline-danger" htmlFor="danger-outlined-music" > NO</label>
            <input type="radio" className="btn-check" name="music_system" id="danger-outlined-music" autoComplete="off" 
           onClick={(e)=>{handleChange("music_system",false)}} />
        </div> */}

<div className="col-md-4">
            <label className="form-label">Music System :</label><br />
            <input
              type="radio"
              className="btn-check"
              name="music_system"
              value={true}
              id="success-outlined-music"
              autoComplete="off"
              defaultChecked
              onClick={(e)=>{handleChange("music_system",true)}}
              />
            <label className="btn btn-outline-success" htmlFor="success-outlined-music">
              YES
            </label>
            <span> </span>
            <input
              type="radio"
              className="btn-check"
              name="music_system"
              value={true}
              id="danger-outlined-music"
              autoComplete="off"
              onClick={(e)=>{handleChange("music_system",false)}}
              />
            <label className="btn btn-outline-danger" htmlFor="danger-outlined-music">
              NO
            </label>
          </div>

        <div className="col-md-4">
            <label className="form-label">Car Fuel Type:</label>
            <select
              className="form-select"
              name="fuel_type"
              onChange={(e) => {
                handleChange("fuel_id", e.target.value);
              }}
              required defaultValue="select"
            >
              <option value="select" disabled>
                Choose Car Fuel Type
              </option>
              {fuelTypes.map((fuel) => (
                <option key={fuel.fuel_id} value={fuel.fuel_id}>
                  {fuel.fuel_type}
                </option>
              ))}
            </select>
          </div>



        <div className="col-md-4">
          <label className="form-label">Mileage:</label>
            <input className="form-control" name="mileage" type="text"placeholder="Mileage (Km/Litres)" 
             onChange={(e)=>{handleChange("mileage",e.target.value)}}required/>
             </div>

      
        <div className="col-md-4">
          <label className="form-label">Rent Per Hour:</label>
            <input className="form-control" name="price_per_hour" type="text"placeholder="Rent Per hour(In Rs)" 
            onChange={(e)=>{handleChange("price_per_hour",e.target.value)}} required/>
             </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
        <p> {file && file.name} </p>
        <p> {file && file.size}</p>
      </div>
    </div>
  );
}
