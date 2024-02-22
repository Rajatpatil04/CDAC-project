import { useEffect } from "react";



export default function ViewFeedback(){
  const mystate = useSelector((state) => state.logged);
  const [feedbacks,setfeedbacks] = useState("");

  useEffect(()=>{
     fetchFeedbacks();

  })

  const fetchFeedbacks=()=>{
      fetch(`http://localhost:7050`)
  };


  var index=0;
  return(
    <div className="container">
         <div className="table-responsive">
           <table className="table table-striped">
             <thead>
              <tr>
                 <th>SR. No.</th>
                 <th>Customer Name</th>
                 <th>Car ID</th>
                 <th>Car Name</th>
                 <th>Host Name</th>
                 <th>Feedback</th>
              </tr>
             </thead>
             <tbody>
             {feedbacks.map((fd) => (
               <tr key={fd.feedback_id}> 
               <td>{++index}</td>
               <td>{fd.customer.fname} {fd.customer.lname}</td>
               <td>{fd.car.car_id}</td>
               <td>{fd.car.carModel.model_name}</td>
               <td>{fd.car.host.fname} {fd.car.host.lname}</td>
               <td>{fd.Feedback}</td>                  
                </tr>
             ))}
             </tbody>
                
           </table>
         </div>
    </div>
  )
}