import React from 'react';

function RestaurantGuide(){
  const guideCSS = {
    display: "inline-flex",
    border: "solid black",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    marginBottom: "auto",
    borderRadius: "25px",
    boxShadow: "15px 20px #888888"
  }
  return(
    <div style={guideCSS}>
    <h2>Top Ten Group Hangout Spots| </h2>
    <h2>Top Ten Take-Out Spots</h2>
    </div>
    )
}

export default RestaurantGuide
