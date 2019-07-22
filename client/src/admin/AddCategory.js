import React, { Component } from "react";
import "../assets/css/cs-skin-elastic.css";
import "../assets/css/style.css";

const styles = {
  float: "center",
  marginRight: "20px"
};
const divStyle = {
     display:"inline-block",
     margin: "0 auto"
};
class AddCategory extends Component {
  render() {
    return (
      <React.Fragment>
      <div class="breadcrumbs">
            <div class="breadcrumbs-inner">
                <div class="row m-0">
                    
                    <div class="col-sm-12">
                        <div class="page-header float-right">
                            <div class="page-title">
                                <ol class="breadcrumb text-right">
                                    <li class="active">View Category</li>
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
        <div class="card-header"><small> <strong>Add Category</strong></small></div>
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
                  />
                  <span className="help-block">Please enter Category</span>
                </div>
              </div>
            </form>
          </div>
          <div>
            <button type="submit" className="btn btn-primary btn-sm">
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
export default AddCategory;
