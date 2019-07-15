import React, { Component } from 'react';
import JPG1 from "../assets/images/avatar/1.jpg";

class UserComponent extends Component {
    state = {users: []}
    callAPI() {
        fetch("http://localhost:5000/user/hmsuser")
        .then(res => res.json())
        .then(users => this.setState({ users }));
    }
    
    componentWillMount() {
        this.callAPI();
    }
    render() {
        return (
            <div className="card-body">
                <div className="table-stats order-table ov-h">
                    <table className="table ">
                        <thead>
                            <tr>
                                <th className="serial">Sr No.</th>
                               <th>Profife Pic.</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.users.map((user,index) =>
                            <tr>
                                <td className="serial">{index+1}.</td>
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
                               
                                <td>
                                    
                                    <span className="name">{user.name}</span>
                                </td>
                                <td>
                                    
                                    <span className="product">{user.email}</span>
                                </td>
                                <td>
                                
                                    <span className="count">{user.status}</span>
                                </td>
                              
                            </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

        );
    }
}
export default UserComponent;