import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import HomeBody from './components/HomeBody.jsx';
import RestaurantGuide from './components/RestaurantGuide.jsx';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login.jsx';

function App() {
  return (
    <div>
    <div className="App">
    < Header />
    <Switch>
    <Route path='/homeBody' component={HomeBody} />
    <Route exact path='/' component={HomeBody} />
    <Route path='/restaurantguide' component={RestaurantGuide} />
    <Route path="/login"  component={Login} />
    </Switch>
    </div>
    </div>
  );
}

export default App;
