import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import auth from "./../auth/auth-helper";
class EditProfile extends Component {
  constructor(props) {
    super(props);
    //let loggedin = true;
    this.state = {
      loggedin: "",
      redirectToSignin: false
    };
  }

  logout = () => {
    auth.signout();
    this.setState({ redirectToSignin: true });
  };
  render() {
    const jwt = auth.isAuthenticated();
    if (jwt.token == null || typeof jwt.token == undefined) {
      this.setState({ redirectToSignin: true });
    }
    const redirectToSignin = this.state.redirectToSignin;

    if (redirectToSignin == true) {
      return <Redirect to="/login" />;
    }

    return (
      <h1>
        <a href="#" color="inherit" onClick={this.logout}>
          Sign out
        </a>
        EDIT
      </h1>
    );
  }
}

export default EditProfile;
