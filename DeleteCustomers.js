import {useRef,useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const DeleteCustomers=()=>{
    const cid=useRef(0);
    const [res,setRes]=useState({});
    const navigate=useNavigate();
    const del_record=()=>{
        axios.delete(`http://localhost:1900/delete/${cid.current.value}`).then((posRes)=>{
           const {data}=posRes;
           setRes(data);
       
        if(data)
        {
              document.write("<h1>Customer Deleted Successfully</h1>");
            navigate("/home")
        }
        else{
            navigate("/error")
        }
        
           
        },(errRes)=>{
            console.log(errRes);
        })
    }
    return(
        <>
        <div className="container mt-5">
            <div className="row">
                <h1 style={{color:"red"}}>Deleting a Record</h1>
                <div className="col-5">
                    <div className="form-group">
                        <label>Customer Id:</label>
                        <input typ={"number"} ref={cid} ></input>
                     </div>
                     <br></br><br></br>
                     <div className="form-group">
                        <button className="btn btn-danger" onClick={del_record}>Delete Record</button>
                     </div>
                </div>
            </div>
        </div>
        {
            Object.keys(res).length==0?(<div></div>):(<div>{res}</div>)
        }
           
        </>
    )

}
export default DeleteCustomers;