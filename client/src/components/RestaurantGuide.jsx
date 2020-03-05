import React from 'react';


class RestaurantGuide extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
    };
  }


  render() {
    const btnCSS = {
      display: "inline-flex",
      border: "solid",
      padding: "50px",
      margin: "20px",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "auto",
      borderRadius: "5%",
      color: "#353839",
      boxShadow: "15px 20px #888888"
    }
  return(
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
    )

}
}


export default RestaurantGuide
