import React, { useRef, useEffect, useCallback, useState, useReducer, useMemo } from 'react';
import reducer, { init } from './../../reducer/useReducer'

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

import {
    CONSTANT,
    LOGO,
    ressources
} from './../../constants';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCoffee, faBrain, faGrin, faTrophy, faHeart, faGrinStars, faHandsHelping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import PropTypes from 'prop-types'

library.add(fab, faBrain, faCoffee, faGrin, faTrophy, faHeart, faGrinStars, faHandsHelping)

console.log('logo', CONSTANT, LOGO, ressources);

const { Input, Field, Control, Label, Help, InputFile, Select, CheckboxControlled, Textarea, RadioGroup } = Form;

const SectionContainer = ({ srcImage, color, size, title, content, position, align = "left", icon = false }) => {
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
                                            {icon &&
                                                <Icon size="large" className="i-home" color="black">
                                                    <FontAwesomeIcon icon="hands-helping" size="6x" />
                                                </Icon>
                                            }
                                            <Heading style={{ "textAlign": align }} className="title--large is-size-2-mobile" weight="bold" spaced={true} size={1}>
                                                {title}
                                            </Heading>
                                            <Heading subtitle>
                                                {content}
                                            </Heading>
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
const onChangeInput = (event) => {
    console.log(event)
}
const FormContact = ({ title, content, align = "center" }) => {
    const [inputValue, SetValue] = useState('enter your email')

    return (
        <div>
            <form>
                <Heading style={{ "textAlign": align }} className="title--large" weight="bold" spaced={true} size={1}>
                    {title}
                </Heading>
                <Heading subtitle>
                    {content}
                </Heading>
                <div className="field">
                    <label className="label">Votre email</label>
                    <div className="control">
                        <input onChange={(event) => SetValue(event.target.value)}
                            className="input"
                            type="text"
                            placeholder="Email" />
                    </div>
                </div>
                <div className="field">
                    <label className="label">L'objet de la demande</label>
                    <div className="control">
                        <div className="select">
                            <select>
                                <option>Développement web</option>
                                <option>Sécurité web</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Message</label>
                    <div className="control">
                        <textarea className="textarea" placeholder="Textarea"></textarea>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <label className="checkbox">
                            <input type="checkbox" />
                                I agree to the <a href="#">terms and conditions</a>
                        </label>
                    </div>
                </div>
                <div className="field is-grouped">
                    <div className="control">
                        <button className="button is-link">Submit</button>
                    </div>
                </div>
            </form>
        </div >
    );
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

const SectionContainerRight = () => {
    return (
        <Section size="medium" style={{ padding: 0 }}>
            <Hero color="twitter" gradient>
                <Hero.Body style={{ padding: 0, margin: 0 }}>
                    <Container breakpoint="fullhd" fluid={true} style={{ padding: 40, margin: 0 }}>
                        <Columns gapless={true} centered={true} style={{ alignItems: "center" }}>
                            <Columns.Column>
                                <Image src={CONSTANT['web2']} width="500" className="imageW" />
                            </Columns.Column>
                            <Columns.Column>
                                <div className="txtAd">
                                    <Heading>Section</Heading>
                                    <Heading subtitle>
                                        A simple container to divide your page into <strong>sections</strong>, like the one you are currently reading
                                    </Heading>
                                    <Button color="primary">Bulma button</Button>
                                </div>
                            </Columns.Column>
                        </Columns>
                    </Container>
                </Hero.Body>
            </Hero>
        </Section>
    );
}

const ContainerGeneric = () => {
    return (
        <Section className="neutral" size="medium">
            <Container style={{ textAlign: "center" }}>
                <Heading style={{ marginBottom: 50 }} size={1} className="upper-home" renderAs="p">Notre vision avec 5 règles simples</Heading>
                <Columns centered={true} style={{ paddingTop: 50, alignItems: "center" }}>
                    <Columns.Column size={4}>
                        <Icon size="large" className="i-home" color="twitter"><FontAwesomeIcon icon="brain" size="6x" /></Icon>
                        <Heading className="upper-home upper-home-margin" size={5} renderAs="h2">Travailler dur</Heading>
                    </Columns.Column>
                    <Columns.Column size={4}>
                        <Icon size="large" className="i-home" color="twitter"><FontAwesomeIcon icon="grin" size="6x" /></Icon>
                        <Heading className="upper-home upper-home-margin" size={5} renderAs="h2">être cool</Heading>
                    </Columns.Column>
                    <Columns.Column size={4}>
                        <Icon size="large" className="i-home" color="twitter"><FontAwesomeIcon icon="trophy" size="6x" /></Icon>
                        <Heading className="upper-home upper-home-margin" size={5} renderAs="h2">Voir Grand</Heading>
                    </Columns.Column>
                    <Columns.Column size={4}>
                        <Icon size="large" className="i-home" color="twitter">
                            <FontAwesomeIcon icon="heart" size="6x" />
                        </Icon>
                        <Heading className="upper-home upper-home-margin" size={5} renderAs="h2">Aimer le Digital</Heading>
                    </Columns.Column>
                    <Columns.Column size={4}>
                        <Icon size="large" className="i-home" color="twitter">
                            <FontAwesomeIcon icon="grin-stars" size="6x" />
                        </Icon>
                        <Heading className="upper-home upper-home-margin" size={5} renderAs="h2">S'amuser</Heading>
                    </Columns.Column>
                </Columns>
            </Container>
        </Section>
    );
}

const ColumnsGeneric = ({ title, element }) => {
    return (
        <Section className="neutral" size="medium">
            <Container style={{ textAlign: "center" }}>
                <Heading style={{ marginBottom: 50 }} size={1} className="upper-home" renderAs="p">{title}</Heading>
                <Columns centered={true} style={{ paddingTop: 50, alignItems: "center" }}>
                    {element.map((el, i) => (
                        <Columns.Column size={3} key={i} style={{ padding: 30 }}>
                            <Image src={el} width="170" />
                        </Columns.Column>
                    ))}
                </Columns>
            </Container>
        </Section>);
}
const ColumnsGeneric2 = () => {
    return (<Columns>
        <Columns.Column>
            <p className="bd-notification is-success">First Column</p>
            <Image src="http://bulma.io/images/placeholders/640x480.png" size="3by2" />
        </Columns.Column>
        <Columns.Column>
            <p className="bd-notification is-info">Second Column</p>
            <Image src="http://bulma.io/images/placeholders/640x480.png" size="3by2" />
        </Columns.Column>
    </Columns>);
}

const NavBarGeneric = () => {
    const [displayNav, setDisplayNav] = useState(false)

    let styleDisplay

    if (displayNav) {
        styleDisplay = {
            display: "block"
        }
    } else {
        styleDisplay = {}
    }

    console.log(styleDisplay)

    return (
        <div>
            <Navbar color="twitter" style={{ padding: "20px 40px" }} transparent={false} fixed="top">
                <Navbar.Brand>
                    <Navbar.Item renderAs="a" href="#">
                        <img src={CONSTANT['logo']} alt="first digital" />
                    </Navbar.Item>
                    <Navbar.Burger onClick={() => {
                        setDisplayNav(val => !val)
                    }} />
                </Navbar.Brand>
                <Navbar.Menu style={styleDisplay}>
                    <Navbar.Container position="start">
                        <Navbar.Item style={{ fontWeight: "bold" }} href="#">
                            Développement Web
                        </Navbar.Item>
                        <Navbar.Item style={{ fontWeight: "bold" }} href="#">
                            Securité Digital
                        </Navbar.Item>
                    </Navbar.Container>
                </Navbar.Menu>
            </Navbar>
        </div>
    );
}
const FooterContainer = () => {
    return (
        <Hero>
            <Hero.Footer>
                <Footer>
                    <Container>
                        <Content style={{ textAlign: 'center' }}>
                            <p>
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
const Home = ({ children }) => {
    return (
        <div className="home-wrapper">
            {children.map((component, i) => (
                <React.Fragment key={i}>
                    {component}
                </React.Fragment>
            ))}
        </div>
    );
}

const FirstBlock = ({ initialCount }) => {
    initialCount = 0;
    const [state, dispatch] = useReducer(reducer, initialCount, init);

    const [wordIndex, setWordIndex] = useState(0);
    const words = ['hey', 'this', 'is', 'cool'];
    console.log('word', wordIndex);
    const word = words[wordIndex];

    const foo = word => {
        console.log('memoization');
        return word;
    }

    const blub = useMemo(() => foo(word), [word])

    return (
        <div className="default-block">
            Total : {state.count}        <button onClick={() => setWordIndex(r => r + 1)}>{blub}</button> {blub}
            <button onClick={() => dispatch({ type: 'reset', payload: initialCount })}> Réinitialiser</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        </div>
    );
}

const SecondBlock = () => {
    return (
        <div className="default-block">
            <NavBarGeneric />
            <SectionContainer
                srcImage={CONSTANT['web1']}
                color="twitter"
                size="large"
                title={ressources.home1['title']}
                content={ressources.home1['content']}
                position={1}
            />
            <SectionContainer
                color="white"
                size="medium"
                title={ressources.home3['title']}
                align="center"
                icon={true}
            />
            <SectionContainer
                srcImage={CONSTANT['web0']}
                color="twitter"
                size="large"
                title={ressources.home2['title']}
                content={ressources.home2['content']}
                position={0}
            />
            <ContainerGeneric />
            <SectionContainer
                srcImage={CONSTANT['web2']}
                color="twitter"
                size="large"
                title={ressources.home4['title']}
                content={ressources.home4['content']}
                position={0}
            />
            <SectionContainerForm
                srcImage={CONSTANT['web5']}
                color="twitter"
                size="large"
                position={0}
                children={[
                    <FormContact
                        title={ressources.contact['title']}
                        content={ressources.contact['content']}
                    />]}
            />
            <SectionContainerRight />
            <ColumnsGeneric title="Ils nous ont fait confiance" element={LOGO} />
            <SectionContainer
                color="white"
                size="medium"
                title={ressources.home3['title']}
                align="center"
                icon={true}
            />
            <FooterContainer />
        </div>
    );
}

const HomeElement = () => {
    return (
        <Home
            children={[<SecondBlock />]}
        />
    )
}

Hero.propTypes = {
    color: PropTypes.string.isRequired
}

Icon.propTypes = {
    color: PropTypes.string.isRequired
}

FormContact.propTypes = {
    defaultValue: PropTypes.string
}

export default HomeElement;