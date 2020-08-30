import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar.js'
import HomePage from './components/Home.js'
import PathwayPage from './components/Pathways.js'
import StudyBuddyPage from './components/StudyBuddy.js'
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
            <Route exact path="/steam-pathways" component={PathwayPage}/>
            <Route exact path="/study-buddy" component={StudyBuddyPage}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;