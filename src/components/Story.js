
import React, { Component } from 'react';

class StoryPage extends Component {
    state = {  }
    render() { 
        return (
            <section class="notsuccess"  id="story">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12 text-center">
                                    <h2 id="title">Our Story</h2>
                                    <hr class="star-light"/>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                    <p>We founded the Homework Helpers Organization during January of 2014, as a group of thirty ambitious middle school students. With the help of trusted adults, we established a club with the intent of providing educational aid to younger students in need. We initially raised awareness of the club in a local Title 1 school, Brookfield Elementary.The program quickly gained interest amongst both potential tutors and eager tutees, and was extremely successful. In fact, during March of 2015, our organization was named the FCPS MentorWorks program of the month. Now, three years later, as the first group of tutors, we have decided to broaden our initial goal. We are currently expanding this program to schools across Fairfax County.</p>
                                </div>
                            </div>
                        </div>
            </section>
          );
    }
}
 
export default StoryPage;