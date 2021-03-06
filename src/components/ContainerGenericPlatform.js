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
    ICONBRAND
} from './../constants';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faWordpress } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import PropTypes from 'prop-types'

library.add(fab, faWordpress)

const ContentGeneric = ({ childrenIcon, classes, size = 'large', iconName, color = 'black', sizeIcon, text }) => {
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

const ContainerPlatform = ({ color = 'twitter', classes }) => {
    //brain , sizeIcon = 6x, classes = upper-home upper-home-margin, color = twitter'
    return (
        <themeContext.Consumer>
            {({ colorTheme }) => (
                <Section className={`neutral ${classes}`} size="medium">
                    <Container style={{ textAlign: "center" }}>
                        <Heading style={{ marginBottom: 50 }} size={1} className="upper-home is-size-3-mobile" renderAs="p">Nos expertises</Heading>
                        <Columns centered={true} style={{ paddingTop: 50, alignItems: "center" }}>
                            {ICONBRAND.map((ico, i) => (
                                <Columns.Column size={2} key={i} >
                                    <AnimationTypeWrapper
                                        type="Slide"
                                        top
                                        children={
                                            <ContentGeneric
                                                color={color}
                                                text={ico.text}
                                                childrenIcon={
                                                    <FontAwesomeIcon icon={['fab', `${ico.nameicon}`]} size="3x" />
                                                }
                                                classes="upper-home upper-home-margin "
                                            />}
                                    />
                                </Columns.Column>
                            ))}
                        </Columns>
                    </Container>
                </Section>
            )}
        </themeContext.Consumer>
    );
}

Icon.propTypes = {
    color: PropTypes.string.isRequired
}

export default ContainerPlatform