import React, { Component } from "react";
import "../assets/css/cs-skin-elastic.css";
import "../assets/css/style.css";
import logo from "../assets/images/logo.png";
import logo2 from "../assets/images/logo2.png";
class Header extends Component {
  render() {
    return (
      <header id="header" className="header">
        <div className="top-left">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">
              <img src={logo} alt="Logo" />
            </a>
            <a className="navbar-brand hidden" href="/">
              <img src={logo2} alt="Logo" />
            </a>
            <a id="menuToggle" className="menutoggle" href="/">
              <i className="fa fa-bars" />
            </a>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
