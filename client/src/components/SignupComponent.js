import React, { Component } from 'react';
//import JPG1 from "../assets/images/avatar/1.jpg";
import '../assets/css/common.css';
class SignupComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:"", 
            email: "",
            password: "",
            
            errors: {
                fullName: '',
                email: '',
                password: '',
              }
        };
    }

handleInputChange = (event) => {
    const { value, name } = event.target;
    let errors = this.state.errors;
    const validEmailRegex = 
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
    //emailRegEx="RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);";
    switch(name){
        case 'name' :
            errors.fullName= value.length<5 ? 'Name must be 5 characters long!':'';
            break;
        case 'email' :
            errors.email= validEmailRegex.test(value)? "":"Email is not valid";
            break;   
        case 'password':
            errors.password= value.length<8 ? "Password must be 8 char." :"";
            break;   
        default:
            break;
    }
    this.setState({
      [name]: value,
      errors}
      //,
    //()=> {
       // console.log(errors)
    //}
    );
  }
onSubmit=(event)=>{
    event.preventDefault();
    fetch('/user/signup', {
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
      });
}
    render() {
        return (
            <React.Fragment>
                <form action="/signup" method="post" onSubmit={this.onSubmit}>
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-header"><strong>SignUp</strong><small> Form</small></div>
                        <div className="card-body card-block">
                            <div className="form-group">
                                <label htmlFor="name" className=" form-control-label">Name</label>
                                <input type="text" id="name"  onChange={this.handleInputChange} name="name" placeholder="Enter your name" className="form-control" /></div>
                                {this.state.errors.fullName.length > 0 && 
                                <span className='error'>{this.state.errors.fullName}</span>}

                            <div className="form-group">
                                <label htmlFor="email" className=" form-control-label">Email</label>
                                <input type="text" id="email"  onChange={this.handleInputChange}  name="email" placeholder="email" className="form-control" /></div>
                                {this.state.errors.email.length > 0 && 
                                <span className='error'>{this.state.errors.email}</span>}
                            <div className="form-group">
                                <label htmlFor="password" className=" form-control-label">Password</label>
                                <input type="text" id="password"  onChange={this.handleInputChange} name="password" placeholder="Enter Password" className="form-control" /></div>
                            <div className="row form-group">
                                <div className="col-8">
                                    <div className="form-group">
                                        <label htmlFor="cpassword" className=" form-control-label">Confirm Password</label>
                                        <input type="text" id="cpassword"  onChange={this.handleInputChange} name="cpassword" placeholder="Enter Password same as password" className="form-control" /></div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary btn-sm">
                                    <i className="fa fa-dot-circle-o"></i> Submit
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