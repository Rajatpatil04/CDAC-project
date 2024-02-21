
import { useReducer, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function DoctorReg() {

    const init = {
        uid: "",
        pwd:"",
        fname:"",
        mname:"",
        lname:"",
        email:"",
        contact:"",
        specialization:0,
        experience:0
    }

    const reducer = (state, action) => {
            switch(action.type)
            {
                case 'update':
                     return {...state , [action.fld]:action.val}
                case 'reset' :
                     return init;
            }
    }

    const [info, dispatch] = useReducer(reducer,init) ;
    const [file,setFile] = useState();
    const navigate = useNavigate();
    const [allsp, setAllsp] = useState([]);


    useEffect( ()=> {
        fetch("http://localhost:8080/getAllSps")
        .then(resp => resp.json())
        .then(sps => setAllsp(sps))         
    } ,[]);

    const sendData = (e) => {
            //json data  + file
            e.preventDefault();
            const reqOptions = {
                method: 'POST',
                headers: {'content-type':'application/json'},
                body: JSON.stringify(info)
            }
            fetch("http://localhost:8080/regDoctor",reqOptions)
            .then(resp =>  {
                   if(resp.ok)
                        return resp.json();
                   else 
                        throw new Error("server error");                        
            })  
            .then(obj => {
                            var fd = new FormData();
       
                            fd.append("file", file);

                             const reqOptions1 = {
                                method: "post",
                                Headers: {
                                    "content-type":"multipart/form-data"
                                },
                                body: fd
                            }
                            fetch("http://localhost:8080/uploadimage/"+obj.doctor_id,reqOptions1)
                            .then(resp => resp.json())
                            .then(data => console.log(JSON.stringify(data)))
 
                            navigate('/')
               
            })
            .catch((error)=> alert("Server error. Try later") )
           


    }


    return (
        <div>
            <h1> Doctor Registration </h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="uid" className="form-label">Enter uid : </label>
                    <input type="text" className="form-control" id="uid" name="uid" value={info.uid}
                    onChange={(e)=>{dispatch({type:'update',fld:'uid', val: e.target.value})}}   />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="pwd" className="form-label">Enter pwd : </label>
                    <input type="password" className="form-control" id="pwd" name="pwd"  value={info.pwd} 
                    onChange={(e)=>{dispatch({type:'update',fld:'pwd', val: e.target.value})}} />
                    <div id="emailHelp" className="form-text"> .... </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="fname" className="form-label">Enter fname : </label>
                    <input type="text" className="form-control" id="fname" name="fname" value={info.fname}
                    onChange={(e)=>{dispatch({type:'update',fld:'fname', val: e.target.value})}}   />
                    <div id="emailHelp" className="form-text">...</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="mname" className="form-label">Enter mname : </label>
                    <input type="text" className="form-control" id="mname" name="mname" value={info.mname}
                    onChange={(e)=>{dispatch({type:'update',fld:'mname', val: e.target.value})}}   />
                    <div id="emailHelp" className="form-text">...</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="lname" className="form-label">Enter lname : </label>
                    <input type="text" className="form-control" id="lname" name="lname" value={info.lname}
                    onChange={(e)=>{dispatch({type:'update',fld:'lname', val: e.target.value})}}   />
                    <div id="emailHelp" className="form-text">...</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Enter email : </label>
                    <input type="text" className="form-control" id="email" name="email" value={info.email}
                    onChange={(e)=>{dispatch({type:'update',fld:'email', val: e.target.value})}}   />
                    <div id="emailHelp" className="form-text">...</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="contact" className="form-label">Enter contact : </label>
                    <input type="text" className="form-control" id="contact" name="contact" value={info.contact}
                    onChange={(e)=>{dispatch({type:'update',fld:'contact', val: e.target.value})}}   />
                    <div id="emailHelp" className="form-text">...</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="specialization" className="form-label">Select specialization : </label>
                    <select className="form-select" id="specialization" name="specialization" 
                    onChange={(e)=>{dispatch({type:'update',fld:'specialization', val: e.target.value})}} >
                        {
                            allsp.map(sp => {
                                return <option key={sp.sp_id}  value={sp.sp_id}> {sp.specialization}</option>
                            })
                        }
                    </select>
                    
                    {/* <input type="text" className="form-control" id="specialization" name="specialization" value={info.specialization} */}
                  
                    <div id="emailHelp" className="form-text">...</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="experience" className="form-label">Enter experience : </label>
                    <input type="number" className="form-control" id="experience" name="experience" value={info.experience}
                    onChange={(e)=>{dispatch({type:'update',fld:'experience', val: e.target.value})}}   />
                    <div id="emailHelp" className="form-text">...</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="picture" className="form-label">Upload photo : </label>
                    <input type="file" className="form-control" id="picture" name="picture"  
                     onChange={(e) => setFile(e.target.files[0])}/>                    
                    <div id="emailHelp" className="form-text">...</div>
                </div>
                <button type="submit" className="btn btn-primary mb-3" onClick={(e)=> {sendData(e)}}>Submit</button>
                <button type="reset" className="btn btn-primary mb-3" onClick={()=> {dispatch({type:'reset'})}} > Clear </button>
            </form>

            <p> {JSON.stringify(info)}</p>
            <p> {file && file.name}</p>
        </div>
    )
}