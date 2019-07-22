import React, { Component } from "react";
import {signin} from './client.api.auth.js';
import auth from './auth-helper';
import {Redirect} from 'react-router-dom';
class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: {
                emailErr: "",
                passwordErr: ""
            },
            commonerr: '',
            redirectToReferrer: false

        }
    }
    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    onSubmit = (event) => {
        event.preventDefault();
        var emailVar = this.state.email;
        var passwordVar = this.state.password;
        const errors = this.state.error;
       // const validEmailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
        var flag = true;
        if (emailVar == '') {
            errors.emailErr = "Email Required";
            flag = false;
        } 
        // else if (validEmailRegex.test(emailVar)) {
        //     errors.emailErr = "Inavlid Email";
        //     flag = false;
        // }
         else {
            errors.emailErr = "";
            flag = true;
        }

        if (passwordVar == '') {
            errors.passwordErr = "Password Required";
            flag = false;
        } else {
            errors.passwordErr = "";
            flag = true;
        }
        this.setState({ error: errors });

        if (flag == false) {
            return false;
        } else {
            const user = {
                email: this.state.email || undefined,
                password: this.state.password || undefined
              }
          
              signin(user).then((data) => {
                 // alert(JSON.stringify(data));
                if (data.error) {
                  this.setState({commonerr: data.error})
                } else {
                    this.setState({commonerr: null})
                   
                  auth.authenticate(data, () => { alert('Success');
                    this.setState({redirectToReferrer: true})
                  })
                }
              })
        }
    }
    render() {
        if(this.state.redirectToReferrer){
           return <Redirect to= "/user/editprofile" />
        }
        return (<React.Fragment>
            <form action="" method="post" onSubmit={this.onSubmit}>
                <div className="col-lg-6">

                    <div className="card-header">
                        <strong>Login</strong>
                        <span>{this.state.success}{this.state.commonerr}</span>
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

                    <span className='error'>{this.state.error.emailErr}</span>
                    <div className="form-group">
                        <label htmlFor="password" className=" form-control-label">
                            Password
                      </label>
                        <input
                            type="password"
                            id="password"
                            onChange={this.handleInputChange}
                            name="password"
                            placeholder="Enter Password"

                        />
                    </div>
                    <span className='error'>{this.state.error.passwordErr}</span>

                    <button type="submit" className="btn btn-primary btn-sm">
                        <i className="fa fa-dot-circle-o" /> Submit
                    </button>
                </div>

            </form>
        </React.Fragment>)
    }

}
export default LoginComponent;