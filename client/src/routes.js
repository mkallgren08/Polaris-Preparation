import React from 'react';
import { Redirect, Route, Router } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Ping from './ping/ping';
import Callback from './Callback/Callback';
import Auth from './auth/auth';
import history from './history';
import Blog from './pages/Blog';
import Resource from './pages/Resource';
import Drone from "./pages/Drone";
import FirstAid from "./pages/FirstAid";
import FoodWater from "./pages/FoodWater";
import Generator from "./pages/Generator";
import Misc from "./pages/Misc";
import Raft from "./pages/Raft";
import Hurricane from "./pages/BlogPages/Hurricane";
import Blizzard from "./pages/BlogPages/Blizzard";
import Wildfire from "./pages/BlogPages/Wildfire";
import Tornado from "./pages/BlogPages/Tornado";
import Tsunami from "./pages/BlogPages/Tsunami";
import Volcano from "./pages/BlogPages/Volcano";
import EmergencyForm from './pages/EmergencyForm/EmergencyForm';
import EmergencyMap from './pages/EmergencyMap/EmergencyMap';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
};

export const makeMainRoutes = () => {
  return (
      <Router history={history} component={App}>
        <div>
          <Route path="/" render={(props) => <App auth={auth} {...props} />} />
          <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
          <Route path="/blog" render={(props) => <Blog auth={auth} {...props} />} />
          <Route path="/resource" render={(props) => <Resource auth={auth} {...props} />} />
          <Route path="/drone" render={(props) => <Drone auth={auth} {...props} />} />
          <Route path="/firstaid" render={(props) => <FirstAid auth={auth} {...props} />} />
          <Route path="/foodwater" render={(props) => <FoodWater auth={auth} {...props} />} />
          <Route path="/generator" render={(props) => <Generator auth={auth} {...props} />} />
          <Route path="/misc" render={(props) => <Misc auth={auth} {...props} />} />
          <Route path="/raft" render={(props) => <Raft auth={auth} {...props} />} />
          <Route path="/hurricane" render={(props) => <Hurricane auth={auth} {...props} />} />
          <Route path="/blizzard" render={(props) => <Blizzard auth={auth} {...props} />} />
          <Route path="/fire" render={(props) => <Wildfire auth={auth} {...props} />} />
          <Route path="/tornado" render={(props) => <Tornado auth={auth} {...props} />} />
          <Route path="/tsunami" render={(props) => <Tsunami auth={auth} {...props} />} />
          <Route path="/volcano" render={(props) => <Volcano auth={auth} {...props} />} />
          <Route path="/profile" render={(props) => (
              !auth.isAuthenticated() ? (
                  <Redirect to="/home"/>
              ) : (
                  <Profile auth={auth} test="foo" {...props} />
              )
          )} />
          <Route path="/ping" render={(props) => (
              !auth.isAuthenticated() ? (
                  <Redirect to="/home"/>
              ) : (
                  <Ping auth={auth} {...props} />
              )
          )} />
          <Route path="/EmergencyForm" render={(props) => (
              !auth.isAuthenticated() ? (
                  <Redirect to='/home'/>
              ) : (
                  <EmergencyForm auth={auth} {...props} />
              )
          )}/>
          <Route path="/EmergencyMap" render={(props) => (
              !auth.isAuthenticated() ? (
                  <Redirect to='/home'/>
              ) : (
                  <EmergencyMap auth={auth} {...props} />
              )
          )}/>
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} />
          }}/>

        </div>
      </Router>
  );
};