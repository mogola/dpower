//import Loadable from 'react-loadable';
import React, { Component } from 'react';
const CC = require("cookieconsent")
import { themeContext, themes, getTheme, getThemeHexa } from './context/theme-context'
import { ThemeProvider } from 'styled-components';
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
// all available props
const CookieConsent = () => {
    window.cookieconsent.initialise({
      container: document.getElementById("content"),
      position: "bottom",
      theme: "edgeless",
      palette:{
      popup: {background: "#081B3B"},
      button: {background: "#FF2D00"},
      },
      revokable:true,
      animateRevokable:true,
      onStatusChange: function(status) {
        // if(this.hasConsented()){

        // } else {

        // }
      console.log(this.hasConsented() ?
        'enable cookies' : 'disable cookies');
      },
      law: {
      regionalLaw: false,
      },
      location: true,
      content: {
        header: 'Les cookies sont utilisés sur le site',
        message: 'Nous utilisons des cookies analytiques et de profilage nous permettant de vous offrir une expérience de navigation personnalisée, de mesurer la performance du site et de lutter contre la fraude. En cliquant sur « Accepter les cookies » ou en poursuivant votre navigation sur le site, vous acceptez le dépôt de ces cookies.',
        dismiss: 'J\'accepte!',
        allow: 'Accepter les cookies',
        deny: 'Décliner les cookies',
        link: 'En savoir plus',
        href: '/mentions_legales',
        close: '&#x274c;',
        policy:'',
        target: '_blank',
       }
    })
}
const txtEmail = (value) => {
  let re = new RegExp('^[a-zA-Z0-9.-]+@[a-zA-Z.]{2,}\.[a-zA-Z]$');
  return re.test(value);
}


const theme = {
  background: '#f5f8fb',
  fontFamily: 'assistantBold',
  headerBgColor: '#FF2D00',
  headerFontColor: '#fff',
  headerFontSize: '20px',
  botBubbleColor: '#FF2D00',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const steps = [
  {
    id: '1',
    message: 'Bienvenue, Nous sommes à votre disposition pour vous aider dans vos projets !',
    trigger: '9',
  },
  {
    id: '9',
    message: 'Je suis Unobis je suis la pour vous aidez, comment vous appelez-vous ? ',
    trigger: 'name'
  },
  {
    id: 'name',
    user: true,
    validator : (value) => {
      if(!value || parseInt(value.length) === 0){
        return 'veuillez entrer votre nom s\'il vous plaît';
      }
      return true;
    },
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
    validator : (value) => {
      if(!value || parseInt(value.length) === 0){
        return "Veuillez entrer une addresse email"
      }
      if(parseInt(value.length) > 0 && txtEmail(value) === false){
        return "Veuillez entrer une addresse email valide";
      }

      return true
    },
    trigger : 'end'
  },
  {
    id : 'end',
    message : 'Nous avons bien pris en compte votre email {previousValue} et reçu votre message. Nous vous recontacterons dans les plus brefs délais.',
    end: true
  },
  {
    id: '7',
    message: 'Avez-vous plus de détails à nous communiquer ?',
    trigger: 'question'
  },
  {
    id: 'budget',
    user: true,
    validator : (value) => {
      if(!value || parseInt(value.length) === 0){
        return 'Veuillez entre les informations nécessaires s\'il vous plaît ?';
      }
      return true;
    },
    trigger: '6'
  },
  {
    id: 'question',
    options: [
      { value: 'Yes', label: 'Oui', trigger: 'budget' },
      { value: 'No', label: 'Non', trigger: '6' }
    ],
  }
  // {
  //   id: 'budget',
  //   options: [
  //     { value:'< 500 €', label: '< 500 €', trigger: '6' },
  //     { value: 'entre 500 € et 5000 €', label: 'entre 500 € et 5000 €', trigger: '6' },
  //     { value: 'entre 5000 € et 10000 €', label: 'entre 5000 € et 10000 €', trigger: '6' },
  //     { value: 'Pas de budget défini', label: 'Pas de budget défini', trigger: '6' },
  //   ]
  // }
]

const colorNameTheme = 'twitter'
const colorNameTheme2 = 'gold'

const getEmailChatBox = ({steps, values}) => {
    console.log(typeof steps);
    console.log(values);
    console.log(steps["email"], steps["email"].value);
    console.log(`Chat handleEnd callback! Value Email: ${values.pop()}`);
    console.log(values.pop());
    let emailValue = values.pop()
    try {
      fetch(endPoint + '/emailcontact',
          {
              method: 'POST',
              body: JSON.stringify({
                  email: emailValue,
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
              <ThemeProvider theme={theme}>
              <ChatBot
              handleEnd={getEmailChatBox}
              floating={true}
              floatingStyle={{background: "#FF2D00"}}
              bubbleStyle={{background: "#FF2D00", fontWeight:"bold"}}
              bubbleOptionStyle={{background: "#11387A", fontWeight:"bold"}}
              enableSmoothScroll={true}
              width={200}
              headerTitle='OnfirstDigital chat'
              steps={steps} />
                </ThemeProvider>
              {/* </Navigation> */}
              {CookieConsent()}
            </themeContext.Provider>
          </Switch>
      </Router>
    );
  }
}

export default App;
