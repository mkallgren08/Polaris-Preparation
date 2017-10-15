import React from "react";
import Col from "../../components/Grid/Col";
import Row from "../../components/Grid/Row";
import Container from "../../components/Grid/Container";
import { Link } from "react-router-dom";
import "./Blog.css";


const Blog = () =>
  <div>
    <Container fluid>
      <Row>
        <Col size="md-1" />
        <Col size="md-4">
          <h1 className="pageHeader">Emergency Prep Blog</h1>
        </Col>
        <Col size="md-7" />
      </Row>
      <Row>
        <Col size="md-4">
          <div className="wrapper">
            <Link to="/hurricane" className="whiteText">
              <img className="blogImg" src="./images/hurricane.jpg" alt="Hurricane" />
              <br />
              Hurricane
            </Link>
          </div>
        </Col>
        <Col size="md-4">
          <div className="wrapper">
            <Link to="/tornado" className="whiteText">
              <img className="blogImg" src="./images/tornado.jpg" alt="Tornado" />
              <br />
              Tornado
            </Link>
          </div>
        </Col>
        <Col size="md-4">
          <div className="wrapper">
            <Link to="/blizzard" className="whiteText">
              <img className="blogImg" src="./images/blizzard.jpg" alt="blizzard" />
              <br />
              Blizzard
            </Link>
          </div>
        </Col>

      </Row>
      <Row>
        <Col size="md-4">
          <div className="wrapper">
            <Link to="/tsunami" className="whiteText">
              <img className="blogImg" src="./images/tsunami.jpg" alt="tsunami" />
              <br />
              Tsunami
            </Link>
          </div>
        </Col>
        <Col size="md-4">
          <div className="wrapper">
            <Link to="/fire" className="whiteText">
              <img className="blogImg" src="./images/fire.jpg" alt="wild fire" />
              <br />
              Wild Fire
            </Link>
          </div>
        </Col>
        <Col size="md-4">
          <div className="wrapper">
            <Link to="volcano" className="whiteText">
              <img className="blogImg" src="./images/volcano.jpg" alt="volcano" />
              <br />
              Volcanic Eruption
            </Link>
          </div>
        </Col>

      </Row>
      <br /> <br />
    </Container>
  </div>
export default Blog;
