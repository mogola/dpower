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
                                <strong>First Digital</strong> by <a href="/">Dewalgo</a>. The source code is licensed
                  <a href="/">MIT</a>. The website content
                is licensed <a href="/">CC BY FIRST DIGITAL</a>.
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