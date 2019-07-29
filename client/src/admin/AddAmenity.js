import React, { Component } from "react";
import "../assets/css/cs-skin-elastic.css";
import "../assets/css/style.css";
import { createamenity } from './clientapi.admin.js';
import auth from "./../auth/auth-helper";
import { Redirect } from "react-router-dom";
import {Link} from 'react-router-dom';
const styles = {
  float: "center",
  marginRight: "20px"
};
class AddAmenity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amenity: '',
      error: '',
      success: "",
      respMsg: '',
      redirectToSignin: false
    }
  }

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }
  handleSubmit = () => {
    const amenity = this.state.amenity;
    var resFlag = true;
    //var errors = this.state.error;
    if (amenity === '') {
      var errors = 'amenity is blank';
      this.setState({ error: errors });
      resFlag = false;
    } else {
      this.setState({ error: '' });
    }
    if (resFlag === false) {
      return false
    } else {
      const amenity = {
        amenityname: this.state.amenity
      }
      createamenity(amenity).then(data => {
        if (data.error) {
          this.setState({ 'respMsg': JSON.stringify(data.error) });
        } else {
          this.setState({ 'respMsg': "Saved Successfully" });
        }
      })
    }
  }

  render() {

    const jwt = auth.isAuthenticated();
    if (jwt.token == null || typeof jwt.token == undefined) {
      this.setState({ redirectToSignin: true });
    }
    const redirectToSignin = this.state.redirectToSignin;

    if (redirectToSignin === true) {
      return <Redirect to="/login" />;
    }
    return (
      <React.Fragment>
        <div className="breadcrumbs">
          <div className="breadcrumbs-inner">
            <div className="row m-0">

              <div className="col-sm-12">
                <div className="page-header float-right">
                  <div className="page-title">
                    <ol className="breadcrumb text-right">
                      <li className="active"><span style={styles}>
            <Link to='viewamenities' className="btn btn-primary btn-sm" act>View Amenity</Link>
            </span></li>
                    </ol>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="animated fadeIn">


            <div className="row">
              <div className="col-lg-6" >
                <div classNameName="card">
                  {this.state.respMsg.length > 0 &&
                    <span classNameName="alert alert-danger">{this.state.respMsg}</span>}
                  <div className="card-header"><small> <strong>Add Amenity</strong></small></div>
                  <div classNameName="card-body card-block">
                    <form action="#" method="post" classNameName="form-horizontal">
                      <div classNameName="row form-group">
                        <div classNameName="col col-md-3">
                          <label htmlFor="amenity" classNameName=" form-control-label">
                          Amenity Name
                  </label>
                        </div>
                        <div classNameName="col-12 col-md-9">
                          <input
                            type="text"
                            id="amenity"
                            name="amenity"
                            placeholder="Enter amenity..."
                            classNameName="form-control"
                            onChange={this.handleInput}
                          />

                        </div>
                        {this.state.error.length > 0 &&
                          <span classNameName="alert alert-danger">{this.state.error}</span>}

                      </div>
                    </form>
                  </div>
                  <div>
                    <button type="submit" classNameName="btn btn-primary btn-sm" onClick={this.handleSubmit}>
                      <i classNameName="fa fa-dot-circle-o" /> Submit
            </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default AddAmenity;
