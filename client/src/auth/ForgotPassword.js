import React, { Component } from "react";
import { checkEmail, sendEmail } from "./client.api.auth.js";
class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      success: "",
      commonerr: "",
      emailErr: "",
      error: ''
    };
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const email = this.state.email;
    var errFlag = true;
    if (email === "") {
      this.setState({ emailErr: "Email is blank" });
      errFlag = false;
    } else {
      const user = {
        email: this.state.email || undefined
      }
      checkEmail(user).then(data => {
        alert(JSON.stringify(data));
        if (!data.alreadyexists) {
          this.setState({ success: 'Invalid email' });
        } else {
          this.setState({ success: 'Email Sent' });
        }
      });
    }
  };
  render() {
    return(
      <div className="col-lg-6">
        <div className="card-header">
          <strong>Forget Password</strong>
          <span>
            {this.state.success}
            {this.state.commonerr}
          </span>
        </div>

        {/* {this.state.errors.fullName.length > 0 && 
                     <span className='error'>{this.state.errors.fullName}</span>} */}

        <div className="form-group">
          <label htmlFor="email" className=" form-control-label">
            Email
          </label>
          <input
            type="text"
            id="email"
            onChange={this.handleInputChange}
            name="email"
            placeholder="email"
          />
        </div>

        <span className="error">{this.state.error.emailErr}</span>

        <button
          type="submit"
          className="btn btn-primary btn-sm"
          onClick={this.handleSubmit}
        >
          <i className="fa fa-dot-circle-o" /> Submit
        </button>
      </div>
    );
  }
}

export default ForgotPassword;
