import React, { Component } from "react";
//import logo from './logo.svg';
import './App.css';
import DashboardLayout from '../src/layouts/DashboardLayout';
import AuthLayout from '../src/layouts/AuthLayout';
import auth from "./auth/auth-helper";
import LoginComponent from './auth/LoginComponent';

class App extends Component {
  constructor(props){
    super(props);
     this.state = {
      redirectToLogin:false
    }
  }
  componentDidMount = () => {
    const jwt = auth.isAuthenticated();
    if (jwt.token == null || typeof jwt.token == undefined) {
      this.setState({ redirectToLogin: true });
    }
  }
 render(){
  
  return (
    <div className="App">
        
        {  
                    this.state.redirectToLogin == false ? (
                        <DashboardLayout />
                    ):(
                        <AuthLayout />
                    )
                }
      </div>
    
  );
}
}

export default App;
