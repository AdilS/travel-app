import React from "react";
import LoginComponent from "../auth/LoginComponent";
import SignupComponent from "../users/SignupComponent";
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import NotFound from "../users/NotFound";
class AuthLayout extends React.Component {
  render() {
    return (
      <div>

          <Router>
              <Switch>
              <Route path='/login' component={LoginComponent} />    
              <Route path='/signup' component={SignupComponent} />  
              <Route path="" component={NotFound} />
              </Switch>
          </Router>
        </div>
    );
  }
}

export default AuthLayout;
