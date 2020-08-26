import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar.js'
import HomePage from './components/Home.js'
import Slide from 'react-reveal/Slide';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Slide top big>
        <Navbar />
      </Slide>
        <Switch>
            <Route exact path="/" component={HomePage}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;