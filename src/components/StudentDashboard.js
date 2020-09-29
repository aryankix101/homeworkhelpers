import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import Footer from './Footer.js'
import LoginForm from './Login.js'
import anatomy_badge from '../badges/anatomy_badge.png'
import app_dev_badge from '../badges/app_dev_badge.png'
import astronomy_badge from '../badges/astronomy_badge.png'
import CAD_badge from '../badges/CAD_badge.png'
import chemistry_badge from '../badges/chemistry_badge.png'
import earth_sciences_badge from '../badges/earth_sciences_badge.png'
import ecology_badge from '../badges/ecology_badge.png'
import energy_systems_badge from '../badges/energy_systems_badge.png'
import genetics_badge from '../badges/genetics_badge.png'
import google_tools_badge from '../badges/google_tools_badge.png'
import humans_and_the_earth_badge from '../badges/humans_and_the_earth_badge.png'
import java_advanced_badge from '../badges/java_advanced_badge.png'
import java_basic_badge from '../badges/java_basic_badge.png'
import python_advanced_badge from '../badges/python_advanced_badge.png'
import python_basic_badge from '../badges/python_basic_badge.png'
import scratch_badge from '../badges/scratch_badge.png'
import video_production_badge from '../badges/video_production_badge.png'
import web_dev_badge from '../badges/web_dev_badge.png'

const StudentDashboardPage = ({student_first_name, student_badge, student_completed_pathway, error}) =>  {
        let str_badge = student_badge;
        let img = ''
        function refreshPage() {
          window.location.reload(false);
        }
        if (typeof error =='undefined' || error=='') {  
        if (student_badge=="CAD_badge") {
          img = CAD_badge;
        }
        if (student_badge=="anatomy_badge") {
          img = anatomy_badge;
        }
        if (student_badge=="app_dev_badge") {
          img = app_dev_badge;
        }
        if (student_badge=="astronomy_badge") {
          img = astronomy_badge;
        }
        if (student_badge=="chemistry_badge") {
          img = chemistry_badge;
        }
        if (student_badge=="earth_sciences_badge") {
          img = earth_sciences_badge;
        }
        if (student_badge=="ecology_badge") {
          img = ecology_badge;
        }
        if (student_badge=="energy_systems_badge") {
          img = energy_systems_badge;
        }
        if (student_badge=="genetics_badge") {
          img = genetics_badge;
        }
        if (student_badge=="google_tools_badge") {
          img = google_tools_badge;
        }
        if (student_badge=="humans_and_the_earth_badge") {
          img = humans_and_the_earth_badge;
        }
        if (student_badge=="java_advanced_badge") {
          img = java_advanced_badge;
        }
        if (student_badge=="java_basic_badge") {
          img = java_basic_badge;
        }
        if (student_badge=="python_advanced_badge") {
          img = python_advanced_badge;
        }
        if (student_badge=="python_basic_badge") {
          img = python_basic_badge;
        }
        if (student_badge=="scratch_badge") {
          img = scratch_badge;
        }
        if (student_badge=="video_production_badge") {
          img = video_production_badge;
        }
        if (student_badge=="web_dev_badge") {
          img = web_dev_badge;
        }
        console.log("Testing: " + str_badge)
        str_badge = str_badge.replaceAll("_", " ");
        return (
          <Zoom>
          <div>
          <p><h1>Hello {student_first_name}!</h1></p>
          <p><h2>You have completed the following badges:</h2></p>
          <img src = {img}width="200" heigh="60"/>
          <p id="badge_text">{str_badge}</p>
          <p><h2>Congratulations! You have finished the {student_completed_pathway}!</h2></p>
          </div>
          </Zoom>
        );
        } 
        else {
          return (
          <div>
          <div class="alert alert-danger" role="alert">
           Error.
          </div>
          <div>
          {refreshPage()}
          </div>
          </div>
          )
        }
        
}
 
export default StudentDashboardPage;