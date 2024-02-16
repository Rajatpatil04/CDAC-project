import { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CarRegistrationForm() {
    const navigate = useNavigate();
    const [ac, setAc] = useState(false);
    const [music_system, setMusicSystem] = useState(false);
    const [insurance_exp_date, setInsuranceExpDate] = useState("");
    const [fuelTypes, setFuelTypes] = useState([]);
    const [carModels, setCarModels] = useState([]);


  const initialFormState = {
    carModel: { value: "", valid: false, touched: false, error: "" },
    rc_no: { value: "", valid: false, touched: false, error: "" },
    registrationDate: { value: "", valid: false, touched: false, error: "" },
    color: { value: "", valid: false, touched: false, error: "" },
    insuranceType: { value: "", valid: false, touched: false, error: "" },
    insuranceExpDate: { value: "", valid: false, touched: false, error: "" },
    rentPricePerHour: { value: "", valid: false, touched: false, error: "" },
    musicSystem: { value: false, valid: true, touched: false, error: "" },
    ac: { value: false, valid: true, touched: false, error: "" },
    mileage: { value: "", valid: false, touched: false, error: "" },
    carImage: { value: null, valid: false, touched: false, error: "" },
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
        console.log(data);
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
  }, []);

  const [formData, dispatch] = useReducer(formReducer, initialFormState);
  const [file,setFile] = useState();
  const [date, setDate] = useState("");

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
           case'rent_price_per_hour': 
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
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    dispatch({ type: "update", data: { key: "carImage", value: file, touched: true, valid: true, error: "" } });
  };

 
  const handleSubmit = (e)=>{
      e.preventDefault();
      const reqOptions = {
        method :'POST',
        headers : {'content-type':'application/json'},
        body: JSON.stringify(formData)
      }
      fetch("http://localhost:8081/uploadcar",reqOptions)
      .then(resp=>{
        if(resp.ok)
           return resp.json();
        else 
           throw new Error("server error");  
      })
      .then(obj => {
              var fd = new FormData();
              fd.append("file",file); 
              const reqOptions1 ={
                method :"post",
                Headers :{
                   "content-type":"multipart/form-data"
                },
                body:fd
              }
              fetch("http://localhost:8081/uploadimage/"+obj.car_id,reqOptions1)
              .then(resp => resp.json())
              .then(data => console.log(JSON.stringify(data)))

              navigate('/host/hosthome');
      })
      .catch((error)=> alert("Server error.Try later"))

  }

  return (
    <div>
      <div className="border rounded container col-mb-6 mt-4 contain">
        <h1 className="text-2xl font-bold mb-4">Car Registration</h1>
        <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit} >

          <div className="col-md-4">
            <label className="form-label">Car Model:</label>
            <select
              className="form-select"
              name="car_model"
              onChange={(e) => {
                handleChange("car_model", e.target.value);
              }}
              required
            >
              <option selected disabled>
                Choose Car Model
              </option>
              {carModels.map((model) => (
                <option key={model.model_id} value={model.model_name}>
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
                onChange={handleFileChange}
                required
              />
              <button className="btn btn-outline-secondary" type="button">
                Upload
              </button>
            </div>
          </div>

          <div className="col-md-4">
            <label className="form-label">Car Color:</label>
            <select className="form-select" id="carColor" name="color" onChange={(e)=>{handleChange("color",e.target.value)}} required>
              <option value="" disabled selected>Select Car Color</option>
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
            <select className="form-select" id="insurance_type" name="insurance_type" onChange={(e)=>{handleChange("insurance_type",e.target.value)}} required>
              <option value="" disabled selected>Select Car Insurance Type</option>
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
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
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
              value={insurance_exp_date}
              onChange={(e) => {
                setInsuranceExpDate(e.target.value);
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
              onChange={(e)=>{setAc("ac",e.target.value)}}
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
              onChange={(e)=>{setAc("ac",e.target.value)}}
              />
            <label className="btn btn-outline-danger" htmlFor="danger-outlined">
              NO
            </label>
          </div>

        <div className="col-md-4">
          <label className="form-label">Music System:</label><br />
          <input type="radio"className="btn-check"name="music_system" value={true}
            id="success-outlined-music"
            autoComplete="off"
            onChange={(e)=>{setMusicSystem("music_system",e.target.value)}}
            />

          <label className="btn btn-outline-success" htmlFor="success-outlined-music"> YES </label><span> </span>
          <input type="radio" className="btn-check" name="music_system" id="danger-outlined-music" autoComplete="off" value={true}
           onChange={(e)=>{setMusicSystem("music_system",e.target.value)}} defaultChecked/>
            <label className="btn btn-outline-danger" htmlFor="danger-outlined-music" > NO</label>
        </div>

        <div className="col-md-4">
            <label className="form-label">Car Fuel Type:</label>
            <select
              className="form-select"
              name="fuel_type"
              onChange={(e) => {
                handleChange("fuel_type", e.target.value);
              }}
              required
            >
              <option selected disabled>
                Choose Car Fuel Type
              </option>
              {fuelTypes.map((fuel) => (
                <option key={fuel.fuel_id} value={fuel.fuel_type}>
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
            <input className="form-control" name="rent_price_per_hour" type="text"placeholder="Rent Per hour(In Rs)" 
            onChange={(e)=>{handleChange("rent_price_per_hour",e.target.value)}} required/>
             </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
