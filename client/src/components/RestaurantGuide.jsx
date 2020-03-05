import React from 'react';

function RestaurantGuide(){
  const btnCSS = {
    display: "inline-block",
    border: "solid black",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    marginBottom: "auto",
    borderRadius: "25px",
    color: "#353839",
    boxShadow: "15px 20px #888888"
  }

  return(
    <div>
    <button type="submit">Top Ten Group Hangout Spots| </button>
    <button type="submit">Top Ten Take-Out Spots</button>
    </div>
    )
}

export default RestaurantGuide
