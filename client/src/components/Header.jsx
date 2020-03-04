import React from "react";
import { Link } from 'react-router-dom';


function Header(){



 return (

   <div>
    <Link to="/homebody"> Home </Link><Link to="/"> Back </Link><Link to="/restaurantguide"> Restaurant Guide </Link>


   </div>

 );
}
export default Header;
