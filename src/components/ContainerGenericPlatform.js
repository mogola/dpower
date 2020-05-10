import React from 'react';
import AnimationTypeWrapper from './AnimationTypeWrapper'

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

const ContentGeneric = ({ childrenIcon, classes, size = 'large', iconName, color, sizeIcon, text }) => {
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

const ContainerPlatform = () => {
    //brain , sizeIcon = 6x, classes = upper-home upper-home-margin, color = twitter'
    return (
        <Section className="neutral" size="medium">
            <Container style={{ textAlign: "center" }}>
                <Heading style={{ marginBottom: 50 }} size={1} className="upper-home is-size-3-mobile" renderAs="p">Nos expertises</Heading>
                <Columns centered={true} style={{ paddingTop: 50, alignItems: "center" }}>
                    {ICONBRAND.map((ico, i) => (
                        <Columns.Column size={4} key={i} >
                            <AnimationTypeWrapper
                                type="Slide"
                                top
                                children={
                                    <ContentGeneric
                                        color="twitter"
                                        text={ico.text}
                                        childrenIcon={
                                            <FontAwesomeIcon icon={['fab', `${ico.nameicon}`]} size="6x" />
                                        }
                                        classes="upper-home upper-home-margin "
                                    />}
                            />
                        </Columns.Column>
                    ))}
                </Columns>
            </Container>
        </Section >
    );
}

Icon.propTypes = {
    color: PropTypes.string.isRequired
}

export default ContainerPlatform