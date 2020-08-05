//import Loadable from 'react-loadable';
import React, { Component } from 'react';
import { themeContext, themes, getTheme, getThemeHexa } from './context/theme-context'
import { Switch, Redirect, BrowserRouter as Router, Route } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import ChatBot from 'react-simple-chatbot';
const endPoint = process.env.REACT_APP_API_URL
// Define all Route
import getRoute from './components/Route/Router'
const Loading = () => <div>Loading...</div>
// const NavBarGeneric = loadable(() => import('./components/NavBar'), {
//   LoadingComponent: Loading,
// })

// const NavBarGeneric = Loadable({
//   loader: () => import('./components/NavBar'),
//   loading: loading
// });

const colorNameTheme = 'twitter'
const colorNameTheme2 = 'gold'

const getEmailChatBox = ({steps, values}) => {
    console.log(steps);
    console.log(values);
    console.log(`Chat handleEnd callback! Value Email: ${values.pop()}`);

    try {
      console.log(steps["project"].value ,steps["budget"].value, steps["email"].value);
      fetch(endPoint + '/emailcontact',
          {
              method: 'POST',
              body: JSON.stringify({
                  email: steps["email"].value,
                  option: steps["project"].value,
                  content: steps["budget"].value
              }),
              headers: {
                  'Access-Control-Allow-Origin': '*',
                  'Content-Type': 'application/json'
              }
           })
    }
    catch (err) {
      console.log('error envoie email', err)
  }

}
class App extends Component {

  render() {
    return (
      <Router>
          <Switch>
            <themeContext.Provider value={{
              colorTheme: getTheme(colorNameTheme),
              colorTheme2: getTheme(colorNameTheme2),
              colorThemeHexa: getThemeHexa(colorNameTheme),
              colorTheme2Hexa: getThemeHexa(colorNameTheme2),
              theme: themes
              }}>
              {/* <Navigation> */}
              <ToastContainer />
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
              <ChatBot
              handleEnd={getEmailChatBox}
              floating={true}
              floatingStyle={{background: "#FF2D00"}}
              bubbleStyle={{background: "#FF2D00", fontWeight:"bold"}}
              bubbleOptionStyle={{background: "#11387A", fontWeight:"bold"}}
              enableSmoothScroll={true}
              width={200}
              steps={[
                {
                  id: '1',
                  message: 'Bienvenue, Nous sommes à votre disposition pour vous aider dans vos projets !',
                  trigger: '9',
                },
                {
                  id: '9',
                  message: 'Je suis Uno je suis la pour vous aidez, comment vous appelez-vous ? ',
                  trigger: 'name'
                },
                {
                  id: 'name',
                  user: true,
                  trigger: '5',
                },
                {
                  id: '5',
                  message: 'OK {previousValue} Tout d\'abord aidez-nous à en savoir plus, en quoi puis-je vous aider ?',
                  trigger: 'project',
                },
                {
                  id: 'project',
                  options: [
                    { value: 'Création de site web', label: 'Création de site web', trigger: '7' },
                    { value: 'Sécuriser mon site', label: 'Sécuriser mon site', trigger: '7' },
                    { value: 'Audit de site', label: 'Audit de site', trigger: '7' },
                    { value: 'Conseils', label: 'Conseils', trigger: '7' },
                  ],
                },
                {
                  id: '3',
                  message: 'Nous avons bien reçu votre message. Nous vous répondrons au plus vite. Merci de votre patience. ',
                  end: true,
                },
                {
                  id: '4',
                  message: 'Nous ne faisons plus cette prestations',
                  end: true,
                },
                {
                  id: '6',
                  message: 'Veuillez laisser votre adresse email et nous vous recontacterons le plus vite possible.',
                  trigger: 'email'
                },
                {
                  id: 'email',
                  user: true,
                  trigger : 'end'
                },
                {
                  id : 'end',
                  message : 'Nous avons bien pris en compte votre email {previousValue} et reçu votre message. Nous vous recontacterons dans les plus brefs délais.',
                  end: true
                },
                {
                  id: '7',
                  message: 'Quelle est votre budget ?',
                  trigger: 'budget'
                },
                {
                  id: 'budget',
                  options: [
                    { value:'< 500 €', label: '< 500 €', trigger: '6' },
                    { value: 'entre 500 € et 5000 €', label: 'entre 500 € et 5000 €', trigger: '6' },
                    { value: 'entre 5000 € et 10000 €', label: 'entre 5000 € et 10000 €', trigger: '6' },
                    { value: 'Pas de budget défini', label: 'Pas de budget défini', trigger: '6' },
                  ]
                }
                ]} />
              {/* </Navigation> */}
            </themeContext.Provider>
          </Switch>
      </Router>
    );
  }
}

export default App;
