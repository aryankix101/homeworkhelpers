import React, { Component } from 'react';
import {FunctionComponent, useState, useEffect } from 'react';
import Footer from './Footer.js'


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
                <div>
                    <header>
                        <body>
                            <style>{'body { background-color: #A8D0E6; }'}</style>
                                <div class="container">
                                    <div class="col-lg-12">
                                    {this.state.student_data.map((student) => (
                                        <p id="titletext">Hello {student.first_name}! You have completed the {student.completed_pathway}.<br/> Badges completed: {student.badge}.</p>
                                    ))}
                                    </div>
                                </div>
                        </body>
                    </header>
                    <Footer/>
                </div>
        );
    }
}

export default PathwayPage; 