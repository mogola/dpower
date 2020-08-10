import React from 'react';
import AnimationTypeWrapper from './AnimationTypeWrapper'

import {
    Columns,
    Container,
    Heading,
    Section,
    Hero,
    Icon
} from 'react-bulma-components'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCoffee, faBrain, faGrin, faTrophy, faHeart, faGrinStars, faHandsHelping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import PropTypes from 'prop-types'

library.add(fab, faBrain, faCoffee, faGrin, faTrophy, faHeart, faGrinStars, faHandsHelping)

//content Global

const SectionContainer = ({ srcImage, color, size, title, content, position, align = "left", icon = false, typeAnimation = "Slide", typeAnimationContent = "Zoom" }) => {
    const ContentInfo = () => {
        return (
            <div className="txtAss">
                <Section style={{ "textAlign": align }} size="large">
                    <div>
                        {icon &&
                            <Icon size="large" className="i-home" color="black">
                                <FontAwesomeIcon icon="hands-helping" size="3x" />
                            </Icon>
                        }
                        <Heading style={{ "textAlign": align }} className="title--large is-size-3-mobile" weight="bold" spaced={true} size={1}>
                            {title}
                        </Heading>
                        <Heading subtitle>
                            {content}
                        </Heading>
                    </div>
                </Section>
            </div>
        )
    }

    const ElementImage = () =>{
        return(
            <figure className="image imageW">
                <img
                    src={srcImage}
                    rel="preload"
                    loading="lazy"
                    className="imageW"
                    alt=""
                />
            </figure>)
    }
    const ContentImage = ({ direction, ...rest }) => {
        return (
            <Columns.Column>
                <AnimationTypeWrapper
                    type={typeAnimation}
                    {...rest}
                    children={<ElementImage />}
                />
            </Columns.Column>
        );
    }

    return (
        <div>
            <Section size={size} style={{ padding: 0 }}>
                <Hero color={color} gradient>
                    <Hero.Body>
                        <Container>
                            <Columns centered={true} style={{ alignItems: "center" }}>
                                {position == 0 &&
                                    <ContentImage left />
                                }
                                <Columns.Column>
                                    {position == 0 &&
                                        <AnimationTypeWrapper
                                            type={typeAnimationContent}
                                            children={<ContentInfo />}
                                        />
                                    }
                                    {position !== 0 &&
                                        <AnimationTypeWrapper
                                            type={typeAnimationContent}
                                            children={<ContentInfo />}
                                        />
                                    }
                                </Columns.Column>
                                {position == 1 &&
                                    <ContentImage right />
                                }
                            </Columns>
                        </Container>
                    </Hero.Body>
                </Hero>
            </Section>
        </div>
    );
}
// proptype to delete error message on console
Hero.propTypes = {
    color: PropTypes.string
}

Icon.propTypes = {
    color: PropTypes.string.isRequired
}


export default SectionContainer