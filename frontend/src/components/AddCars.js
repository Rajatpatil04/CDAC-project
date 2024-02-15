import { Input } from "postcss";
import { useState } from "react";

export default function AddCars(){
   const init = {
   
    car_model: {value:'',valid: false, touched: false, error:""},
    rc_number: {value:'',valid: false, touched: false, error:""},
    reg_dob: {value:'',valid: false, touched: false, error:""},
    license_plate_no: {value:'',valid: false, touched: false, error:""},
    formValid: true,
    car_image: {value:'',valid: false, touched: false, error:""},
    car_color: {value:'',valid: false, touched: false, error:""},
    car_description: {value:'',valid: false, touched: false, error:""},
    insurance_info: {value:'',valid: false, touched: false, error:""},
    rent_price_per_hour: {value:'',valid: false, touched: false, error:""},
    milenge: {value:'',valid: false, touched: false, error:""}, 
   }

   const[date,setDate]=useState('');
   
  return(
    <div >
      <div className="border rounded container col-mb-6 mt-4 contain">

         <h1 className="text-2xl font-bold mb-4" style={{fontFamily:""}}>Adding Cars</h1>
         <form className="row g-3 needs-validation"  noValidate>

          


          <div className="col-md-4">
           <select class="form-select">
            <option selected>CAR MODEL</option>
            <option value="1">One</option>
            <option value="2">Two</option>
          </select>
          </div>

        

          <div className="col-md-4">
          <input class="form-control" type="text" placeholder="RC NUMBER" >
           </input>
          </div>

          <div className="col-md-4">
          <input class="form-control" type="text" placeholder="LICENCE PLATE NUMBER" >
           </input>
          </div>
          <div className="col-md-4">
          <div class="input-group">
            <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" placeholder="Car Image"></input>
            <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">Upload</button>
          </div>
          </div>

          <div class="col-md-4">
            <div class="input-group col-sm-3 h-50">
              <label class="input-group-text" for="inputGroupFile02">Car Color:</label>
              <input type="color" class="form-control h-100" id="inputGroupFile02"></input>
            </div>
          </div>

          <div className="col-md-4">
          <label className="form-label"> Car Registration Date:</label>
          <input type="date" id="reg_date" name="reg_date"
            onChange={(e)=>{setDate(e.target.value)}}
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300 form-control" required/> 
        </div>

       
            
                         

         </form>
      </div>
    </div>
  )
}