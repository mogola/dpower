import React from 'react';

import {
    Container,
    Hero,
    Footer,
    Content
} from 'react-bulma-components'

import PropTypes from 'prop-types'

const FooterContainer = () => {
    return (
        <Hero color="white">
            <Hero.Footer>
                <Footer>
                    <Container>
                        <Content style={{ textAlign: 'center' }}>
                            <p>
                                {/* <img src={CONSTANT['logo']} alt="first digital" /> */}
                                <strong>OnFirstDigital &copy;2020-2021 | FRANCE - PARIS | tèl : 07 80 97 50 94</strong> The website contentis licensed <a href="https://www.onfirstdigital.com">CC BY FIRST DIGITAL</a>.
                            </p>
                        </Content>
                    </Container>
                </Footer>
            </Hero.Footer>
        </Hero>
    );
}

Hero.propTypes = {
    color: PropTypes.string
}

export default FooterContainer