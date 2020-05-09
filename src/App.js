import React from 'react';
import NavBarGeneric from './components/NavBar'
import FooterContainer from './components/Footer'

import { Switch, Redirect, Route, BrowserRouter as Router } from "react-router-dom"

// Define all Route
import getRoute from './components/Route/Router'

const App = () => {
  return (
    <Router>
      <NavBarGeneric />
      {getRoute.map((routeApp, i) => (
        <Route
          exact
          key={routeApp.key || routeApp.path}
          path={routeApp.path}
        >
          {routeApp.component}
        </Route>
      ))}
      <FooterContainer />
    </Router>
  );
}

export default App;
