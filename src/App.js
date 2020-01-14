import React from 'react';
//import './App.css';
import Menu from './components/Menu/menu.js'
import './components/Card/card.css'
import Kitchen from './pages/kitchen.js'
import Service from './pages/service.js'
import Delivery from './components/Delivery/delivery.js'
import Nav from './components/Nav/nav.js'
import Home from './components/Home/home.js'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact  path="/service" component={Service} />
        <Route exact path="/kitchen" component={Kitchen} />
        <Route exact path="/delivery" component={Delivery} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
