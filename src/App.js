import React, { useContext } from 'react';
import NavBarGeneric from './components/NavBar'
import FooterContainer from './components/Footer'
import { themeContext, themes, getTheme } from './context/theme-context'

import { Switch, Redirect, BrowserRouter as Router } from "react-router-dom"

import "react-tiger-transition/styles/main.min.css";
import "./App.css";
import { Navigation, Route, Screen, Link, glide, glideOut } from "react-tiger-transition";

// inject glide styles
glideOut({
  name: 'glide-right',
  direction: 'right'
});

glide({
  name: "glide-right",
  direction: "right",
  enter: {
    duration: 800,
    easing: 'ease',
    opacity: 1,
    zIndex: 2,
    delay: 0,
    scale: 1
  },
  exit: {
    duration: 800,
    easing: 'ease',
    opactiy: 1,
    zIndex: 1,
    delay: 800
  }
})
// Define all Route
import getRoute from './components/Route/Router'

const App = () => {
  const colorNameTheme = 'black'

  return (
    <themeContext.Provider value={{ colorTheme: getTheme(colorNameTheme) }}>
      <Router>
        <Switch>
          <Navigation>
            <NavBarGeneric colorTheme={getTheme(colorNameTheme)} />
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
        </Switch>
      </Router>
    </themeContext.Provider>
  );
}

export default App;
