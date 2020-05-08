import React, { useState, useEffect } from 'react';
import AnimationTypeWrapper from './AnimationTypeWrapper'

import {
    Navbar,
} from 'react-bulma-components'

import {
    CONSTANT,
    NAV
} from './../constants'

import PropTypes from 'prop-types'

const NavBarGeneric = () => {
    const [displayNav, setDisplayNav] = useState(false)
    const [animNav, setAnimNav] = useState(false)

    let styleDisplay, booleanAnimation

    if (displayNav) {
        styleDisplay = {
            display: "block"
        }
        booleanAnimation = true
    } else {
        styleDisplay = {}
        booleanAnimation = false
    }

    useEffect(() => {
        if (window.innerWidth > 1023) {
            let getNavBar = document.getElementsByClassName('navbar-menu')
            let d = getNavBar[0].parentNode.getAttributeNode("style")
            console.log('remove attr', getNavBar)
            getNavBar[0].parentNode.removeAttributeNode(d)
        }
    }, []);



    const WrapperLinkMenu = () => {
        return (
            <Navbar.Menu style={styleDisplay}>
                <Navbar.Container position="start">
                    {NAV.map((itemNav, i) => (
                        <Navbar.Item style={{ fontWeight: "bold" }} key={i} href="#">
                            {itemNav.text}
                        </Navbar.Item>
                    ))}
                </Navbar.Container>
            </Navbar.Menu>
        );
    }

    return (
        <div>
            <Navbar color="twitter" style={{ padding: "20px 0" }} transparent={false} fixed="top">
                <Navbar.Brand style={{ paddingLeft: 40 }}>
                    <Navbar.Item renderAs="a" href="#">
                        <AnimationTypeWrapper
                            type="Zoom"
                            children={
                                <img src={CONSTANT['logo']} alt="first digital" />
                            }
                        />
                    </Navbar.Item>
                    <Navbar.Burger style={{ marginRight: 40 }} onClick={() => {
                        setDisplayNav(val => !val)
                    }} />
                </Navbar.Brand>

                <AnimationTypeWrapper
                    type="Slide"
                    opposite
                    right
                    when={booleanAnimation}
                    children={<WrapperLinkMenu />}
                />
            </Navbar>
        </div>
    );
}

Navbar.propTypes = {
    color: PropTypes.string
}

export default NavBarGeneric