import React, { Component } from "react";
//import JPG1 from "../assets/images/avatar/1.jpg";
import "../assets/css/common.css";
import { listcategory, createHotel, listamenities } from "./clientapi.admin";
class SignupComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allcategory: [],
      allamenities: [],
      hotelname : '',
      images :"",
      amenity: "",
      categoryvalues: "",
      is_offer: "",
      description: "",
      extrafeaturechecked: "",
      open: false,
      error: {
        nameerr: "",
        emailerr: "",
        passworderr: "",
        commonerr: ""
      },
      success: "",
      passworderror: ""
    };
  }

  handleInputChange = event => {
    const { value, name } = event.target;
    //alert(event.target.value);
    this.setState({
      [name]: value
    });
  };

  handleMultiSelect = (event) =>{
    let value = Array.from(event.target.selectedOptions, option => option.value);
    this.setState({categoryvalues: value});
  }
  handleCheckboxChange = (event) =>{
    this.setState({ extrafeaturechecked: event.target.checked })
}

  selectImages = event => {
    let images = [];
    for (var i = 0; i < event.target.files.length; i++) {
      images[i] = event.target.files.item(i);
    }
    images = images.filter(image => image.name.match(/\.(jpg|jpeg|png|gif)$/));
    let message = `${images.length} valid image(s) selected`;
    this.setState({ images, message });
  };
  onSubmit = event => {
    event.preventDefault();

    const hotelData = {
      hotelname: this.state.hotelname || undefined,
      amenity_id: this.state.amenity || undefined,
      category_id: this.state.categoryvalues || undefined,
      is_offer: this.state.is_offer || undefined,
      description: this.state.description || undefined,
      extrafeature: this.state.extrafeaturechecked || undefined
    };

    if (this.state.password !== this.state.cpassword) {
      this.setState({ passworderror: "Confirm password is not same" });
      return false;
    } else {
      this.setState({ passworderror: "" });
    }
    createHotel(hotelData).then(data => {
      const errVar = this.state.error;
      if (data.error) {
        errVar.commonerr = data.error;
        this.setState({ error: errVar });
      } else {
        this.setState({ error: "", success: data.message });
      }
    });
  };
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
  componentDidMount = () => {
    this.loadCategory();
    this.loadAmenities();
  };

  handleChange = name => event => {
    //alert(JSON.stringify(event.target.files[0]));
    console.log(event.target);
    const value = name === "image" ? event.target.files[0] : event.target.value;
    // this.shopData.set(name, value)
    this.setState({ [name]: value });
  };
  render() {
    return (
      <React.Fragment>
        <form action="/signup" method="post" onSubmit={this.onSubmit}>
          <div className="col-lg-6">
            <div className="card">
              <div className="card-header">
                <strong>Add Hotel</strong>
                <small> </small>
                <span>
                  {this.state.success}
                  {this.state.error.commonerr}
                </span>
              </div>
              <div className="card-body card-block">
                <div className="form-group">
                  <label htmlFor="name" className=" form-control-label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    onChange={this.handleInputChange}
                    name="hotelname"
                    placeholder="Enter Hotel name"
                  />
                </div>
                {/* {this.state.errors.fullName.length > 0 && 
                                <span className='error'>{this.state.errors.fullName}</span>} */}

                <div className="form-group">
                  <label htmlFor="email" className=" form-control-label">
                    Hotel Amenity
                  </label>
                  <select
                    data-placeholder="Choose a Country..."
                    class="standardSelect"
                    tabindex="1"
                    onChange={this.handleInputChange}
                    name="amenity"
                  >
                    <option value=""> -Select Amenity-</option>
                    {this.state.allamenities.map((value, index) => (
                      <option value={value._id}> {value.amenityname}</option>
                    ))}
                  </select>
                </div>
                {/* {this.state.errors.email.length > 0 && 
                                <span className='error'>{this.state.errors.email}</span>} */}

                <div className="form-group">
                  <label className=" form-control-label">Category:</label>

                  <select
                    multiple
                    data-placeholder="Choose a Category..."
                    class="standardSelect"
                    tabindex="1"
                    name="category"
                    onChange={this.handleMultiSelect}
                  >
                    {this.state.allcategory.map((value, index) => (
                      <option value={value._id} label="default">
                        {value.categoryname}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label className=" form-control-label">
                    Offer Applicable:
                  </label>
                  <input type="radio" name="is_offer" value="yes" onChange={this.handleInputChange} />{" "}
                  &nbsp;&nbsp;&nbsp;
                  <input type="radio" name="is_offer" value="no" onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                  <label className=" form-control-label">Description:</label>
                  <textarea name="description" rows="4" cols="7" onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                  <label className=" form-control-label">Extra Feature:</label>
                  <input type="checkbox" name="cab" value="Cab" onChange={this.handleCheckboxChange} /> Cab
                  &nbsp;&nbsp;&nbsp;
                  <input
                    type="checkbox"
                    name="extrabed"
                    value="Extra Bed"
                    onChange={this.handleCheckboxChange} />
                  Extra bed
                </div>
                <div className="form-group">
                <input className="form-control " type="file" 

onChange={this.selectImages} multiple/>
                  {/*<label htmlFor="icon-button-file">;
                    <button variant="raised" color="secondary" component="span">;
                    Upload Logo;
                   
                            </button>;
                </label>;*/}
                </div>
                <button type="submit" className="btn btn-primary btn-sm">
                  <i className="fa fa-dot-circle-o" /> Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}
export default SignupComponent;
