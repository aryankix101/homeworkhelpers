
import React, { Component } from 'react';

class Header extends Component {
    state = {  }
    render() { 
        return (
            <header>
                    <body>
                        <style>{'body { background-color: #A8D0E6; }'}</style>
                            <div class="container">
                                <div class="col-lg-12">
                                    <h2 id="title" style={{textAlign: "center"}}>WE ARE HOMEWORK HELPERS</h2>
                                    <hr class="star-light"/>
                                    <p id="titletext">We are an organization that aims to provide educational assistance to students attending Title 1 schools.</p>
                                    <a href="https://drive.google.com/file/d/16xzAAp-xLIjVT-1qteEF6fEM7vX7x1M7/view" target="_blank" type="button" class="btn rounded-pill btn-lg" id="video">Video!</a>
                                    <a href="" type="button" class="btn rounded-pill btn-lg" id="getstarted">Get Started</a>
                                </div>
                            </div>
                    </body>
            </header>
          );
    }
}
 
export default Header;