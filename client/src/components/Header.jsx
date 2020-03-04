import React from "react";
import { Link } from 'react-router-dom';


function Header(){



 return (

   <div>
   <h1>FeedR Pdx</h1>
    <Link to="/homebody"> Home </Link><Link to="/"> Back </Link><Link to="/restaurantguide"> Restaurant Guide </Link>


   </div>

 );
}
export default Header;
