import React from "react";
import Col from "../../components/Grid/Col";
import Row from "../../components/Grid/Row";
import Container from "../../components/Grid/Container";
import { Link } from "react-router-dom";
import "./Resource.css";


const Resource = () =>
    <div>
        <Container fluid>
            <Row>
                <Col size="md-1" />
                <Col size="md-4">
                    <h1 className="pageHeader">Resources</h1>
                </Col>
                <Col size="md-7" />
            </Row>
            <Row>
                <Col size="md-4">
                    <div className="wrapper">
                        <Link to="/drone" className="whiteText">
                            <img className="resourceImg" src="./images/drone.jpg" alt="drone" />
                            <br />
                            Drones
                         </Link>
                    </div>
                </Col>
                <Col size="md-4">
                    <div className="wrapper">
                        <Link to="./firstaid" className="whiteText">
                            <img className="resourceImg" src="./images/firstAid.png" alt="First Aid" />
                            <br />
                            First Aid
                        </Link>
                    </div>
                </Col>
                <Col size="md-4">
                    <div className="wrapper">
                        <Link to="/raft" className="whiteText">
                            <img className="resourceImg" src="./images/boats.jpg" alt="Rafts" />
                            <br />
                            Rafts
                        </Link>
                    </div>
                </Col>

            </Row>
            <Row>
                <Col size="md-4">
                    <div className="wrapper">
                        <Link to="/foodwater" className="whiteText">
                            <img className="resourceImg" src="./images/foodAndWater.svg" alt="Food/Water" />
                            <br />
                            Food/Water
                        </Link>
                    </div>
                </Col>
                <Col size="md-4">
                    <div className="wrapper">
                        <Link to="/generator" className="whiteText">
                            <img className="resourceImg" src="./images/generator.jpg" alt="Generator" />
                            <br />
                            Generator
                        </Link>
                    </div>
                </Col>
                <Col size="md-4">
                    <div className="wrapper">
                        <Link to="/misc" className="whiteText">
                            <img className="resourceImg" src="./images/general.ico" alt="General" />
                            <br />
                            Miscellaneous
                        </Link>
                    </div>
                </Col>
            </Row>
            <br /> <br />
        </Container>
    </div>

export default Resource;