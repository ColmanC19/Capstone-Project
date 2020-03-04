import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import HomeBody from './components/HomeBody.jsx';
import RestaurantGuide from './components/RestaurantGuide.jsx';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    < Header />
    <Switch>
    <Route path='/homeBody' component={HomeBody} />
    <Route path='/' component={HomeBody} />
    <Route path='/restaurantguide' component={RestaurantGuide} />
    </Switch>
    </div>
  );
}

export default App;
