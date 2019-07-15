import React, { Component } from 'react';
//import JPG1 from "../assets/images/avatar/1.jpg";
import '../assets/css/common.css';
class LoginComponent extends Component {
    state = { users: [] }
    
    render() {
        return (
            <React.Fragment>
                <div className="login">
                    <input type="text" placeholder="Username" id="username" />
                    <input type="password" placeholder="password" id="password" />
                    <a href="/" className="forgot">forgot password?</a>
                    <input type="submit" value="Sign In" />
                </div>
                <div className="shadow"></div>
            </React.Fragment>
        );
    }
}
export default LoginComponent;