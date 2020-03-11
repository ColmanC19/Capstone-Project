import React from 'react';

function HomeBody(){
  const homebodyCSS = {
    backgroundColor: "white"
  }
  return(
    <div style={{marginTop: "100px", maxWidth: "85%"}}>
    <div style={homebodyCSS}>
    <h4 style={{backgroundColor: "white"}}>Welcome to FdR PDX! A site for folks looking for the lesser-known, equally as good spots in Portland. Whether you dislike lines, crowds or are just looking for new to you spots that might not get the press coverage it deserves, this is for you. Foodies Rejoice!</h4>
    <img src= "https://pbs.twimg.com/media/DY2bN3VWkAYBdXC.jpg" alt="gathering"/>


    </div>
    </div>
  )
}

export default HomeBody
