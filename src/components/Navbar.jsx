import "./css/navbar.css";
import { Link } from "react-router-dom";
const Navbar = ()=>{
    return(
        <>
        <div className="navbar_div">
            <div className="search"><div ><img src="../search-normal.png" alt="search" /></div><input type="text" className="srch" placeholder="   Search" /></div>
            <Link to="/"><div><img src="../user.png" alt="user" className="user"/></div></Link>
        </div>
        </>
    )

}

export default Navbar;