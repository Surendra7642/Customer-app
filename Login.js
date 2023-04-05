import { useRef,useState } from "react";
import axios from "axios";
const Login=()=>{
    const cid=useRef(0);
    const cname=useRef("");
    const [arr,setArr]=useState({});
    const fetch=()=>{
        axios.get(`http://localhost:2000/getOne/${cid.current.value}/${cname.current.value}`).then((posRes)=>{
            const {data}=posRes;
            setArr(data);
        },(errRes)=>{
            console.log(errRes);
        })
    }
    return(
        <>
            <div className="container mt-5">
                <div className="row">
                    <h1 style={{color:"skyblue"}}>Welcome to Login Form</h1>
                    <br></br>
                    <div className="col-5">
                        <div className="form-group">
                            <label>Customer Id:</label>
                            <input type={"number"} ref={cid}></input>
                        </div>
                        <br></br>
                        <div className="form-group">
                            <label>Customer Name:</label>
                            <input type={"text"} ref={cname}></input>
                        </div>
                        <br></br>

                        
                        <div className="form-group">
                        <button className="btn btn-success" onClick={fetch}>Login Here</button>
                    </div>
                    </div>
                </div>
            </div>
            <br></br><br></br>
            {
                Object.keys(arr).length==0?(<div></div>):(<table className=" table table-primary table-stripped table-hover">
                    <thead>
                        <tr>
                            <th>cid</th>
                            <th>cname</th>
                            <th>prodName</th>
                            <th>qty</th>
                            <th>price</th>
                            <th>total</th>
                            <th>discount</th>
                            <th>bill</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{arr.cid}</td>
                            <td>{arr.cname}</td>
                            <td>{arr.prodName}</td>
                            <td>{arr.qty}</td>
                            <td>{arr.price}</td>
                            <td>{arr.total}</td>
                            <td>{arr.discount}</td>
                            <td>{arr.bill}</td>
                        </tr>
                    </tbody>
                </table>)
            }
        </>
    )

}
export default Login;