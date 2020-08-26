import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import AnimationTypeWrapper from './AnimationTypeWrapper'

import {
    Columns,
    Container,
    Heading,
    Section,
    Hero,
    Button,
    Icon
} from 'react-bulma-components'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCoffee, faBrain, faGrin, faTrophy, faHeart, faGrinStars, faHandsHelping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import PropTypes from 'prop-types'

library.add(fab, faBrain, faCoffee, faGrin, faTrophy, faHeart, faGrinStars, faHandsHelping)

import {
    htmlParse,
} from './../constants';

let txt;
let stringToHTML = (str) => {
	let xmlString = str;
    let doc = new DOMParser().parseFromString(xmlString, "text/html");
	return <div>{doc.body.innerHTML}</div>;
}
//content Global
const SectionContainer = ({ srcImage, color, size, title, content, position, align = "left", icon = false, fullImage = false, typeAnimation = "Slide", typeAnimationContent = "Zoom" }) => {
    const [txtHome, setTxtHome] = useState('');

    useEffect(() => {
        setTxtHome(htmlParse.homepage)
        console.log('txt doc', txtHome, typeof txt)
    }, [])

    let overStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '50%',
        textAlign: 'left',
        transform: 'translateY('+ "-50%" +')',
        top: '50%',
        fontSize: '40px'
    }
    let defaultCss = {
        textAlign: "left"
    }

    const ContentHome = ({content}) => {
        return (
            <>
                <div dangerouslySetInnerHTML={{ __html: content }}></div>
            </>
        );
    }

    const ContentInfo = () => {
        return (
            <div className="txtAss">
                <Section className={fullImage ? "sectionFullImage" : '' } style={{ "textAlign": align }} size="large">
                    <div>
                        {icon &&
                            <Icon size="large" className="i-home" color="black">
                                <FontAwesomeIcon icon="hands-helping" size="3x" />
                            </Icon>
                        }
                        {
                            fullImage && <img className="fullImage" src={srcImage} />
                        }
                        <Heading style={fullImage ? {} : {"textAlign": align}} className={fullImage ? "fullTitle" : 'title--large is-size-3-mobile'} weight="bold" spaced={true} size={1}>
                            {title}
                            {fullImage &&
                            <>
                                <ContentHome
                                    content={txtHome}
                                />
                                <Button
                                id="contactUs"
                                name="contactUs"
                                className="is-info is-white is-inverted button is-large"
                                onClick={() => {
                                    FB.AppEvents.logEvent("Contact")
                                }}
                                >
                                    <Link to="/contact">Contactez-nous</Link>
                                </Button>
                            </>
                            }
                        </Heading>
                        <Heading subtitle>
                            {content}
                        </Heading>
                    </div>
                </Section>
            </div>
        )
    }

    const ElementImage = () => {
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
            <Section className={fullImage ? "sectionParentFullImage" : '' } size={size} style={{ padding: 0 }}>
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