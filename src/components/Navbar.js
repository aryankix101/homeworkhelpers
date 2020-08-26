import React, { Component } from 'react';

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark info-color fixed-top" style={{backgroundColor: "#374785"}}>
                    <div class="container">
                        <a class="navbar-brand" href="/">
                            The Homework Helpers Organization
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                            <a class="nav-link" href="/">Home
                                    <span class="sr-only">(current)</span>
                                </a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#about">Models</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#services">Our Mission</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#goals">Goals</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#story">Our Story</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#program">How are We Different?</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#contact">Contact</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">Login</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
 
export default Navbar;