import React from 'react';
//import './App.css';
import Menu from './components/Menu/menu.js'
import './components/Card/card.css'
import Kitchen from './pages/kitchen.js'
import Service from './pages/service.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
  <Menu />
  );
}

export default App;
