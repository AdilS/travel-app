import React from "react";
import Left from "../components/Left";
import Header from "../components/Header";
import AddCategory from "../admin/AddCategory";
import ViewCategory from "../admin/ViewCategory";
import EditCategory from "../admin/EditCategory";
import ViewAmenities from "../admin/ViewAmenities";
import AddAmenity from "../admin/AddAmenity";
import EditAmenity from "../admin/EditAmenity";
import ViewStarRating from "../components/ViewStarRating";
import UserComponent from "../components/UserComponent";
import EditProfileComponent from "../users/EditProfileComponent";
import NotFound from "../users/NotFound";
import { BrowserRouter as Router, Route , Switch, withRouter } from 'react-router-dom';
//import PrivateRoute from 'react-private-route';
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
              
              <Route path='/viewcategory' render={()=> <ViewCategory />} />
              <Route path='/editcategory/:catId' component={EditCategory} />
              <Route exact path='/Viewstarrating' component={withRouter(ViewStarRating)} />
              <Route path='/viewamenities' component={ViewAmenities} />
              <Route path='/addamenities' component={AddAmenity} />
              <Route path='/editamenity/:amenityId' component={EditAmenity} />
              <Route path='/viewuser' component={UserComponent} />
              
              <Route path="/user/editprofile" component={EditProfileComponent}/>
              <Route path="" component={NotFound} />
              </Switch>
            
          </Router>
        </div>
        <div className="clearfix"></div>

    <footer className="site-footer">
        <div className="footer-inner bg-white">
            <div className="row">
                <div className="col-sm-6">
                    Copyright &copy; 2019 Adil Saleem
                </div>
                <div className="col-sm-6 text-right">
                    Designed by <a href="https://colorlib.com">Adil</a>
                </div>
            </div>
        </div>
    </footer>
      </div>
    );
  }
}

export default DashboardLayout;
