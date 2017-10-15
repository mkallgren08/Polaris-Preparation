import React, { Component } from "react";
import API from "../../utils/API";
import Col from "../../components/Grid/Col";
import Row from "../../components/Grid/Row";
import Container from "../../components/Grid/Container";
import Input from "../../components/Form/Input";
import List from "../../components/List/List";
import ListItem from "../../components/List/ListItem";
import { Link } from "react-router-dom";
import InputModal from "../../components/Modal/inputModal";


class Raft extends Component {

    state = {
        rafts: [],
        name: "",
        zipCode: "",
        phoneNumber: "",
        comment: "",
    }

    componentDidMount() {
        this.loadRafts();
    }

    loadRafts = () => {
        API.getRafts()
            .then(res =>
                this.setState({ rafts: res.data, name: "", zipCode: "", phoneNumber: "", comment: "" })
            ).catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.name && this.state.zipCode && this.state.phoneNumber && this.state.comment) {
            API.saveRaft({
                name: this.state.name,
                zipCode: this.state.zipCode,
                phoneNumber: this.state.phoneNumber,
                comment: this.state.comment
            }).then(res => this.loadRafts())
                .catch(err => console.log(err));
        }
    }

    render() {
        return (
            <div>
                <Container fluid>
                    <Row>
                        <Col size="md-1" />
                        <Col size="md-4">
                            <h1 style={{textAlign: "center", textDecoration: "underline"}}>Rafts</h1>
                        </Col>
                        <Col size="md-7" />
                    </Row>
                    <Row>
                        <h4>View rafts available in your area. Click the 'Add/Update' button to add your raft to the list.</h4> 
                    </Row>
                    <br />

                    <div className="wrapper">
                        <InputModal>
                            <h2 className="pageHeader">
                                Add Your Raft
                            </h2>
                            
                                <Input
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.handleInputChange}
                                    placeholder="Name (required)"
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
                                <textarea
                                    style={{ width: "500px", height: "175px" }}
                                    name="comment"
                                    value={this.state.comment}
                                    onChange={this.handleInputChange}
                                    placeholder="Comment (required)"
                                />
                                <div style={{ textAlign: "right" }}>
                                    <button style={{ marginRight: "5px" }} onChange={this.handleInputChange} onClick={this.handleFormSubmit} className="blueBtn">Submit</button>
                                    <button className="blueBtn" onClick={this.closeModal}>Close</button>
                                </div>
                            
                        </InputModal>
                    </div>
                    <br />
                    <Row>
                        <Col size="md-2" />
                        <Col size="md-8">
                            <div className="panel panel-default panel-primary">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Available Rafts</h3>
                                </div>
                                <div className="panel-body scroll">
                                    {this.state.rafts ? (
                                        <List>
                                            {this.state.rafts.map(raft => (
                                                <ListItem key={Raft._id}>
                                                    <Link to={"/Rafts/" + raft._id}>
                                                        <strong>
                                                            {raft.name} <br />
                                                            {raft.zipCode} <br />
                                                            {raft.phoneNumber} <br />
                                                            {raft.comment}
                                                        </strong>
                                                    </Link>
                                                    <button className="blutBtn btn btn-default" onClick={() => this.handleFormSubmit(raft._id)}>Save</button>
                                                </ListItem>
                                            ))}
                                        </List>
                                    ) : (
                                            <h3>No Results to Display</h3>
                                        )}
                                </div>
                            </div>
                        </Col>
                        <Col size="md-2" />
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Raft;