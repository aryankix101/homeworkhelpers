import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import ModelsPage from './Models.js'
import MissionPage from './Mission.js'
import GoalsPage from './Goal.js'
import StoryPage from './Story.js'
import ProgramPage from './Program.js'
import ContactPage from './Contact.js'
import Header from './Header.js'
import Footer from './Footer.js'

class HomePage extends Component {
    state = {  }
    render() { 
        return ( 
                <div>
                    <Fade left><Header/></Fade>
                    <Fade right><ModelsPage/></Fade>
                    <Fade left><MissionPage/></Fade>
                    <Fade right><GoalsPage/></Fade>
                    <Fade left><StoryPage/></Fade>
                    <Fade right><ProgramPage/></Fade>
                    <Fade right><ContactPage/></Fade>
                    <Footer/>
                </div>
        );
    }
}
 
export default HomePage;