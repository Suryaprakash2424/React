import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

  const [btnLoginLoogout, setBtnLoginLoogout] = useState("login");
  const onlineStatus = useOnlineStatus();

    return (
      <div className="header">
        <div className="logo-container">
          <Link to={"/"}>
            <img className="logo" src={LOGO_URL} ></img>
          </Link>
        </div>
        <div className="nav-items">
          <ul>
            <li className="online">onlineStatus:{onlineStatus ? "🟢" : "🔴" }</li>
            <li className="navitem"><Link to={"/"}>Home</Link></li>
            <li className="navitem"><Link to={"/Contact"}>Contact Us</Link></li>
            <li className="navitem"><Link to={"/About"}>About Us</Link></li>
            <li className="navitem"><Link to={"/Grocery"}>Grocery</Link></li>
            <li className="navitem">Cart</li>
            <button className="login" onClick={() => { btnLoginLoogout==="Login"? setBtnLoginLoogout("Logout"):setBtnLoginLoogout("Login"); }}> 
              {btnLoginLoogout}
            </button>
          </ul>
        </div>
      </div>
    )
  }
  

  export default Header;