import React, { Component } from 'react';
import {FunctionComponent, useState, useEffect } from 'react';
import Footer from './Footer.js'
import Zoom from 'react-reveal/Zoom';

class PathwayPage extends Component {
    state = {
        student_data: []
      }
      componentDidMount() {
        fetch('/spreadsheet-data')
        .then(res => res.json())
        .then((data) => {
          this.setState({ student_data: data })
          console.log(this.state.student_data)
        })
        .catch(console.log)
      }

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
                                    {this.state.student_data.map((student) => (
                                        <p id="titletext">Hello {student.first_name}! You have completed the {student.completed_pathway}.<br/> Badges completed: {student.badge}.</p>
                                    ))}
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