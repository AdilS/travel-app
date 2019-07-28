import React from "react";
import LoginComponent from "../auth/LoginComponent";
import SignupComponent from "../users/SignupComponent";
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
//import PrivateRoute from 'react-private-route';
class AuthLayout extends React.Component {
  render() {
    return (
      <div>

          <Router>
              <Switch>
              <Route path='/login' component={LoginComponent} />      
              </Switch>
            
          </Router>
        </div>
    );
  }
}

export default AuthLayout;
