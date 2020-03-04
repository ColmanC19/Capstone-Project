import React from "react";
import { Link } from 'react-router-dom';


function Header(){
const headerCSS = {
  fontSize: "70px",
  textAlign: "center"
}


 return (

   <div>
    <Link to="/homebody"> Home| </Link><Link to="/"> Back| </Link><Link to="/restaurantguide"> Restaurant Guide| </Link>
    <h1 style={headerCSS}>FeedR Pdx</h1>


   </div>

 );
}
export default Header;
