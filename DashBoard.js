import { Route,Routes,NavLink } from "react-router-dom";
import Home from "./Home";
import Registration from "./Registration";
import Login from "./Login";
import ViewCustomers from "./ViewCustomer";
import DeleteCustomers from "./DeleteCustomers";
import Aboutus from "./Aboutus";
import ImageAdd from "./ImageAdd";
const DashBoard=()=>{
    return(
        <>
            <div className="container1 mt-5">
            <div className="surya">
                <center>
                    <NavLink to="/home" style={{marginRight:100,fontSize:"20px"}}>Home</NavLink>
                    <NavLink to="/register" style={{marginRight:100,fontSize:"20px"}}>Register</NavLink>
                    <NavLink to="/login" style={{marginRight:100,fontSize:"20px"}}>Login</NavLink>
                    <NavLink to="/viewcustomers" style={{marginRight:100,fontSize:"20px"}}>ViewCustomer</NavLink>
                    <NavLink to="/about" style={{marginRight:100,fontSize:"20px"}}>About Us</NavLink>
                    <NavLink to="/delete" style={{marginRight:100,fontSize:"20px"}}>DeleteCustomers</NavLink>
                    <NavLink to="/imageinsert" style={{marginRight:100,fontSize:"20px"}}>ImageInsert</NavLink>
                    <NavLink to="/updateCust" style={{marginRight:100,fontSize:"20px"}}>UpdateCustomer</NavLink>
                </center>
                </div>
                <br></br><br></br>
                <Routes>
                    <Route path="home" element={<Home></Home>}></Route>
                    <Route path="register" element={<Registration></Registration>}></Route>
                    <Route path="login" element={<Login></Login>}></Route>
                    <Route path="viewcustomers" element={<ViewCustomers></ViewCustomers>}></Route>
                    <Route path="delete" element={<DeleteCustomers></DeleteCustomers>}></Route>
                    <Route path="about" element={<Aboutus></Aboutus>}></Route>
                    <Route  path="imageinsert" element={<ImageAdd></ImageAdd>}></Route>
                </Routes>
            </div>
        </>
    )

}
export default DashBoard;
