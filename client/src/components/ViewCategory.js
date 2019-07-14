import React, {Component} from 'react';
import '../assets/css/cs-skin-elastic.css';
import '../assets/css/style.css';
import JPG1 from "../assets/images/avatar/1.jpg";

class ViewCategory extends Component{

    render(){
        return (
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
                              <a href="/">
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
           
        )
    }
}
export default ViewCategory;