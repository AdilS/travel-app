import React, { Component } from "react";
import "../assets/css/cs-skin-elastic.css";
import "../assets/css/style.css";
import {listcategorybyid,updatecategorybyid} from './clientapi.admin.js';
import auth from "./../auth/auth-helper";
import { Redirect } from "react-router-dom";
import {Link} from 'react-router-dom';
const styles = {
  float: "center",
  marginRight: "20px"
};

class EditCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      error: '',
      success: "",
      respMsg: '',
      redirectToSignin: false,
      dbcategory : ''
    }
   //const catId= this.props.match.params.catId;
   //this.setState()
   ///alert(catId);
  }

  handleInput = (event) => {
    const { value } = event.target;
    this.setState({
      category: value
    });
  }
  handleSubmit = () => {
    const category = this.state.category;
    var resFlag = true;
    //var errors = this.state.error;
    if (category === '') {
      var errors = 'Category is blank';
      this.setState({ error: errors });
      resFlag = false;
    } else {
      this.setState({ error: '' });
    }
    if (resFlag === false) {
      return false
    } else {
      const category = {
        categoryname: this.state.category
      }
      updatecategorybyid(category,{catId: this.props.match.params.catId}).then(data => {
        if (data.error) {
          this.setState({ 'respMsg': "Server Error" });
        } else {
          this.setState({ 'respMsg': "Updated Successfully" });
        }
      })
    }
  }
  loadCategory = () => {
    //alert();
    listcategorybyid({catId: this.props.match.params.catId})
    .then((data) => {
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
//alert((this.match.params.catId));
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
        <div class="breadcrumbs">
          <div class="breadcrumbs-inner">
            <div class="row m-0">

              <div class="col-sm-12">
                <div class="page-header float-right">
                  <div class="page-title">
                    <ol class="breadcrumb text-right">
                      <li class="active"><span style={styles}>
            <Link to='/viewcategory' class="btn btn-primary btn-sm" act>View Category</Link>
            </span></li>
                    </ol>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="content">
          <div class="animated fadeIn">


            <div class="row">
              <div class="col-lg-6" >
                <div className="card">
                  {this.state.respMsg.length > 0 &&
                    <span className="alert alert-danger">{this.state.respMsg}</span>}
                  <div class="card-header"><small> <strong>Edit Category</strong></small></div>
                  <div className="card-body card-block">
                    <form action="#" method="post" className="form-horizontal">
                      <div className="row form-group">
                        <div className="col col-md-3">
                          <label htmlFor="category" className=" form-control-label">
                            Category Name
                  </label>
                        </div>
                        <div className="col-12 col-md-9">
                          <input
                            type="text"
                            id="category"
                            name="category"
                            placeholder="Enter category..."
                            className="form-control"
                            value={this.state.category.categoryname}
                            onChange={this.handleInput}
                          />

                        </div>
                        {this.state.error.length > 0 &&
                          <span className="alert alert-danger">{this.state.error}</span>}

                      </div>
                    </form>
                  </div>
                  <div>
                    <button type="submit" className="btn btn-primary btn-sm" onClick={this.handleSubmit}>
                      <i className="fa fa-dot-circle-o" /> Update
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
export default EditCategory;
