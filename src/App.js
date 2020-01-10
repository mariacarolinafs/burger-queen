import React from 'react';
//import './App.css';
import Menu from './components/Menu/menu.js'
import './components/Card/card.css'
import Kitchen from './pages/kitchen.js'
import Service from './pages/service.js'
import Nav from './components/Nav/nav.js'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact  path="/service" component={Service} />
        <Route exact path="/kitchen" component={Kitchen} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
