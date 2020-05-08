import React from 'react';

import {
    Container,
    Hero,
    Footer,
    Content
} from 'react-bulma-components'

import {
    CONSTANT,
} from './../constants';

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
                                <strong>First Digital</strong> by <a href="http://jgthms.com">Dewalgo</a>. The source code is licensed
                  <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
                is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY FIRST DIGITAL</a>.
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