import React from 'react';
import AnimationTypeWrapper from './AnimationTypeWrapper'
import { themeContext } from './../context/theme-context'

import {
    Columns,
    Container,
    Heading,
    Section,
    Icon,
} from 'react-bulma-components'

import {
    ICON
} from './../constants';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCoffee, faBrain, faGrin, faTrophy, faHeart, faGrinStars, faHandsHelping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import PropTypes from 'prop-types'

library.add(fab, faBrain, faCoffee, faGrin, faTrophy, faHeart, faGrinStars, faHandsHelping)

const ContentGeneric = ({ childrenIcon, classes, size = 'large', iconName, color = "black", sizeIcon, text }) => {
    return (
        <div>
            <Icon
                size={size}
                className={`i-home ${iconName}`}
                color={color}>
                {childrenIcon}
            </Icon>
            <Heading className={classes} size={5} renderAs="h2">{text}</Heading>
        </div>
    )
}

const ContainerGeneric = ({ color = 'twitter' }) => {
    //brain , sizeIcon = 6x, classes = upper-home upper-home-margin, color = twitter'

    return (
        <themeContext.Consumer>
            {({ colorTheme }) => (
                <Section className="neutral" size="medium">
                    <Container style={{ textAlign: "center" }}>
                        <Heading style={{ marginBottom: 50 }} size={1} className="upper-home is-size-3-mobile" renderAs="p">Notre vision avec 5 règles simples</Heading>
                        <Columns centered={true} style={{ paddingTop: 50, alignItems: "center" }}>
                            {ICON.map((ico, i) => (
                                <Columns.Column size={4} key={i} >
                                    <AnimationTypeWrapper
                                        type="Slide"
                                        top
                                        children={
                                            <ContentGeneric
                                                color={color}
                                                text={ico.text}
                                                childrenIcon={
                                                    <FontAwesomeIcon icon={ico.nameicon} size="6x" />
                                                }
                                                classes="upper-home upper-home-margin "
                                            />}
                                    />
                                </Columns.Column>
                            ))}
                        </Columns>
                    </Container>
                </Section>)}
        </themeContext.Consumer>
    );
}

Icon.propTypes = {
    color: PropTypes.string
}

export default ContainerGeneric