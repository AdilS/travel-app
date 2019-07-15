import React, {Component} from 'react';
//import '../assets/css/cs-skin-elastic.css';
//import '../assets/css/style.css';
//import JPG1 from "../assets/images/avatar/1.jpg";

class ViewStarRating extends Component{

  state = {users: []}

callAPI() {
    fetch("http://localhost:5000/users")
    .then(res => res.json())
    .then(users => this.setState({ users }));
}

componentWillMount() {
    this.callAPI();
}
 
  render() {
    return (
      <div className="App">
      <h1>Users</h1>
      {this.state.users.map(user =>
        <div key={user.id}>{user.username}</div>
      )}
    </div>
    );
        }
}
export default ViewStarRating;