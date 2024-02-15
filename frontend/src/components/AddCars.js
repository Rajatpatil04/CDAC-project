import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddCars() {

  let navigate = useNavigate();

  const init = {
    car_model: { value: "", valid: false, touched: false, error: "" },
    rc_number: { value: "", valid: false, touched: false, error: "" },
    reg_date: { value: "", valid: false, touched: false, error: "" },
    formValid: false,
    car_image: { value: "", valid: false, touched: false, error: "" },
    color: { value: "", valid: false, touched: false, error: "" },
    insurance_type: { value: "", valid: false, touched: false, error: "" },
    insurance_exp_date: { value: "", valid: false, touched: false, error: "" },
    rent_price_per_hour: { value: "", valid: false, touched: false, error: "" },
    music_system: { value: "", valid: false, touched: false, error: "" },
    ac: { value: "", valid: false, touched: false, error: "" },
    mileage: { value: "", valid: false, touched: false, error: "" },
  };
  const reducer = (state,action) =>{
    switch (action.type){
        case 'update':
            const {key,val,touched,valid,error,formValid} = action.data;
            return {...state,[key]:{value:val,error,touched,valid},formValid}
        case 'reset':
            return init;
        default:
            break;
    }
}
  const[car,dispatch] = useReducer(reducer,init);
  const [date, setDate] = useState("");
  const [insurance_exp_date, setinsurance_exp_date] = useState("");
  const [ac, setac] = useState(false);
  const[music_system, setmusic_system] = useState(false);
  const validate1 =(key,val)=>{
       let valid = true;
       let error = "";
       switch(key){
           case'rc_number': 
                   var  pattern = /^[A-Z]{2}[0-9]{2}[A-Z]{1,2}[0-9]{1,4}$/;
                   if(!pattern.test(val))
                   {
                       valid = false;
                       error="Registration Number is not valid!";
                   }
                   break;
           case'rent_price_per_hour': 
                   var  pattern = /^[0-9]+$ /;
                   if(!pattern.test(val))
                   {
                       valid = false;
                       error="Rent must be in numberic only!";
                   }  
                   break;
            case 'mileage':
                    var pattern = /^[0-9]+$/;
                    if(!pattern.test(val))
                    {
                       valid = false;
                       error = "Mileage must be in numeric only"
                    }  
                    break;
                    
              default:
                   break;
       }
       return {valid:valid,error:error};

  }

  const handleChange = (key,val)=>{
      const {valid,error}= validate1(key,val);
      let formValid = true;
      for(let c in car){
          if(car[c].valid === false){
              formValid = false;
              break;
          }  
        }
      dispatch({type:"update",data:{key,val,touched:true,valid,error,formValid}}) 
  }
  const submitData=(e)=>{
       e.preventDefault();
       const reqOption = {
        method : "POST",
        headers : {"content-type":"application/json"},
        body : JSON.stringify({
          car_model: car.car_model.value,
          rc_number: car.car_model.value,
          reg_date: date,
          car_image:car.car_model.value,
          color:car.car_model.value,
          insurance_type:car.car_model.value,
          insurance_exp_date:insurance_exp_date,
          rent_price_per_hour:car.car_model.value,
          music_system:music_system,
          ac:ac,
          mileage:car.car_model.value,
           
        })
      }
      fetch("http://localhost:8081/uploadcar",reqOption)
      .then((res)=>{return res.text()})
      .then((msg)=>{console.log("Data Inserted Successfully!!!")})
       alert("Car Registered Successfully")
      navigate("/host/hosthome");
}

  return (
    <div>
      <div className="border rounded container col-mb-6 mt-4 contain">
        <h1 className="text-2xl font-bold mb-4" style={{ fontFamily: "" }}>
           CAR Details
        </h1>
        <form className="row g-3 needs-validation" noValidate>
          <div className="col-md-4">
          <label className="form-label">Car Model:</label>
            <select className="form-select" name="car_model" 
            onChange={(e)=>{handleChange("car_model",e.target.value)}} required>
              <option selected disabled>
                Choose Car Model
              </option>
              <option value="1">One</option>
              <option value="2">Two</option>
            </select>
          </div>

          <div className="col-md-4">
          <label className="form-label">RC Number:</label>
            <input className="form-control" name="rc_number" type="text"placeholder="RC NUMBER" 
             onChange={(e)=>{handleChange("rc_number",e.target.value)}} required/>
             </div>

          <div className="col-md-4">
          <label className="form-label">Car Image:</label>
            <div className="input-group">
              <input type="file"className="form-control" name="car_image" onChange={(e)=>{handleChange("car_image",e.target.value)}} required/>
                <button className="btn btn-outline-secondary"type="button">
                  Upload</button>
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
                setinsurance_exp_date(e.target.value);
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
              onChange={(e)=>{setac("ac",e.target.value)}}
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
              onChange={(e)=>{setac("ac",e.target.value)}}
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
            onChange={(e)=>{setmusic_system("music_system",e.target.value)}}
            />

          <label className="btn btn-outline-success" htmlFor="success-outlined-music"> YES </label><span> </span>
          <input type="radio" className="btn-check" name="music_system" id="danger-outlined-music" autoComplete="off" value={true}
           onChange={(e)=>{setmusic_system("music_system",e.target.value)}} defaultChecked/>
            <label className="btn btn-outline-danger" htmlFor="danger-outlined-music" > NO</label>
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

          <div>
            </div>   
          <div>
          <button type="submit" className="btn btn-primary">UPLOAD</button>
            
          </div>

        </form>
      
    


      </div>
    </div>
  );
}

