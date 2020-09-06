import React, { Component } from 'react';

class Header extends Component {
    state = {  }
    render() { 
        return (
            <header>
                    <body>
                        <div id="background_image">
                            <div class="container">
                                <div class="col-lg-12">
                                    <h2 id="title" style={{textAlign: "center"}}>WE ARE HOMEWORK HELPERS</h2>
                                    <hr class="star-light"/>
                                    <p id="titletext">We are an organization that aims to provide educational assistance to students attending Title 1 schools.</p>
                                    <a href="https://www.youtube.com/watch?v=UJXNMVRarQ0&feature=youtu.be" target="_blank" type="button" class="btn rounded-pill btn-lg" id="video">Video!</a>
                                    <a href="/steam-pathways" type="button" class="btn rounded-pill btn-lg" id="getstarted">Check out our new virtual program!</a>
                                </div>
                            </div>
                        </div>
                    </body>
            </header>
          );
    }
}
 
export default Header;