import React, { Component } from 'react';
import Logo from '../logo_1_5.png'

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark info-color fixed-top" style={{backgroundColor: "#374785"}}>
                    <div class="container">
                        <a class="navbar-brand" href="/">
                            <img src={Logo}/>
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                            <a class="nav-link" href="/" id="navbartext">Home
                                    <span class="sr-only">(current)</span>
                                </a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#about" id="navbartext">Models</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#services" id="navbartext">Our Mission</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#goals" id="navbartext">Goals</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#story" id="navbartext">Our Story</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#program" id="navbartext">How are We Different?</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="/steam-pathways" id="navbartext">Steam Pathways</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="/study-buddy" id="navbartext">Study Buddy</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#contact" id="navbartext">Contact</a>
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