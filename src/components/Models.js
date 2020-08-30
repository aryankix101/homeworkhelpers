import React, { Component } from 'react';

class ModelsPage extends Component {
    state = {  }
    render() { 
        return (
            <section class="success" id="about">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12 text-center">
                                    <h2 id="title">Models we offer</h2>
                                    <hr class="star-light"/>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-4">
                                    <p><h2>After School</h2>
In this model, the middle school tutors convene at a known location in the evenings around 6:15 pm. Middle school tutors and tutees must find their own transportation to the learning site. Typically, at least 3  volunteers are needed to oversee every 50 students.
<br/><br/>
Currently implemented in:<br/>

<i>Rocky Run Middle School</i><br/>

(Catering to five local elementary schools)</p>
                                </div>
                                <div class="col-lg-4">
                                    <p><h2>Teacher Helper</h2>
As our most popular Model, the Teacher Helper Model allows middle school students to go to elementary schools and assist teachers. Because middle schools typically end at least an hour before elementary schools, tutors are able to join elementary school teachers for the last class period as teacher aides. This model especially supports under served schools or schools without supportive PTA. Transportation is provided through after school or parent volunteers.
<br/><br/>
Currently implemented between:<br/>

<i>Herndon Middle and Elementary Schools</i></p>
                                </div>
                                <div class="col-lg-4">
                                    <p><h2>SACC</h2>The SACC Model takes place directly after elementary school as part of the school's School Age Child Care Program. Parent or after school volunteers are needed to transport tutors to the elementary school SACC. <br/><br/> Currently implemented in:<br/>

<i>Brookfield Elementary School</i></p>
                                </div>
                            </div>
                        </div>
            </section>
          );
    }
}
 
export default ModelsPage;