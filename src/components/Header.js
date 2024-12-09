import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

  const [btnLoginLoogout, setBtnLoginLoogout] = useState("login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

    return (
      <div className="flex justify-between bg-amber-200 shadow-lg">
        <div className="logo-container">
          <Link to={"/"}>
            <img className="w-40" src={LOGO_URL} ></img>
          </Link>
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4 ">
            <li className="px-4">onlineStatus:{onlineStatus ? "🟢" : "🔴" }</li>
            <li className="px-4"><Link to={"/"}>Home</Link></li>
            <li className="px-4"><Link to={"/Contact"}>Contact Us</Link></li>
            <li className="px-4"><Link to={"/About"}>About Us</Link></li>
            <li className="px-4"><Link to={"/Grocery"}>Grocery</Link></li>
            <li className="px-4"><Link to={"/Cart"}> Cart:({ cartItems.length} Items)</Link></li>
            <button className="px-4 bg-orange-300 rounded-full ... "
              onClick={() => {
                btnLoginLoogout === "Login" ?
                  setBtnLoginLoogout("Logout") :
                  setBtnLoginLoogout("Login");
              }}> 
              {btnLoginLoogout}
            </button>
            <li className="px-4">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    )
  }
  

  export default Header;