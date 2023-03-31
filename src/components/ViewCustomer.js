import { useState,useEffect } from "react";
import axios from "axios";
const ViewCustomers=()=>{
    const [arr,setArr]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:2000/getAll").then((posRes)=>{
            const {data}=posRes;
            setArr(data);
        },(errRes)=>{
            console.log(errRes);
        })
    },[]);
    return(
        <>
        {
            arr.length==0?(<div></div>):(<table className="table table-success table-stripped table-hover">
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
                    {
                        arr.map((ele,index)=>{
                            return(<tr>
                        
                        <td>{ele.cid}</td>
                        <td>{ele.cname}</td>
                        <td>{ele.prodName}</td>
                        <td>{ele.qty}</td>
                        <td>{ele.price}</td>
                        <td>{ele.total}</td>
                        <td>{ele.discount}</td>
                        <td>{ele.bill}</td>
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