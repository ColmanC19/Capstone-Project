import React from "react";
import { Link } from 'react-router-dom';


function Header(){
  const handleClick = () => {
   // we'll do handle the logout functionality here
  }
  const headerCSS = {
    fontSize: "70px",
    textAlign: "center",
    color: "#353839",
    textDecoration: "underline",
    maxHeight: "125px"



}


 return (

   

   <div style={{maxHeight: "125px"}}>
    <Link style={{color: "#353839"}} to="/homebody"> Home| </Link><Link style={{color: "#353839"}} to="/restaurantguide"> Restaurant Guide </Link>
    <h1 style={headerCSS}>FdR Pdx</h1>
    </div>





 );
}
export default Header;
