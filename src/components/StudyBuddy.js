import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Footer from './Footer.js'

class StudyBuddyPage extends Component {
    state = {  }
    render() { 
        return (
            <Fade top>
            <div>
            <header>
                    <body>
                        <style>{'body { background-color: #A8D0E6; }'}</style>
                            <div class="container">
                                <div class="col-lg-12">
                                    <h2 id="title" style={{textAlign: "center"}}>Study Buddy</h2>
                                    <hr class="star-light"/>
                                    <p id="titletext">The Homework Helpers Organization is currently partnered with Fairfax County's  Volunteer and Partner Services Program in the Study Buddy Program. The members from the Homework Helpers will tutor students that the Volunteer and Partner Servives Program will provide. We are looking to give back directly while we continue to setup Peer-Tutoring programs across the county.</p>
                                </div>
                            </div>
                    </body>
            </header>
            <Footer/>
            </div>
            </Fade>
          );
    }
}
 
export default StudyBuddyPage;