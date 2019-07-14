import React from "react";
import Left from "../components/Left";
import Header from "../components/Header";
import AddCategory from "../components/AddCategory";
import ViewCategory from "../components/ViewCategory";
import ViewStarRating from "../components/ViewStarRating";
import UserComponent from "../components/UserComponent";
import LoginComponent from "../components/LoginComponent";
import SignupComponent from "../components/SignupComponent";
import { BrowserRouter as Router, Route } from 'react-router-dom';
class DashboardLayout extends React.Component {
  render() {
    return (
      <div>
        <Left />
        <div id="right-panel" className="right-panel">
          <Header />
          <Router>
            <div>
              <Route path='/addcategory' component={AddCategory} />
              <Route path='/viewcategory' component={ViewCategory} />
              <Route path='/Viewstarrating' component={ViewStarRating} />
              <Route path='/viewuser' component={UserComponent} />
              <Route path='/login' component={LoginComponent} />
              <Route path='/signup' component={SignupComponent} />
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default DashboardLayout;
