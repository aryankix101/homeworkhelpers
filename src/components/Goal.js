import React, { Component } from 'react';
import Projections from '../projections.webp'

class GoalsPage extends Component {
    state = {  }
    render() { 
        return (
            <section class="success" id="goals">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12 text-center">
                                    <h2 id="title">Our Goal</h2>
                                    <hr class="star-light"/>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                    <p>Since recognizing the success and impact of the original Homework Helpers program at Rocky Run Middle School, the Homework Helpers organization has been striving to expand this wonderful program across Fairfax County Public Schools and eventually to other regions of Virginia. Our primary goal is to provide educational aid to as many Title 1 students in need as possible.

<br/>Displayed below are our progress and projections:

</p>
                                    <img src={Projections}/>
                                </div>
                            </div>
                        </div>
            </section>
          );
    }
}
 
export default GoalsPage;