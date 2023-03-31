import { Route,Routes,NavLink } from "react-router-dom";
import Home from "./Home";
import Registration from "./Registration";
import Login from "./Login";
import ViewCustomers from "./ViewCustomer";
import DeleteCustomers from "./DeleteCustomers";
import Aboutus from "./Aboutus";
const DashBoard=()=>{
    return(
        <>
            <div className="container mt-5">
                <center>
                    <NavLink to="/home" style={{marginRight:150}}>Home</NavLink>
                    <NavLink to="/register" style={{marginRight:150}}>Register</NavLink>
                    <NavLink to="/login" style={{marginRight:150}}>Login</NavLink>
                    <NavLink to="/viewcustomers" style={{marginRight:150}}>ViewCustomer</NavLink>
                    <NavLink to="/delete" style={{marginRight:150}}>DeleteCustomers</NavLink>
                    <NavLink to="/about" style={{marginRight:100}}>About Us</NavLink>
                </center>
                <br></br><br></br>
                <Routes>
                    <Route path="home" element={<Home></Home>}></Route>
                    <Route path="register" element={<Registration></Registration>}></Route>
                    <Route path="login" element={<Login></Login>}></Route>
                    <Route path="viewcustomers" element={<ViewCustomers></ViewCustomers>}></Route>
                    <Route path="delete" element={<DeleteCustomers></DeleteCustomers>}></Route>
                    <Route path="about" element={<Aboutus></Aboutus>}></Route>
                </Routes>
            </div>
        </>
    )

}
export default DashBoard;
