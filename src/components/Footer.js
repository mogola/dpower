import React from 'react';

import { themeContext } from './../context/theme-context'
import LogoFirst from './LogoFirst'
import { Link } from "react-router-dom";
import {
    Container,
    Hero,
    Footer,
    Content
} from 'react-bulma-components'

import PropTypes from 'prop-types'

const FooterContainer = ({colorTheme = 'white'}) => {
    return (
        <themeContext.Consumer>
        {({colorThemeHexa }) => (
            <Hero color={colorTheme}>
                <Hero.Footer>
                    <Footer>
                        <Container>
                            <Content style={{ textAlign: 'center' }}>
                                <LogoFirst classes="mainFooterLogo" color="#ffffff"/>
                                    <p><strong>OnFirstDigital</strong> &copy;2020-2021 </p>
                                    <p>Email: <strong><a href="mailto:contact@onfirstdigital.com">contact@onfirstdigital.com</a></strong></p><p> FRANCE - PARIS </p>
                                    <p> Phone : <strong>07 80 97 50 94</strong></p>
                                    <p>The website content is licensed <a href="https://www.onfirstdigital.com">CC BY FIRST DIGITAL.</a></p>
                                    <p><Link to="/mentions_legales">Politique de confidentialité</Link> | <Link to="/cgv">Conditions générales de ventes</Link></p>
                                    <button onClick={() => {
                                        FB.AppEvents.logEvent("buttonClicked")
                                        console.log('button clicked')
                                    }}>
                                        Click me
                                    </button>
                            </Content>
                        </Container>
                    </Footer>
                </Hero.Footer>
            </Hero>
        )}
        </themeContext.Consumer>
    );
}

Hero.propTypes = {
    color: PropTypes.string
}

export default FooterContainer