import React from "react";
import Left from "../components/Left";
import Header from "../components/Header";
import Content from "../components/Content";
class DashboardLayout extends React.Component {
  render() {
    return (
      <frameElement>
        <Left />
        <div id="right-panel" className="right-panel">
        <Header />
        <Content />
        </div>
      </frameElement>
    );
  }
}

export default DashboardLayout;
