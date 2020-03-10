import React, { Component } from 'react';
import logo from ".././logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import { Redirect } from 'react-router-dom';
import { Grid } from 'react-bootstrap';
import './Underrated.css';
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";



class RestaurantGuide extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      redirect: false,
      redirecttipping: false,
      redirectpod: false,
      redirectrez: false,
      redirectunderrated: false,
      redirectfeedr: false,
      error: null,
      isLoaded: false,
      comments: [],
      loading: false
    };
    this.addComment = this.addComment.bind(this);
  };


  componentDidMount() {
    // loading
    this.setState({ loading: true });

    // get all the comments
    fetch("http://localhost:7777")
      .then(res => res.json())
      .then(res => {
        this.setState({
          comments: res,
          loading: false
        });
      })
      .catch(err => {
        this.setState({ loading: false });
      });
  }

  /**
   * Add new comment
   * @param {Object} comment
   */
  addComment(comment) {
    this.setState({
      loading: false,
      comments: [comment, ...this.state.comments]
    });
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/KoreanFood' />
    }
  }
  // Tipping-----------------------------------------------
  setRedirectTipping = () => {
    this.setState({
      redirecttipping: true
    })
  }

  renderRedirectTipping = () => {
    if (this.state.redirecttipping) {
      return <Redirect to='/Tipping' />
    }
  }
  // POD--------------------------------------------
  setRedirectPod = () => {
    this.setState({
      redirectpod: true
    })
  }

  renderRedirectPod = () => {
    if (this.state.redirectpod) {
      return <Redirect to='/PodCart' />
    }
  }
  // REZZIES--------------------------------------------
  setRedirectRez = () => {
    this.setState({
      redirectrez: true
    })
  }

  renderRedirectRez = () => {
    if (this.state.redirectrez) {
      return <Redirect to='/Rez' />
    }
  }
  // Underrated--------------------------------------------
  setRedirectUnderrated = () => {
    this.setState({
      redirectunderrated: true
    })
  }

  renderRedirectUnderrated = () => {
    if (this.state.redirectunderrated) {
      return <Redirect to='/Underrated' />
    }
  }
  // FdR Heat Map--------------------------------------------
  setRedirectFeedr = () => {
    this.setState({
      redirectfeedr: true
    })
  }

  renderRedirectFeedr = () => {
    if (this.state.redirectfeedr) {
      return <Redirect to='/FeedHeat' />
    }
  }



  render() {
    const loadingSpin = this.state.loading ? "App-logo Spin" : "App-logo";
    const btnCSS = {
      display: "inline-flex",
      // padding: "50px",
      // margin: "20px",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "100px",
      color: "#353839",
      textAlign: "center",
      boxShadow: "5px 10px #888888",
      marginLeft:"auto",
      marginRight: "auto",
      borderRadius: "5%",


    }
  return(
    <div>
    <Grid>
    <div style={{textAlign:"center", marginLeft:"auto", marginRight: "auto", borderRadius: "5%", display: "block"}}>
    <div>
  {this.renderRedirectFeedr()}
    <button style={{color:"white", backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLmPoDQxV5N-XhqEk0aT5XY3m_cIRD0XW467tcbBAfVPODLwAF)"}} onClick={this.setRedirectFeedr}><h1 style={{fontWeight:"bold"}}> THE FEED HEAT</h1>
     <h3 style={{fontWeight:"bolder"}}>Find out about all the places that fly under the radar now!</h3>
    </button>
    </div>

    </div>

    <div style={btnCSS}>
    <div>
    {this.renderRedirectUnderrated()}
      <button style={{backgroundColor: "#8BA8B7", border: "#8BA8B7"}} onClick={this.setRedirectUnderrated}>Top Ten Criminally Underrated</button>
    <img id="myimage" alt="plated food" style={{height:"300px", width:"300px"}} src="https://cdn.vox-cdn.com/thumbor/E2tiOjzPxWR282Mu_kREU9gYvTs=/0x0:2700x1800/1820x1213/filters:focal(1134x684:1566x1116):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66406185/JannieHuang_3775.0.jpg" />
    </div>

    <div>
    {this.renderRedirectRez()}
      <button style={{backgroundColor: "#8BA8B7", border: "#8BA8B7"}} onClick={this.setRedirectRez}>No Reservation? No Problem</button>
    <img id="myimage" alt="friends" style={{height:"300px", width:"300px"}} src="https://cdn.vox-cdn.com/thumbor/qsE6ss2yoVMDzl9um9VMtgOIHkg=/0x210:960x750/500x281/filters:format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66294489/Bao_Bao_pdx.0.jpg" />
    </div>
    <div>
    {this.renderRedirectPod()}
      <button style={{backgroundColor: "#8BA8B7", border: "#8BA8B7"}} onClick={this.setRedirectPod}>Pod Wars: Diamonds in the Rough</button>
    <img id="myimage" alt="food cart" style={{height:"300px", width:"300px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTTIUoH_y-3_MD_dL-FPeZG_VLCgDz9VeSdKcMNgfv93rOgMbmC" />
    </div>
    </div>
    <h3 style={{padding: "20px", textAlign: "center"}}>Revisit our past articles below</h3>
    <div>
    {this.renderRedirect()}
      <button style={{border: "#8BA8B7"}} onClick={this.setRedirect}><strong>Move Over Beaverton: Where to find top Korean Food right in PDX</strong> By: Colman Currie</button>
      </div>
      <div>
    {this.renderRedirectTipping()}
      <button style={{border: "#8BA8B7"}} onClick={this.setRedirectTipping}><strong>Tipping: Is enough, enough?</strong> By: Colman Currie</button>
      </div>


    </Grid>
    <div className="App container bg-light shadow">
      <header className="App-header">

        <h1 className="App-title">
          React Comments
          <span className="px-2" role="img" aria-label="Chat">
            💬
          </span>
        </h1>
        <p>
          Checkout the tutorial on{" "}
          <a className="text-light" href="https://qcode.in">
            QCode.in
          </a>
        </p>
      </header>

      <div className="row">
        <div className="col-4  pt-3 border-right">
          <h6>Say something about React</h6>
          <CommentForm addComment={this.addComment} />
        </div>
        <div className="col-8  pt-3 bg-white">
          <CommentList
            loading={this.state.loading}
            comments={this.state.comments}
          />
        </div>
      </div>
    </div>

    </div>
    )

}
}


export default RestaurantGuide
