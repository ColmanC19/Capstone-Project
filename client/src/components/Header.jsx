import React from "react";
import { Link } from 'react-router-dom';


function Header(){



 return (

   <div>
    <Link to="/homebody"> Home </Link><Link to="/"> Back </Link><Link to="/restaurantGuide"> Restaurant Guide </Link>


   </div>

 );
}
export default Header;
