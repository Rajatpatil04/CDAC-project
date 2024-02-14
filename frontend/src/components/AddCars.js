import { Input } from "postcss";

export default function AddCars(){
  return(
    <div >
      <div className="border rounded container col-mb-6 mt-4 contain">

         <h1 className="text-2xl font-bold mb-4">Adding Cars</h1>
         <form className="row g-3 needs-validation"  noValidate>

          <div className="col-md-4">
           <select class="form-select">
            <option selected>BRAND NAME</option>
            <option value="1">One</option>
            <option value="2">Two</option>
          </select>
          </div>

          <div className="col-md-4">
           <select class="form-select">
            <option selected>CAR MODEL</option>
            <option value="1">One</option>
            <option value="2">Two</option>
          </select>
          </div>

          <div className="col-md-4">
           <select class="form-select">
            <option selected>CAR MODEL</option>
            <option value="1">One</option>
            <option value="2">Two</option>
          </select>
          </div>
          <div className="col-md-4">
          <div class="input-group">
            <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload"></input>
            <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">Button</button>
          </div>
          </div>

          <div class="col-md-4">
            <div class="input-group col-sm-3 h-100">
              <label class="input-group-text" for="inputGroupFile02">Car Color:</label>
              <input type="color" class="form-control h-100" id="inputGroupFile02"></input>
            </div>
          </div>

       
            
                         

         </form>
      </div>
    </div>
  )
}