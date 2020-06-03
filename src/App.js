//import Loadable from 'react-loadable';
import loadable from '@loadable/component';
import React, { Component } from 'react';
//import NavBarGeneric from './components/NavBar'
//import FooterContainer from './components/Footer'
import { themeContext, themes, getTheme } from './context/theme-context'

import { Switch, Redirect, BrowserRouter as Router, Route } from "react-router-dom"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
// Define all Route
import getRoute from './components/Route/Router'

const loading = () => {
  return <div>Loading...</div>
}
const Loading = () => <div>Loading...</div>
const NavBarGeneric = loadable(() => import('./components/NavBar'), {
  LoadingComponent: Loading,
})
const FooterContainer = loadable(() => import('./components/Footer'))
// const NavBarGeneric = Loadable({
//   loader: () => import('./components/NavBar'),
//   loading: loading
// });

const colorNameTheme = 'twitter'

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <themeContext.Provider value={{ colorTheme: getTheme(colorNameTheme) }}>
            {/* <Navigation> */}
            <ToastContainer />
            <NavBarGeneric colorTheme={getTheme(colorNameTheme)} />
            {getRoute.map((routeApp, i) => (
              routeApp.hasOwnProperty("exact") &&
              <Route
                exact
                key={routeApp.key || routeApp.path}
                path={routeApp.path}>{routeApp.component}</Route>

            ))}

            {/* {getRoute.map((routeApp, i) => (
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
            ))} */}
            {getRoute.map((routeApp, i) => (
              !routeApp.hasOwnProperty("exact") &&
              <Route
                key={routeApp.key || routeApp.path}
                path={routeApp.path}>{routeApp.component}</Route>
            ))}
            <FooterContainer />
            {/* </Navigation> */}
          </themeContext.Provider>
        </Switch>
      </Router>
    );
  }
}

export default App;
