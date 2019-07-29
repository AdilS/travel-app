import React, { Component } from "react";
import "../assets/css/cs-skin-elastic.css";
import "../assets/css/style.css";
import { Link } from "react-router-dom";
import { listamenities , filterAmenities} from './clientapi.admin.js';
import auth from "./../auth/auth-helper";
import {Redirect} from 'react-router-dom'


const styles = {
  float: "right",
  marginRight: "20px"
};
class ViewAmenities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amenities: [],
      searchParam : '',
      inputError: '',
      /*success: "",
      respMsg: '',*/
      redirectToSignin: false
    }
  }

  loadAmenities = () => {
    listamenities().then((data) => {
      if (data.error) {
        console.log(data.error)
      } else { 
        this.setState({amenities: data})
      }
    })
  }
  componentDidMount = () => {
    this.loadAmenities()
  }
  handleInput = (event)=>{
    const {  value } = event.target;
    this.setState({
      searchParam: value
    });
  }
  handleSearch = () =>{
    const searchParam = this.state.searchParam;
    var errFlag=false;
    if(searchParam===''){
      this.setState ({inputError : 'Search field in blank'});
      errFlag = true;
    } else if(errFlag===false) {
      filterAmenities({'searchParam' : searchParam}).then(data => {
        if (data.error) {
          this.setState({ 'respMsg': JSON.stringify(data.error) });
        } else {
          this.setState({amenities: data});
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
        <div className="card-body">
          
          <div className="table-stats order-table ov-h">
         
          <input type="text" id="text-input" name="text-input" placeholder="Search Amenities" className="form-control" onChange={this.handleInput} />
         
                    <button type="submit" className="btn btn-primary btn-sm"  onClick={this.handleSearch}>
                      <i className="fa fa-dot-circle-o" /> Search
            </button>
          {this.state.inputError.length>0 && <span className="alert alert-danger">{this.state.inputError}</span>}
            <span style={styles}>
              <Link to="addamenities" class="btn btn-primary btn-sm" act>
                Add Amenities
              </Link>
            </span>
            <table className="table ">
              <thead>
                <tr>
                  <th className="serial">#</th>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              {this.state.amenities.map((value,index) =>

              
                <tr>
                  <td className="serial">{index+1}.</td>
                  <td>
                    <span className="name">{value.amenityname}</span>
                  </td>
                  
                  <td>
                  {value.status === 1 && 'Active'}
                  {value.status === 0 && 'In Active'}
                    
                  </td>
                  <td>
                  <Link to={"/editamenities/"+value._id}  class="btn btn-info" act>
                  <i class="fa fa-pencil"/>
                    </Link>
                  </td>
  </tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default ViewAmenities;
