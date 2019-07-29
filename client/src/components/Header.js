import React, { Component } from "react";
import "../assets/css/cs-skin-elastic.css";
import "../assets/css/style.css";
import logo from "../assets/images/logo.png";
import logo2 from "../assets/images/logo2.png";
import ADMIN from "../assets/images/admin.jpg";
import JPG1 from "../assets/images/avatar/1.jpg";
import JPG2 from "../assets/images/avatar/2.jpg";
import JPG3 from "../assets/images/avatar/3.jpg";
import JPG4 from "../assets/images/avatar/4.jpg";
//import JPG5 from "../assets/images/avatar/5.jpg";
import auth from "./../auth/auth-helper";
//import {Redirect} from 'react-router-dom';
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
        redirectToSignin: false
    };
  }
  handleLogout = () => {
    auth.signout();
   // this.setState({ redirectToSignin: true });
  };
  render() {

    return (
      <header id="header" className="header">
        <div className="top-left">
          <div className="navbar-header">
            <a className="navbar-brand" href="./">
              <img src={logo} alt="Logo" />
            </a>
            <a className="navbar-brand hidden" href="./">
              <img src={logo2} alt="Logo" />
            </a>
            <a id="menuToggle" className="menutoggle" href="./">
              <i className="fa fa-bars" />
            </a>
          </div>
        </div>
        <div className="top-right">
          <div className="header-menu">
            <div className="header-left">
              <button className="search-trigger">
                <i className="fa fa-search" />
              </button>
              <div className="form-inline">
                <form className="search-form">
                  <input
                    className="form-control mr-sm-2"
                    type="text"
                    placeholder="Search ..."
                    aria-label="Search"
                  />
                  <button className="search-close" type="submit">
                    <i className="fa fa-close" />
                  </button>
                </form>
              </div>

              <div className="dropdown for-notification">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="notification"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fa fa-bell" />
                  <span className="count bg-danger">3</span>
                </button>
                <div className="dropdown-menu" aria-labelledby="notification">
                  <p className="red">You have 3 Notification</p>
                  <a className="dropdown-item media" href="./">
                    <i className="fa fa-check" />
                    <p>Server #1 overloaded.</p>
                  </a>
                  <a className="dropdown-item media" href="./">
                    <i className="fa fa-info" />
                    <p>Server #2 overloaded.</p>
                  </a>
                  <a className="dropdown-item media" href="./">
                    <i className="fa fa-warning" />
                    <p>Server #3 overloaded.</p>
                  </a>
                </div>
              </div>

              <div className="dropdown for-message">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="message"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fa fa-envelope" />
                  <span className="count bg-primary">4</span>
                </button>
                <div className="dropdown-menu" aria-labelledby="message">
                  <p className="red">You have 4 Mails</p>
                  <a className="dropdown-item media" href="./">
                    <span className="photo media-left">
                      <img alt="avatar" src={JPG1} />
                    </span>
                    <div className="message media-body">
                      <span className="name float-left">Jonathan Smith</span>
                      <span className="time float-right">Just now</span>
                      <p>Hello, this is an example msg</p>
                    </div>
                  </a>
                  <a className="dropdown-item media" href="./">
                    <span className="photo media-left">
                      <img alt="avatar" src={JPG2} />
                    </span>
                    <div className="message media-body">
                      <span className="name float-left">Jack Sanders</span>
                      <span className="time float-right">5 minutes ago</span>
                      <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                  </a>
                  <a className="dropdown-item media" href="./">
                    <span className="photo media-left">
                      <img alt="avatar" src={JPG3} />
                    </span>
                    <div className="message media-body">
                      <span className="name float-left">Cheryl Wheeler</span>
                      <span className="time float-right">10 minutes ago</span>
                      <p>Hello, this is an example msg</p>
                    </div>
                  </a>
                  <a className="dropdown-item media" href="./">
                    <span className="photo media-left">
                      <img alt="avatar" src={JPG4} />
                    </span>
                    <div className="message media-body">
                      <span className="name float-left">Rachel Santos</span>
                      <span className="time float-right">15 minutes ago</span>
                      <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="user-area dropdown float-right">
              <a
                href="./"
                className="dropdown-toggle active"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  className="user-avatar rounded-circle"
                  src={ADMIN}
                  alt="User Avatar"
                />
              </a>

              <div className="user-menu dropdown-menu">
                { this.state.redirectToSignin === false && 
                    <a className="nav-link" href="./">
                    <i className="fa fa-user" />My Profile
                    </a>
                }

                {  
                    this.state.redirectToSignin === false ? (
                        <a className="nav-link" href="./">
                        <i className="fa fa-user" />My Profile
                        </a>
                    ):(
                        <a className="nav-link" href="./">
                        <i className="fa fa-user" />Login
                        </a>
                    )
                }
                { /*<a className="nav-link" href="./">
                  <i className="fa fa-bell-o" />Notifications{" "}
                  <span className="count">13</span>
                </a>*/}

               { /*<a className="nav-link" href="./">
                  <i className="fa fa-cog" />Settings
    </a>*/}

                <a className="nav-link" href="/login" onClick={this.handleLogout}>
                  <i className="fa fa-power-off" />Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
