import React from 'react';

class Underrated extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      food: [],
      food1: [],
      food2: [],
      food3: [],
      food4: []
    };
  }

  componentDidMount() {
      fetch('https://api.currentsapi.services/v1/latest-news?apiKey=ILOrXZ77NUMCwgnFltIXJbJ9GJ9XkS0HjzF-sreBrWOFD6kT&language=en')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            food: result.news[0].description,
            food1: result.news[1].description,
            food2: result.news[2].description,
            food3: result.news[3].description,
            food4: result.news[4].description,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
    render(){


      const { error, isLoaded, items } = this.state;
     if (error) {
       return <div>Error: {error.message}</div>;
     } else if (!isLoaded) {
       return <div>Loading...</div>;
     } else {
       return (
         <div style={{backgroundColor: "white"}}>
         <h1>The Most Criminally underrated Restaurants in Portland</h1>
         <p> By Colman Currie</p>
         <ul>
         <h2 style={{fontWeight: "bold"}}>1) Reel M Inn</h2><p>2430 SE Division St Open 10A-2:30A Daily</p>
          <h4> {this.state.food} </h4>
          <h2 style={{fontWeight: "bold"}}>2) Roscoes</h2><p>8105 SE Stark St Open 11A-2:30A Daily</p>
          <h4> {this.state.food1} </h4>
          <h2 style={{fontWeight: "bold"}}>3) Chameleon</h2><p>2000 NE 40th Ave Open 5P-10P Wed-Sat</p>
          <h4> {this.state.food2} </h4>
          <h2 style={{fontWeight: "bold"}}>4) Please Louise</h2><p>1505 NW 21st Ave Open 11A-10P Tue-Sat, 4P-10P Sun/Mon</p>
          <h4> {this.state.food3} </h4>
          <h2 style={{fontWeight: "bold"}}>5) The Waiting Room</h2><p>22327 NW Kearney St Open 4P-9P Tue-Sat</p>
          <h4> {this.state.food4} </h4>
         </ul>
         </div>
       );
     }
   }
 }

export default Underrated
