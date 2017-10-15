import React, { Component } from 'react';
import { Navbar, Button, Row, Col } from 'react-bootstrap';
import './App.css';

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <Navbar fluid className="NavbarCustom">
          {/* <Navbar.Header> */}
          <Row>
            <Col md={2}>
              <Row>
                <Col md={8}>
                  <a href="/home" className="navBrandWrapper" >
                    <div className="navBrand">
                      Polaris
                    </div>
                  </a>
                </Col>
                <Col md={4}>
                  <a href="/home" className="navGitWrapper" >
                    <div className="navGit">
                      Git Hub
                    </div>
                  </a>
                </Col>
              </Row>
            </Col>
            <Col md={1} />
            <Col md={9}>
              <div className="navWrapper">
                <Button
                  //bsStyle="primary"
                  //style={{ margin: "7px" }}
                  className="navButton navHome"
                  onClick={this.goTo.bind(this, 'home')}
              >
                Home
              </Button>

              {/* {
                !isAuthenticated() && (
                    <Button
                        bsStyle="primary"
                        className="btn-margin"
                        onClick={this.login.bind(this)}
              } */}

                <Button
                  //bsStyle="primary"
                  //style={{ margin: "7px" }}
                  className="navButton "
                  onClick={this.goTo.bind(this, 'resource')}
                >
                  Resources
              </Button>
                <Button
                  //bsStyle="primary"
                  //style={{ margin: "7px" }}
                  className="navButton "
                  onClick={this.goTo.bind(this, 'blog')}
                >
                  Blogs
              </Button>
                {
                  !isAuthenticated() && (
                    <Button
                      //bsStyle="primary"
                      //style={{ margin: "7px" }}
                      className="navButton navLoginOut"
                      onClick={this.login.bind(this)}
                    >
                      Log In
                    </Button>
                )
              }
              {
                isAuthenticated() && (
                    <Button
                      //bsStyle="primary"
                      //style={{ margin: "7px" }}
                      className="navButton "
                      onClick={this.goTo.bind(this, 'profile')}
                    >
                      Profile
                    </Button>
                )
              }
              {
                isAuthenticated() && (
                    <Button
                      //bsStyle="primary"
                      //style={{ margin: "7px" }}
                      className="navButton "
                      onClick={this.goTo.bind(this, 'emergencyform')}
                    >
                      EmergencyForm
                    </Button>
                  )
                }
                {
                  isAuthenticated() && (
                    <Button
                      //bsStyle="primary"
                      //style={{ margin: "7px" }}
                      className="navButton "
                      onClick={this.goTo.bind(this, 'emergencymap')}
                    >
                      EmergencyMap
                    </Button>
                  )
                }
                {
                  isAuthenticated() && (
                    <Button
                      //bsStyle="primary"
                      //style={{ margin: "7px" }}
                      className="navButton "
                      onClick={this.goTo.bind(this, 'ping')}
                    >
                      Ping
                    </Button>
                  )
                }
                {
                  isAuthenticated() && (
                    <Button
                      //bsStyle="primary"
                      //style={{ margin: "7px" }}
                      className="navButton navLoginOut"
                      onClick={this.logout.bind(this)}
                    >
                      Log Out
                    </Button>
                  )
                }
              </div>
            </Col>
          </Row>
          {/* </Navbar.Header> */}
        </Navbar>

      </div>
    );
  }
}

export default App;