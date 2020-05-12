import React, { useState, useEffect } from 'react';
import AnimationTypeWrapper from './AnimationTypeWrapper'
import { Link } from "react-router-dom";
//import { Link } from "react-tiger-transition";

import {
    Navbar,
} from 'react-bulma-components'

import {
    CONSTANT,
    NAV
} from './../constants'

import PropTypes from 'prop-types'

const NavBarGeneric = ({ colorTheme }) => {
    const [displayNav, setDisplayNav] = useState(false)
    const [animNav, setAnimNav] = useState(false)

    let styleDisplay, booleanAnimation, styleColorMenu

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
            let getNavBar = document.getElementsByClassName('navbar-menu')[0]
            let d = getNavBar.parentNode.getAttributeNode("style")
            console.log('remove attr', getNavBar)
            // getNavBar.parentNode.removeAttributeNode(d)

            styleColorMenu = {
                "color": "white"
            }
            console.log(styleColorMenu)
        } else {
            styleColorMenu = {}
        }
    }, []);



    const WrapperLinkMenu = () => {
        return (
            <Navbar.Menu style={styleDisplay}>
                <Navbar.Container position="start">
                    {NAV.map((itemNav, i) => (
                        <Navbar.Item renderAs="div" style={{ color: "white", fontWeight: "bold" }} key={i}>
                            {window.innerWidth < 1023 &&
                                <Link
                                    onClick={() => setDisplayNav(val => !val)}
                                    style={{ color: "" }}
                                    to={itemNav.link}
                                    transition='glide-right'>
                                    {itemNav.text}
                                </Link>
                            }
                            {window.innerWidth > 1023 &&
                                <Link
                                    style={{ color: "white" }}
                                    to={itemNav.link}
                                    transition='glide-right'>
                                    {itemNav.text}
                                </Link>
                            }
                        </Navbar.Item>
                    ))}
                </Navbar.Container>
            </Navbar.Menu>
        );
    }

    return (
        <div>
            <Navbar color={colorTheme} style={{ padding: "20px 0" }} transparent={false} fixed="top">
                <Navbar.Brand style={{ paddingLeft: 40 }}>
                    <Navbar.Item renderAs="div">
                        <AnimationTypeWrapper
                            type="Zoom"
                            children={
                                <Link to="/">
                                    <img src={CONSTANT['logo']} alt="first digital" />
                                </Link>
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