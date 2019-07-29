import React, { Component } from "react";
import "../assets/css/cs-skin-elastic.css";
import "../assets/css/style.css";
//import JPG1 from "../assets/images/avatar/1.jpg";
import { Link } from "react-router-dom";
import { listcategory } from './clientapi.admin.js';
import auth from "./../auth/auth-helper";
import {Redirect} from 'react-router-dom'


const styles = {
  float: "right",
  marginRight: "20px"
};
class ViewCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [],
      /*error: '',
      success: "",
      respMsg: '',*/
      redirectToSignin: false
    }
  }

  loadCategory = () => {
    listcategory().then((data) => {
      if (data.error) {
        console.log(data.error)
      } else { 
        this.setState({category: data})
      }
    })
  }
  componentDidMount = () => {
    this.loadCategory()
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
            <span style={styles}>
              <Link to="addcategory" class="btn btn-primary btn-sm" act>
                Add Category
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
              {this.state.category.map((value,index) =>

              
                <tr>
                  <td className="serial">{index+1}.</td>
                  <td>
                    <span className="name">{value.categoryname}</span>
                  </td>
                  
                  <td>
                  {value.status === 1 && 'Active'}
                  {value.status === 0 && 'In Active'}
                    
                  </td>
                  <td>
                  <Link to={"/editcategory/"+value._id}  class="btn btn-info" act>
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
export default ViewCategory;
