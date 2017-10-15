import React, { Component } from "react";
import API from "../../utils/API";
import Col from "../../components/Grid/Col";
import Row from "../../components/Grid/Row";
import Container from "../../components/Grid/Container";
import Input from "../../components/Form/Input";
/*import List from "../../components/List/List";
import ListItem from "../../components/List/ListItem";
import { Link } from "react-router-dom";*/
import "./Profile.css";
import InputModal from "../../components/Modal/inputModal";
import { Button } from "react-bootstrap";

class Profile extends Component {
  state = {
    User: [],
    name: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phoneNumber: ""
  };

  componentDidMount() {
    this.loadUser();
  }

  loadUser() {
    const { auth } = this.props;

    auth.getProfile((err, profile) => {
      if (err) throw new Error("Error retrieving profile from Auth0");
      console.log(profile);
      API.getUser(auth.getAccessToken(), profile.sub)
      .then(res => this.setState({ ...res.data }))
      .catch(err => console.log(err));
    });
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (
        this.state.name &&
        this.state.address &&
        this.state.city &&
        this.state.state &&
        this.state.zipCode &&
        this.state.phoneNumber
    ) {
      API.saveUser({
        name: this.state.name,
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        zipCode: this.state.zipCode,
        phoneNumber: this.state.phoneNumber
      })
      .then(res => this.loadUser())
      .catch(err => console.log(err));
    }
  };

    render() {
        return (
            <div>
                <Container fluid>
                    <Row>
                        <Col size="md-1" />
                        <Col size="md-4">
                            <h1 className="pageHeader" style={{textDecoration: "underline"}}>My Profile</h1>
                        </Col>
                        <Col size="md-7" />
                    </Row>
                    <br />
                    <Row>
                        <div className="wrapper">
                            <strong>
                                <p className="whiteText">
                                    Welcome to your profile page. You are able to update your user information, review your
                                    saved posts, and accesss your emergency status form.
                                </p>
                            </strong>
                        </div>
                    </Row>

                    <br /><br />

                    <Row>
                        <Col size="md-5">
                            <div className="panel panel-default panel-primary">
                                <div className="panel-heading">
                                    <h3 className="panel-title">My Posts</h3>
                                </div>
                                <div className="panel-body scroll">
                                    <p style={{textAlign: "center", fontStyle: "italic", color: "black"}}>No Posts to Display</p>
                                </div>
                            </div>
                        </Col>
                        <Col size="md-2">
                            <div className="wrapper">

                                <InputModal>
                                    <h2 className="whiteText">Add/Update User Information</h2>
                                        <Input
                                            name="name"
                                            value={this.state.name}
                                            onChange={this.handleInputChange}
                                            placeholder="Name (required)"
                                        />
                                        <Input
                                            name="address"
                                            value={this.state.address}
                                            onChange={this.handleInputChange}
                                            placeholder="Address (required)"
                                        />
                                        <Input
                                            name="city"
                                            value={this.state.city}
                                            onChange={this.handleInputChange}
                                            placeholder="City (required)"
                                        />
                                        <Input
                                            name="state"
                                            value={this.state.state}
                                            onChange={this.handleInputChange}
                                            placeholder="State (required)"
                                        />
                                        <Input
                                            name="zipCode"
                                            value={this.state.zipCode}
                                            onChange={this.handleInputChange}
                                            placeholder="Zip Code (required)"
                                        />
                                        <Input
                                            name="phoneNumber"
                                            value={this.state.phoneNumber}
                                            onChange={this.handleInputChange}
                                            placeholder="Phone Number (required)"
                                        />
                                        <div style={{ textAlign: "right" }}>
                                            <button style={{ marginRight: "5px" }} onChange={this.handleInputChange} onClick={this.handleFormSubmit} className="blueBtn">Submit</button>
                                            <button className="blueBtn" onClick={this.closeModal}>Close</button>
                                        </div>
                                </InputModal>
                            </div>
                            <div className="whiteText">
                                <h4>{this.state.name}</h4>
                                <h4>{this.state.address}</h4>
                                <h4>{this.state.city}</h4>
                                <h4>{this.state.state}</h4>
                                <h4>{this.state.zipCode}</h4>
                                <h4>{this.state.phoneNumber}</h4>
                            </div>

                        </Col>
                        <Col size="md-5">
                            <div className="panel panel-default panel-primary">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Favorites</h3>
                                </div>
                                <div className="panel-body scroll">
                                    <p style={{textAlign: "center", fontStyle: "italic", color: "black"}}>No Favorites to Display</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default Profile;
