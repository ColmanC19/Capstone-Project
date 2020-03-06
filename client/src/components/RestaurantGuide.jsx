import React from 'react';
import { Redirect } from 'react-router-dom'



class RestaurantGuide extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      redirect: false,
      error: null,
      isLoaded: false,
    };
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirectKoreanFood = () => {
    if (this.state.redirect) {
      return <Redirect to='/KoreanFood' />
    }
  }
  renderRedirectTipping = () => {
    if (this.state.redirect) {
      return <Redirect to='/Tipping' />
    }
  }


  render() {
    const btnCSS = {
      display: "inline-flex",
      // padding: "50px",
      // margin: "20px",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "auto",
      color: "#353839",
      boxShadow: "15px 20px #888888"
    }
  return(
    <div>
    <div style={btnCSS}>
    <div>
    <p> Top Ten Criminally Underrated </p>
    <input type="image" id="myimage" alt="plated food" style={{height:"300px", width:"300px"}} src="https://cdn.vox-cdn.com/thumbor/E2tiOjzPxWR282Mu_kREU9gYvTs=/0x0:2700x1800/1820x1213/filters:focal(1134x684:1566x1116):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66406185/JannieHuang_3775.0.jpg" />
    </div>

    <div>
    <p> No Reservation? No Problem</p>
    <input type="image" id="myimage" alt="friends" style={{height:"300px", width:"300px"}} src="https://cdn.vox-cdn.com/thumbor/qsE6ss2yoVMDzl9um9VMtgOIHkg=/0x210:960x750/500x281/filters:format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66294489/Bao_Bao_pdx.0.jpg" />
    </div>
    <div>
    <p> Pod Wars: Diamonds in the Rough</p>
    <input type="image" id="myimage" alt="food cart" style={{height:"300px", width:"300px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTTIUoH_y-3_MD_dL-FPeZG_VLCgDz9VeSdKcMNgfv93rOgMbmC" />
    </div>
    </div>
    <h3 style={{padding: "20px", textAlign: "center"}}>Revisit our past articles below</h3>

    {this.renderRedirectKoreanFood()}
      <button onClick={this.setRedirect}>Move Over Beaverton: Where to find top Korean Food right in PDX</button>
    {this.renderRedirectTipping()}
      <button onClick={this.setRedirect}>Tipping: Is enough, enough?</button>


    <div style={{border: "solid", textAlign:"center", boxShadow: "15px 20px #888888", marginLeft:"auto", marginRight: "auto", borderRadius: "5%", display: "block"}}>
    <h1> THE FEED HEAT</h1>
    <p> Find out about all the places that fly under the radar now!</p>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLmPoDQxV5N-XhqEk0aT5XY3m_cIRD0XW467tcbBAfVPODLwAF" alt="flames"/>

    </div>
    </div>
    )

}
}


export default RestaurantGuide
