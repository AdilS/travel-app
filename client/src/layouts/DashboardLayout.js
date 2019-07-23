import React from "react";
import Left from "../components/Left";
import Header from "../components/Header";
import AddCategory from "../admin/AddCategory";
import ViewCategory from "../admin/ViewCategory";
import EditCategory from "../admin/EditCategory";
import ViewStarRating from "../components/ViewStarRating";
import UserComponent from "../components/UserComponent";
import LoginComponent from "../auth/LoginComponent";
import SignupComponent from "../users/SignupComponent";
import EditProfileComponent from "../users/EditProfileComponent";
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import PrivateRoute from 'react-private-route';
class DashboardLayout extends React.Component {
  render() {
    return (
      <div>
        <Left />
        <div id="right-panel" className="right-panel">
          <Header />
          <Router>
           
              <Switch>
              <Route path='/addcategory' component={AddCategory} />
              <Route path='/viewcategory' component={ViewCategory} />
              <Route path='/editcategory/:catId' component={EditCategory} />
              <Route path='/Viewstarrating' component={ViewStarRating} />
              <Route path='/viewuser' component={UserComponent} />
              <Route path='/login' component={LoginComponent} />
              <Route path='/signup' component={SignupComponent} />
              <Route path="/user/editprofile" component={EditProfileComponent}/>
              </Switch>
            
          </Router>
        </div>
        <div className="clearfix"></div>

    <footer className="site-footer">
        <div className="footer-inner bg-white">
            <div className="row">
                <div className="col-sm-6">
                    Copyright &copy; 2018 Ela Admin
                </div>
                <div className="col-sm-6 text-right">
                    Designed by <a href="https://colorlib.com">Colorlib</a>
                </div>
            </div>
        </div>
    </footer>
      </div>
    );
  }
}

export default DashboardLayout;
