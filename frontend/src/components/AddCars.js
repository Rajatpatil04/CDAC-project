import { useState } from "react";

export default function AddCars() {
  const init = {
    car_model: { value: "", valid: false, touched: false, error: "" },
    rc_number: { value: "", valid: false, touched: false, error: "" },
    reg_dob: { value: "", valid: false, touched: false, error: "" },
    formValid: true,
    car_image: { value: "", valid: false, touched: false, error: "" },
    color: { value: "", valid: false, touched: false, error: "" },
    car_description: { value: "", valid: false, touched: false, error: "" },
    insurance_type: { value: "", valid: false, touched: false, error: "" },
    insurance_exp_date: { value: "", valid: false, touched: false, error: "" },
    rent_price_per_hour: { value: "", valid: false, touched: false, error: "" },
    music_system: { value: "", valid: false, touched: false, error: "" },
    ac: { value: "", valid: false, touched: false, error: "" },
    mileage: { value: "", valid: false, touched: false, error: "" },
  };

  const [date, setDate] = useState("");
  const [insurance_exp_date, setinsurance_exp_date] = useState("");

  return (
    <div>
      <div className="border rounded container col-mb-6 mt-4 contain">
        <h1 className="text-2xl font-bold mb-4" style={{ fontFamily: "" }}>
          Adding Cars
        </h1>
        <form className="row g-3 needs-validation" noValidate>
          <div className="col-md-4">
          <label className="form-label">Car Model:</label>
            <select className="form-select" name="car_model" required>
              <option selected disabled>
                Choose Car Model
              </option>
              <option value="1">One</option>
              <option value="2">Two</option>
            </select>
          </div>

          <div className="col-md-4">
          <label className="form-label">RC Number:</label>
            <input className="form-control" name="rc_number" type="text"placeholder="RC NUMBER" required/>
             </div>

          <div className="col-md-4">
          <label className="form-label">Car Image:</label>
            <div className="input-group">
              <input type="file"className="form-control" name="car_image" required/>
                <button className="btn btn-outline-secondary"type="button">
                  Upload</button>
            </div>
          </div>
          
          <div className="col-md-4">
            <label className="form-label">Car Color:</label>
            <select className="form-select" id="carColor" name="color" required>
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
            </select>
          </div>

          <div className="col-md-4">
            <label className="form-label">Car Insurance Type:</label>
            <select className="form-select" id="insurance_type" name="insurance_type" required>
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
    id="success-outlined"
    autoComplete="off"
    defaultChecked
  />
  <label className="btn btn-outline-success" htmlFor="success-outlined">
    YES
  </label>

  <input
    type="radio"
    className="btn-check"
    name="ac"
    id="danger-outlined"
    autoComplete="off"
  />
  <label className="btn btn-outline-danger" htmlFor="danger-outlined">
    NO
  </label>
</div>

        <div className="col-md-4">
          <label className="form-label">Music System:</label><br />
          <input type="radio"className="btn-check"name="music_system"
            id="success-outlined-music"
            autoComplete="off"
            defaultChecked/>
          <label className="btn btn-outline-success" htmlFor="success-outlined-music"> YES </label>
          <input type="radio" className="btn-check" name="music_system" id="danger-outlined-music" autoComplete="off"/>
            <label className="btn btn-outline-danger" htmlFor="danger-outlined-music" > NO</label>
        </div>

        <div className="col-md-4">
          <label className="form-label">Mileage:</label>
            <input className="form-control" name="mileage" type="text"placeholder="Mileage (Km/Litres)" required/>
             </div>



        </form>
      </div>
    </div>
  );
}
