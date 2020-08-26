import React, { Component } from 'react';
import {FunctionComponent, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import Footer from './Footer.js'


class PathwayPage extends Component {
    state = {
        todos: []
      }
      componentDidMount() {
        fetch('/spreadsheet-data')
        .then(res => res.json())
        .then((data) => {
          this.setState({ todos: data })
          console.log(this.state.todos)
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
                                    {this.state.todos.map((todo) => (
                                        <p id="titletext">{todo.name}</p>
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