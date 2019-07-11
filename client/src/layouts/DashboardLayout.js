import React from "react";
import Left from "../components/Left";
import Header from "../components/Header";
import AddCategory from "../components/AddCategory";
import ViewCategory from "../components/ViewCategory";
import { BrowserRouter as Router, Route } from 'react-router-dom';
class DashboardLayout extends React.Component {
  render() {
    return (
      <frameElement>
        <Left />
        <div id="right-panel" className="right-panel">
          <Header />
          <Router>
            <div>
              <Route path='/addcategory' component={AddCategory} />
              <Route path='/viewcategory' component={ViewCategory} />
            </div>
          </Router>
        </div>
      </frameElement>
    );
  }
}

export default DashboardLayout;
