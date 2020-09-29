import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import Footer from './Footer.js'
import history from './History';
import StudentDashboardPage from './StudentDashboard.js';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: '',
          student_first_name: '',
          student_badge: '',
          student_completed_pathway : '',
          send: false,
          error: ''
        }
    
        this.onChange = this.onChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
      }
      
      onChange(event) {
        this.setState({value: event.target.value }, () => console.log(this.state.value))
      }
        
      handleSubmit(event) {
        var x = document.forms["signin"]["username"].value;
        if (x == "") {
        alert("Username must be filled out");
        return false;
        }
        event.preventDefault();
        fetch("/login_user", {
          method:"POST",
          cache: "no-cache",
          headers:{
              "content_type":"application/json",
          },
          body:JSON.stringify(this.state.value)
          }
      ).then(response => {
      return response.json()
    })
    .then(json => {
    this.setState({error: json.error}, () => console.log("Error: " + this.state.error))
    this.setState({student_first_name: json.first_name}, () => console.log("Data student name: " + this.state.student_first_name))
    this.setState({student_badge: json.badge}, () => console.log("Data student badge: " + this.state.student_badge))
    this.setState({student_completed_pathway: json.completed_pathway}, () => console.log("Data student pathway: " + this.state.student_completed_pathway))
    })
    console.log(this.state.error)
      }

      handleClick = () => {
        this.setState({send: true})
        console.log("Works")
        
    } 
    
    render() { 
        return (
            <Zoom>
            <div className="container" id="login">
            <body>
                <style>{'body { background-color: #A8D0E6; }'}</style>
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form name="signin" className="form-group" onSubmit={this.handleSubmit}>
                        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                        <div className="form-group">
                            <label>Username</label>
                            <input
                            type="text"
                            className="form-control"
                            name="username"
                            placeholder="Enter username"
                            value={this.state.value}
                            onChange={this.onChange}
                            />
                        </div>
                        <button onClick={this.handleClick} id="loginsubmit"
                            type="submit"
                            className="btn btn-lg btn-primary btn-block"
                        >
                          Sign In
                        </button>
                        </form>
                    </div>
                </div>

                {this.state.send==true && <StudentDashboardPage student_first_name={this.state.student_first_name} student_badge={this.state.student_badge} student_completed_pathway={this.state.student_completed_pathway} error={this.state.error} />}
                </body>
            </div>
            </Zoom>
          );
    }
}
 
export default LoginPage;