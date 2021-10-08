import './App.css';
import Home from './components/home'
import {Switch , Route } from 'react-router-dom'
import React from 'react';


function App() {

  document.body.style = 'background: rgb(31, 41, 55);padding:none ; height:100%;'
  document.querySelector("html").style = 'background: rgb(31, 41, 55);padding:none ; height:100%;'
  return (
    <React.Fragment>

    <Switch>
      <Route path="/" component={Home}></Route>
      <Route path="/about" component={Home}></Route>
      <Route path="/projects" component={Home}></Route>
      <Route path="/contact" component={Home}></Route>
    </Switch>
    </React.Fragment>
  );
}

export default App;
