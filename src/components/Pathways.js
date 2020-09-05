import React, { Component } from 'react';
import {FunctionComponent, useState, useEffect } from 'react';
import Footer from './Footer.js'
import Zoom from 'react-reveal/Zoom';

class PathwayPage extends Component {
      render() { 
        return ( 
            <Zoom>
                <div>
                    <header>
                        <body>
                            <style>{'body { background-color: #A8D0E6; }'}</style>
                                <div class="container">
                                    <div class="col-lg-12">
                                    <h2 id="title" style={{textAlign: "center"}}>Steam Pathways</h2>
                                    <hr class="star-light"/>
                                    <p>STEAM Pathways is a fun and exciting virtual adventure led by passionate high school students with prior teaching experiences. We teach subjects in STEAM including science, tech, english, art, and math in a unique way over a virtual platform. Our program provides weekly enrichment packets which include short and engaging activities with limited materials that cater to the imagination of our students. The tutoring sessions are based on our thorough curriculum which is tailored to each student’s individual pace. Students will earn a badge for each lesson they complete and gain a certificate displaying their achievements. The goal of STEAM Pathways is to create an inclusive virtual environment for students of all ages and levels to foster a love for learning!</p>
                                    <p><li>Fun and exciting virtual experience</li><li>Learn skills in STEAM subjects (Science, Technology, English, Art, and Math)</li><li>Bi-weekly enrichment packets to boost your skills</li><li>Learn at a personalized and individual pace from experienced mentors</li><li>Receive badges and awards for your achievements</li><li>Students can choose to learn any subjects(s) they want</li><li>Available to ALL ages and levels!</li></p>
                                    <p><br/>Sign up now at <i>tinyurl.com/steam-pathways</i>. We hope you will join us to explore the world of learning with STEAM Pathways!</p>
                                    <p>If you are a student, please click <a href="/login">here</a> to login</p>
                                    </div>
                                </div>
                        </body>
                    </header>
                    <Footer/>
                </div>
            </Zoom>
        );
    }
}

export default PathwayPage; 