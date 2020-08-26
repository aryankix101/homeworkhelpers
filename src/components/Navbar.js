import React, { Component } from 'react';

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark info-color fixed-top" style={{backgroundColor: "#374785"}}>
                    <div class="container">
                        <a class="navbar-brand" href="/">
                            <strong>The Homework Helpers Organization</strong>
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                            <a class="nav-link" href="/"><strong>Home</strong>
                                    <span class="sr-only">(current)</span>
                                </a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#about"><strong>Models</strong></a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#services"><strong>Our Mission</strong></a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#goals"><strong>Goals</strong></a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#story"><strong>Our Story</strong></a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#program"><strong>How are We Different?</strong></a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#contact"><strong>Contact</strong></a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#"><strong>Login</strong></a>
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