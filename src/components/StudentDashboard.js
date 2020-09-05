import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import Footer from './Footer.js'
import LoginForm from './Login.js'


const StudentDashboardPage = ({student_first_name, student_badge, student_completed_pathway}) =>  {
        return (
            <Zoom>
            <div>
            <p><h2>Hello {student_first_name}</h2></p>
            </div>
            </Zoom>
          );
}
 
export default StudentDashboardPage;