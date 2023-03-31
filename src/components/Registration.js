import { useRef,useState } from "react";
import axios from "axios";
import { user } from "fontawesome";
const Registration=()=>{
    const cid=useRef(0);
    const cname=useRef("");
    const prodName=useRef("");
    const qty=useRef(0);
    const price=useRef(0);
    const [res,setRes]=useState({});
    const cust_one=()=>{
        axios.post(`http://localhost:2000/save`,{"cid":cid.current.value,"cname":cname.current.value,"prodName":prodName.current.value,"qty":qty.current.value,"price":price.current.value}).then((posRes)=>{
            const {data}=posRes;
            setRes(data);
        },(errRes)=>{
            console.log(errRes);
        })

    };
    return(
        <>
           <div className="container mt-5">
            <div className="row">
                <h2 className="text text-success">Customer Registration Form Here</h2>
                <br></br><br></br>
                <div className="col-6">
                    <div className="form-group">
                        <label>Customer Id:</label>
                        <input type={"number"} ref={cid} className="form-control"></input>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label>Product Name:</label>
                        <input type={"text"} ref={prodName} className="form-control"></input>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label>Customer Name:</label>
                        <input type={"text"} ref={cname} className="form-control"></input>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label>Product Quantity:</label>
                        <input type={"number"} ref={qty} className="form-control"></input>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label>Product price:</label>
                        <input type={"number"} ref={price} className="form-control"></input>
                    </div>
                    <br></br><br></br>
                    <div className="form-group">
                        <button className="btn btn-success" onClick={cust_one}>Register</button>
                    </div>
                    {
                        Object.keys(res).length==0?(<div></div>):(<h1 style={{color:"green"}}>Thank U...Registered Successfully</h1>)
                    }  
                    

                    
                </div>
             
            </div>
           </div>
        </>
    )
   

}
export default Registration;