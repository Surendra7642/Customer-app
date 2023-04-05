import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const ViewCustomers=()=>{
    const [arr,setArr]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>{
        axios.get(`http://localhost:1900/getAll`).then((posRes)=>{
            // const {data}=posRes;
            // const {prodImage}=data;
            //  setArr(prodImage);
            // console.log(posRes);
            const {data:d1}=posRes;
            const {data}=d1;
            // console.log(posRes);
            setArr(d1);
        },(errRes)=>{
            console.log(errRes);
        })
    },[]);
    const update=()=>{
        navigate("/updateCust");
       

    }
    return(
        <>
        {
            arr.length==0 ?(<div></div>):(<table className="table table-primary table-stripped table-hover">
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
                            <th>Profile</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        arr.map((ele,index)=>{
                            return(<tr key={index}>
                        
                        <td>{ele.cid}</td>
                        <td>{ele.cname}</td>
                        <td>{ele.productName}</td>
                        <td>{ele.qty}</td>
                        <td>{ele.price}</td>
                        <td>{ele.total}</td>
                        <td>{ele.discount}</td>
                        <td>{ele.bill}</td>
                        <td><img src={`data:image/jpeg;base64,${ele.prodImage}`} width={"100px"} height={"100px"} alt="samsung image"></img></td>
                        <td>
                            <button className="btn btn-success" onClick={update}>Update</button>
                        </td>
                        
                    </tr>)
                        })
                    }
                        
                    </tbody>
                
            </table>)
        }

        </>
    )

}
export default ViewCustomers;