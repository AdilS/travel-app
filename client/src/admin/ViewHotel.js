import React, { Component } from "react";
import "../assets/css/cs-skin-elastic.css";
import "../assets/css/style.css";
import { Link } from "react-router-dom";
import { listhotel , filterHotels, listcategory, listamenities} from './clientapi.admin.js';
import auth from "./../auth/auth-helper";
import {Redirect} from 'react-router-dom'
import dateFormat from 'dateformat';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const styles = {
  float: "right",
  marginRight: "20px"
};
class ViewHotel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotels: [],
      searchParam : '',
      amenity :'',
      category: '',
      inputError: '',
      startDate: new Date(),
      allcategory: [],
      allamenities: [],
      redirectToSignin: false
    }
  }

  loadHotels = () => {
    this.setState({
      searchParam: "",
      amenity: "",
      category: ""
    });
    listhotel().then((data) => {
      if (data.error) {
        console.log(data.error)
      } else { 
        this.setState({hotels: data})
      }
    })
  }
  componentDidMount = () => {
    this.loadHotels()
    this.loadCategory();
    this.loadAmenities();
  }
  loadCategory = () => {
    listcategory().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        this.setState({ allcategory: data });
      }
    });
  };
  loadAmenities = () => {
    listamenities().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        this.setState({ allamenities: data });
      }
    });
  };
  handleSearch = () =>{
    const searchParam = this.state.searchParam;
    const amenity = this.state.amenity;
    const category = this.state.category;
    //alert(amenity + '==' +category );
    var errFlag=false;
    if(searchParam==='' && amenity==='' && category===''){
      this.setState ({inputError : 'Search field in blank'});
      return  true;
    } else if(errFlag===false) {
      this.setState ({inputError : ''});
      const filterObj= {
        searchParam : searchParam,
        amenity : amenity,
        category : category
      }
      filterHotels(filterObj).then(data => {
        if (data.error) {
          this.setState({ 'respMsg': JSON.stringify(data.error) });
        } else {
          this.setState({hotels: data});
        }
      })
    }

  }

  handleChange = (event) =>{
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
   // this.handleSearch();
  }
  handleStatus(status){
    alert(status);
  }
  render() {
    const jwt = auth.isAuthenticated();
    if (jwt.token == null || typeof jwt.token == undefined) {
      this.setState({ redirectToSignin: true });
    }
    const redirectToSignin = this.state.redirectToSignin;

    if (redirectToSignin === true) {
      return <Redirect to="/login" />;
    }
    return (
      <React.Fragment>
        <div className="card-body">
          
          <div className="table-stats order-table ov-h">
         
          <input type="text" value={this.state.searchParam} id="text-input" name="searchParam" placeholder="Search Hotels" className="form-control" onChange={this.handleChange} />
          <select
                    data-placeholder="Choose a Country..."
                    class="standardSelect"
                    tabindex="1"
                    onChange={this.handleChange}
                    name="amenity"
                  >
                    <option value=""> -Select Amenity-</option>
                    {this.state.allamenities.map((value, index) => (
                      <option value={value._id}> {value.amenityname}</option>
                    ))}
                  </select>
                  <select
                    
                    data-placeholder="Choose a Category..."
                    class="standardSelect"
                    tabindex="1"
                    name="category"
                    onChange={this.handleChange}
                  >
                  <option value=""> -Select Category-</option>
                    {this.state.allcategory.map((value, index) => (
                      <option value={value._id} label="default">
                        {value.categoryname}
                      </option>
                    ))}
                  </select>
                    <button type="submit" className="btn btn-primary btn-sm"  onClick={this.handleSearch}>
                      <i className="fa fa-dot-circle-o" /> Search
            </button>
            &nbsp;&nbsp;<button type="submit" className="btn btn-primary btn-sm"  onClick={this.loadHotels}>
                      <i className="fa fa-dot-circle-o" /> Reset
            </button>
          {this.state.inputError.length>0 && <span className="alert alert-danger">{this.state.inputError}</span>}
            <span style={styles}>
              <Link to="addhotel" class="btn btn-primary btn-sm" act>
                Add Hotel
              </Link>
            </span>
            <table className="table ">
              <thead>
                <tr>
                  <th className="serial">#</th>
                  <th>Name</th>
                  <th>Category Name</th>
                  <th>Amenity</th>
                  <th>Offer</th>
                  <th>Description</th>
                  <th>Other Features</th>
                  <th>Created Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
              
              {this.state.hotels.map( (value, index) =>
                <tr>
                  <td className="serial">{index+1}</td>
                  <td>
                    <span className="name">{value.hotelname}</span>
                  </td>
                  <td>
                    <span className="name">{value.category_id.categoryname}</span>
                  </td>
                  <td>
                    <span className="name">{value.amenity_id.amenityname}</span>
                  </td>
                  <td>
                    <span className="name">{value.is_offer}</span>
                  </td>
                  <td>
                    <span className="name">{value.description}</span>
                  </td>
                  <td>
                    <span className="name">{value.extrafeature}</span>
                  </td>
                  <td>
                    <span className="name">{dateFormat(value.created, "dd-mm-yyyy")}</span>
                  </td>
                  
                  <td>
                    <a href='#' onClick={this.handleStatus(value.status)}>
                    
                  {value.status==1 && <span> Active</span>}
                  {value.status==0 && <span> In Active</span>}
                       </a>    
                  </td>
                </tr>
              )}
              </tbody>
            </table>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default ViewHotel;
