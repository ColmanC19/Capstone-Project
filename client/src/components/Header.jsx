import React from "react";
import { Link } from 'react-router-dom';


function Header(){
const headerCSS = {
  fontSize: "70px",
  textAlign: "center",
  color: "#353839",
}


 return (

   <div>
    <Link style={{color: "#353839"}} to="/homebody"> Home| </Link><Link style={{color: "#353839"}} to="/"> Back| </Link><Link style={{color: "#353839"}} to="/restaurantguide"> Restaurant Guide </Link>
    <h1 style={headerCSS}>FeedR Pdx</h1>


   </div>

 );
}
export default Header;
