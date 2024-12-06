import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

  const [btnLoginLoogout, setBtnLoginLoogout] = useState("login");

    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL}></img>
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/Contact"}>Contact Us</Link></li>
            <li><Link to={"/About"}>About Us</Link></li>
            <li><Link to={"/"}>Cart</Link></li>
            <button className="login" onClick={() => { btnLoginLoogout==="Login"? setBtnLoginLoogout("Logout"):setBtnLoginLoogout("Login"); }}> 
              {btnLoginLoogout}
            </button>
          </ul>
        </div>
      </div>
    )
  }
  

  export default Header;