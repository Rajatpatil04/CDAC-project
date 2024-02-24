
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";



export default function Feedbacks(){

  const mystate = useSelector((state) => state.logged);
  const [feedbacks,setfeedbacks] = useState([]);

  useEffect(()=>{
     fetchFeedbacks();
  },[])

  const fetchFeedbacks=()=>{
      fetch(`https://localhost:7081/api/Feedback`,{method:'GET'})
      .then((resp) => resp.json())
      .then((data)=> { 
        console.log(data);
        setfeedbacks(data)}
      ).catch(error=>console.log("Error in fetching feedbacks "+ error))      
  };


  var index=0;
  return(
    <div className="container">
          <h2 className="text-center" style={{ fontFamily: "initial" }}>FeedBacks</h2> <br/><br/>
         <div className="table-responsive">
           <table className="table table-striped table-bordered">
             <thead className="table-success">
              <tr>
                 <th>SR. No.</th>
                 <th>Customer Name</th>
                 <th>Car ID</th>
                 {/* <th>Car Name</th>
                 <th>Host Name</th> */}
                 <th>Feedback</th>
              </tr>
             </thead>
             <tbody>
             {feedbacks.map((fd) => (
               <tr key={fd.feedbackId}> 
               <td>{++index}</td>
               <td>{fd.customer?.fname} {fd.customer?.lname}</td>
               <td>{fd.carId}</td>
               {/* <td>{fd.carId?.modelId?.modelName}</td>
               <td>{fd.carId?.hostId?.fname} {fd.carId?.hostId?.fname}</td> */}
               <td>{fd.feedback1}</td>                  
                </tr>
             ))}
             </tbody>
                
           </table>
         </div>
    </div>
  )
}