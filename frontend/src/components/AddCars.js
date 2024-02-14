export default function AddCars(){
  return(
    <div >
      <div className="container">

         <h1>Adding Cars</h1>
         <form >
           <label className="form-label"> CAR MODEL</label>
           <select class="form-select form-select-lg mb-3">
            <option selected>CAR MODEL</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
                        

         </form>
      </div>
    </div>
  )
}