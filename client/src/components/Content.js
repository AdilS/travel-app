import React, { Component } from "react";
import "../assets/css/cs-skin-elastic.css";
import "../assets/css/style.css";
import logo from "../assets/images/logo.png";
import logo2 from "../assets/images/logo2.png";
import JPG1 from "../assets/images/avatar/1.jpg";
import JPG2 from "../assets/images/avatar/2.jpg";
import JPG3 from "../assets/images/avatar/3.jpg";
import JPG4 from "../assets/images/avatar/4.jpg";
import JPG5 from "../assets/images/avatar/5.jpg";
class Content extends Component {
  render() {
    return (
      <div className="content">
        <div className="orders">
          <div className="row">
            <div className="col-xl-8">
              <div className="card">
                <div className="card-body">
                  <h4 className="box-title">Orders </h4>
                </div>
                <div className="card-body">
                  <div className="table-stats order-table ov-h">
                    <table className="table ">
                      <thead>
                        <tr>
                          <th className="serial">#</th>
                          <th className="avatar">Avatar</th>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Product</th>
                          <th>Quantity</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="serial">1.</td>
                          <td className="avatar">
                            <div className="round-img">
                              <a href="#">
                                <img
                                  className="rounded-circle"
                                  src={JPG1}
                                  alt=""
                                />
                              </a>
                            </div>
                          </td>
                          <td> #5469 </td>
                          <td>
                            {" "}
                            <span className="name">Louis Stanley</span>{" "}
                          </td>
                          <td>
                            {" "}
                            <span className="product">iMax</span>{" "}
                          </td>
                          <td>
                            <span className="count">231</span>
                          </td>
                          <td>
                            <span className="badge badge-complete">
                              Complete
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Content;
