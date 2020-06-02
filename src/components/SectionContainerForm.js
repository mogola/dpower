import React from 'react';
import AnimationTypeWrapper from './AnimationTypeWrapper'

import {
    Columns,
    Container,
    Image,
    Section,
    Hero,
    Icon,
} from 'react-bulma-components'

import PropTypes from 'prop-types'

const onChangeInput = (event) => {
    console.log(event)
}

const ContentImage = ({ srcImage, typeAnimation = "Slide", ...rest }) => {
    return (
        <Columns.Column>
            <AnimationTypeWrapper
                type={typeAnimation}
                {...rest}
                children={<Image src={srcImage} width="" className="imageW" />}
            />
        </Columns.Column>
    );
}

const SectionContainerForm = ({ children, srcImage, color, size, position, align = "left", icon = false }) => {
    return (
        <div>
            <Section size={size} style={{ padding: 0 }}>
                <Hero color={color} gradient>
                    <Hero.Body>
                        <Container>
                            <Columns className="contact-fl" centered={true} style={{ alignItems: "center" }}>
                                {position == 0 &&
                                    <ContentImage srcImage={srcImage} left />
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
                                        <ContentImage srcImage={srcImage} right />
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

export default SectionContainerForm