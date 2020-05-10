import React from 'react';
import NavBarGeneric from './components/NavBar'
import FooterContainer from './components/Footer'

import { Switch, Redirect, BrowserRouter as Router } from "react-router-dom"

import "react-tiger-transition/styles/main.min.css";
import { Navigation, Route, Screen, Link, glide } from "react-tiger-transition";

// inject glide styles
glide({
  name: 'glide-left'
});
glide({
  name: 'glide-right',
  direction: 'right'
});

// Define all Route
import getRoute from './components/Route/Router'

const App = () => {
  return (
    <Router>
      <Navigation>
        <NavBarGeneric />
        {getRoute.map((routeApp, i) => (
          routeApp.hasOwnProperty("exact") &&
          <Route
            key={routeApp.key || routeApp.path}
            path={routeApp.path}
            exact
            screen
            screenProps={{
              style: routeApp.screenProps
            }}
          >
            {routeApp.component}
          </Route>
        ))}

        {getRoute.map((routeApp, i) => (
          !routeApp.hasOwnProperty("exact") &&
          <Route
            key={routeApp.key || routeApp.path}
            path={routeApp.path}
            screen
            screenProps={{
              style: routeApp.screenProps
            }}
          >
            {routeApp.component}
          </Route>
        ))}
        <FooterContainer />
      </Navigation>
    </Router>
  );
}

export default App;
