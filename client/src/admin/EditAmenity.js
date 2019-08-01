import React, { Component } from "react";
import {listamenitiesbyid, updateamenitybyid} from './clientapi.admin';
import { Link } from "react-router-dom";
const styles = {};
class EditAmenity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amenity: "",
      respMsg: "",
      error : ""
    };
  }
  handleInput = event => {
    const { value } = event.target;
    this.setState({amenity : value});
  };
 componentDidMount = () =>{
    listamenitiesbyid({amenityId: this.props.match.params.amenityId}).then((data) => {
        if (data.error) {
          console.log(data.error)
        } else { 
          this.setState({amenity: data})
        }
      })
 }
  handleSubmit = () => {
    const changedData = this.state.amenity;
    //var errFlag=false;
    if(changedData === ''){
        this.setState( {error : 'Amenity is blank'} );
       // errFlag = true;
    } else {
        this.setState( {error : ''} );
        const amenity = {
            amenityname: this.state.amenity
          }
          updateamenitybyid(amenity,{amenityId: this.props.match.params.amenityId}).then(data => {
            if (data.error) {
              this.setState({ 'respMsg': "Server Error" });
            } else {
              this.setState({ 'respMsg': "Updated Successfully" });
            }
          })
  }
}
  render() {
    return (
      <React.Fragment>
        <div className="breadcrumbs">
          <div className="breadcrumbs-inner">
            <div className="row m-0">
              <div className="col-sm-12">
                <div className="page-header float-right">
                  <div className="page-title">
                    <ol className="breadcrumb text-right">
                      <li className="active">
                        <span style={styles}>
                          <Link
                            to="/viewamenities"
                            className="btn btn-primary btn-sm"
                            act
                          >
                            View Amenity
                          </Link>
                        </span>
                      </li>
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
              <div className="col-lg-6">
                <div className="card">
                  {this.state.respMsg.length > 0 && (
                    <span className="alert alert-danger">
                      {this.state.respMsg}
                    </span>
                  )}
                  <div className="card-header">
                    <small>
                      {" "}
                      <strong>Edit Amenity</strong>
                    </small>
                  </div>
                  <div className="card-body card-block">
                    <form
                      action="#"
                      method="post"
                      className="form-horizontal"
                    >
                      <div className="row form-group">
                        <div className="col col-md-3">
                          <label
                            htmlFor="amenity"
                            className=" form-control-label"
                          >
                            Amenity Name
                          </label>
                        </div>
                        <div className="col-12 col-md-9">
                          <input
                            type="text"
                            id="amenity"
                            name="amenity"
                            placeholder="Enter amenity..."
                            className="form-control"
                            onChange={this.handleInput}
                            value={this.state.amenity.amenityname}
                          />
                        </div>
                        {this.state.error.length > 0 && (
                          <span className="alert alert-danger">
                            {this.state.error}
                          </span>
                        )}
                      </div>
                    </form>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-sm"
                      onClick={this.handleSubmit}
                    >
                      <i className="fa fa-dot-circle-o" /> Submit
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
export default EditAmenity;
