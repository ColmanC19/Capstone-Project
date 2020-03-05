import React from "react";
import { Link } from 'react-router-dom';
import Login from "./Login.jsx";


function Header(){
const headerCSS = {
  fontSize: "70px",
  textAlign: "center",
  color: "#353839",
  textDecoration: "underline"
}


 return (


   <div>
   <div>
    <Link style={{color: "#353839"}} to="/homebody"> Home| </Link><Link style={{color: "#353839"}} to="/"> Back| </Link><Link style={{color: "#353839"}} to="/restaurantguide"> Restaurant Guide </Link>
    <h1 style={headerCSS}>FeedR Pdx</h1>
    <Login />
   </div>
   </div>


 );
}
export default Header;
