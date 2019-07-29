import React, { Component } from "react";
//import JPG1 from "../assets/images/avatar/1.jpg";
import "../assets/css/common.css";
import { create } from "./clientapi.user.js";
class SignupComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      confirmpassword: "",
      email: "",
      open: false,
      error: {
        nameerr: "",
        emailerr: "",
        passworderr: "",
        commonerr: ""
      },
      success: "",
      passworderror: ""
    };
  }

  // handleInputChange = (event) => {
  //     const {value ,name } = event.target;
  //     let errors = this.state.errors;
  //     const validEmailRegex =
  //   RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
  //     //emailRegEx="RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);";
  //     switch(name){
  //         case 'name' :
  //             errors.fullName= value.length<5 ? 'Name must be 5 characters long!':'';
  //             break;
  //         case 'email' :
  //             errors.email= validEmailRegex.test(value)? "":"Email is not valid";
  //             break;
  //         case 'password':
  //             errors.password= value.length<8 ? "Password must be 8 char." :"";
  //             break;
  //         default:
  //             break;
  //     }
  //     this.setState({
  //       [name]: value,
  //       errors}
  //       //,
  //     //()=> {
  //        // console.log(errors)
  //     //}
  //     );
  //   }

  handleInputChange = event => {
    //const { value, name } = event.target;
    // alert(event.target.value);
    const { value, name } = event.target;
    //console.log(event.target.name);
    this.setState({
      [name]: value
      
    });
  };
  onSubmit = event => {
    event.preventDefault();
    const user = {
      name: this.state.name || undefined,
      email: this.state.email || undefined,
      password: this.state.password || undefined
    };

    if (this.state.password !== this.state.cpassword) {

      this.setState({ passworderror: "Confirm password is not same" });
      return false;
    } else {
      this.setState({ passworderror: "" });
    }
    create(user).then(data => {
      const errVar = this.state.error;
      if (data.error) {
        errVar.commonerr = data.error;
        this.setState({ error: errVar });
      } else {

        this.setState({ error: "", success: data.message });
      }
    });

    //    create(user).then((data) => {
    //     if (data.error) {
    //       this.setState({error: data.error})
    //     } else {
    //       this.setState({error: '', open: true})
    //     }
    //   })
    /*  fetch('/user/signup', {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        if (res.status === 200) {
         // this.props.history.push('/');
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch(err => {
        console.error(err);
        alert('Error logging in please try again');
      });*/
  };
  render() {
    return (
      <React.Fragment>
        <form action="/signup" method="post" onSubmit={this.onSubmit}>
          <div className="col-lg-6">
            <div className="card">
              <div className="card-header">
                <strong>SignUp Form</strong>
                <small> </small>
                <span>{this.state.success}{this.state.error.commonerr}</span>
              </div>
              <div className="card-body card-block">
                <div className="form-group">
                  <label htmlFor="name" className=" form-control-label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    onChange={this.handleInputChange}
                    name="name"
                    placeholder="Enter your name"
                   
                  />
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
                {/* {this.state.errors.email.length > 0 && 
                                <span className='error'>{this.state.errors.email}</span>} */}
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
                
                  
                    <div className="form-group">
                      <label
                        htmlFor="cpassword"
                        
                      >
                        Confirm Password{this.state.passworderror}
                      </label>
                      <input
                        type="password"
                        id="cpassword"
                        onChange={this.handleInputChange}
                        name="cpassword"
                        placeholder="Enter Password same as password"
                      />
                    </div>
                 
                
                <button type="submit" className="btn btn-primary btn-sm">
                  <i className="fa fa-dot-circle-o" /> Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}
export default SignupComponent;
