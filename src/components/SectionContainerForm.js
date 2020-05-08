import React, { useRef, useEffect, useCallback, useState, useReducer, useMemo } from 'react';

import {
    Button,
    Navbar,
    Columns,
    Container,
    Image,
    Heading,
    Section,
    Hero,
    Icon,
    Footer,
    Content,
    Form
} from 'react-bulma-components'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCoffee, faBrain, faGrin, faTrophy, faHeart, faGrinStars, faHandsHelping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import PropTypes from 'prop-types'

//animation global
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'

library.add(fab, faBrain, faCoffee, faGrin, faTrophy, faHeart, faGrinStars, faHandsHelping)

const onChangeInput = (event) => {
    console.log(event)
}

const SectionContainerForm = ({ children, srcImage, color, size, position, align = "left", icon = false }) => {
    return (
        <div>
            <Section size={size} style={{ padding: 0 }}>
                <Hero color={color} gradient>
                    <Hero.Body>
                        <Container>
                            <Columns centered={true} style={{ alignItems: "center" }}>
                                {position == 0 &&
                                    <Columns.Column>
                                        <Image src={srcImage} width="" className="imageW" />
                                    </Columns.Column>
                                }
                                <Columns.Column>
                                    <div className="txtAss">
                                        <Section style={{ "textAlign": align }} size="large">
                                            {children.map((component, i) => (
                                                <React.Fragment key={i}>
                                                    {component}
                                                </React.Fragment>
                                            ))}
                                        </Section>
                                    </div>
                                </Columns.Column>
                                {position == 1 &&
                                    <Columns.Column>
                                        <Image src={srcImage} width="" className="imageW" />
                                    </Columns.Column>
                                }
                            </Columns>
                        </Container>
                    </Hero.Body>
                </Hero>
            </Section>
        </div>
    );
}

Hero.propTypes = {
    color: PropTypes.string
}


Icon.propTypes = {
    color: PropTypes.string.isRequired
}

export default SectionContainerForm