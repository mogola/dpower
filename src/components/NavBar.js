import React, { useState, useEffect, useRef } from 'react';
import AnimationTypeWrapper from './AnimationTypeWrapper'
import { NavLink, Link } from "react-router-dom";
import { motion, useCycle, AnimatePresence } from 'framer-motion';
//import { Link } from "react-tiger-transition";

import {
    Navbar,
} from 'react-bulma-components'

import {
    CONSTANT,
    NAV
} from './../constants'

import PropTypes from 'prop-types'

const useDimensions = ref => {
    const dimensions = useRef({ width: 0, height: 0 });

    useEffect(() => {
        dimensions.current.width = ref.current.offsetWidth;
        dimensions.current.height = ref.current.offsetHeight;
    }, []);

    return dimensions.current;
};

const Path = (props, d, opacity = 1) => {
    return (
        <motion.path
            fill="transparent"
            strokeWidth="3"
            stroke="#1DA1F2"
            strokeLinecap="round"
            opacity={opacity}
            d={d}
            {...props}
        />)
}
const pathOneVariants = {
    open: { d: "m 3 16.5 L 17 2.5" },
    closed: { d: "m 2 2.5 L 20 2.5" }
}

const pathTwoVariants = {
    closed: {
        opacity: 1
    },
    open: {
        opacity: 0,
        transition: {
            duration: 0.1
        }
    }
}

const pathThreeVariants = {
    closed: { d: "m 2 16.346 L 20 16.346" },
    open: { d: "m 3 2.5 L 17 16.346" }
}

const variants = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 55px 49px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(30px at 55px 49px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
}

const variantsMenu = {
    open: {
        transition: { staggerChildren: 2, delayChildren: -1 }
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    }
};

const variantsItem = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};

const NavBarGeneric = ({ colorTheme }) => {

    const [displayNav, setDisplayNav] = useState(false)
    const [animNav, setAnimNav] = useState(false)
    const [isOpen, toggleOpen] = useCycle(false, true)

    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

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
    const controlMobileNav = booleanMobile => {
        let controlDisplay
        if (window.innerWidth < 1023) {
            return controlDisplay = {
                display: booleanMobile ? 'block' : 'none'
            }
        }
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

    function onComplete() {
        setAnimNav(!animNav)
    }
    // The current width of the viewport
    const width = window.innerWidth;
    // The width below which the mobile view should be rendered
    const breakpoint = 1023;

    const NavMobile = () => {
        const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

        return (
            <motion.ul
                // style={{ display: animNav === true ? "" : "none" }}
                onAnimationComplete={onComplete}
                // style={{ transform: isOpen ? `translateY(0)` : `translateY(-300px)` }}
                className="navbar-customMenu"
                variants={variantsMenu}
            >
                {NAV.map((itemNav, i) => (
                    <motion.li
                        variants={variantsItem}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        key={i}
                    >
                        <Link
                            onClick={() => toggleOpen()}
                            style={{ color: colors[i] }}
                            to={itemNav.link}>
                            {itemNav.text}
                        </Link>
                    </motion.li>
                ))
                }
            </motion.ul>
        )
    }

    const NavDesktop = () => {
        return (
            <Navbar.Menu style={styleDisplay}>
                <Navbar.Container position="start">
                    {NAV.map((itemNav, i) => (
                        <Navbar.Item key={i} renderAs="div">
                            <Link
                                style={{ color: "white" }}
                                to={itemNav.link}
                                transition='glide-right'>
                                {itemNav.text}
                            </Link>
                        </Navbar.Item>
                    ))}
                </Navbar.Container>
            </Navbar.Menu>
        )
    }

    const WrapperLinkMenu = ({ boolValue }) => {
        return width < breakpoint ? <NavMobile /> : <NavDesktop />;
    }

    return (
        <>
            <Navbar color={colorTheme} style={{ padding: "20px 0" }} transparent={false} fixed="top">
                <Navbar.Brand style={{ paddingLeft: 40 }}>
                    <Navbar.Item renderAs="div">
                        <AnimationTypeWrapper
                            type="Zoom"
                            children={
                                <motion.div animate={{ scale: [0.5, 1] }}>
                                    <NavLink to="/">
                                        <img loading="lazy" src={CONSTANT['logo']} alt="first digital" />
                                    </NavLink>
                                </motion.div>
                            }
                        />
                    </Navbar.Item>

                </Navbar.Brand>
            </Navbar>
            {width > breakpoint && <WrapperLinkMenu />}
            <AnimatePresence initial={false}>
                <motion.nav
                    className="navbar-anim is-fixed-top"
                    animate={isOpen ? "open" : "closed"}
                    custom={height}
                    ref={containerRef}
                >
                    <motion.div className="background" variants={variants}>
                        <WrapperLinkMenu />
                    </motion.div>
                    <button
                        className="menuButton"
                        id="menuButton"
                        aria-labelledby="menuButton"
                        role="button"
                        aria-label="menuButton"
                        name="menuButton"
                        onClick={() => toggleOpen()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23">
                            <Path
                                key="1"
                                animate={isOpen ? "open" : "closed"}
                                d="m 3 16.5 L 17 2.5"
                                variants={pathOneVariants}
                            />
                            <Path
                                key="2"
                                animate={isOpen ? "open" : "closed"}
                                d="m 2 9.423 L 20 9.423"
                                variants={pathTwoVariants}
                            />
                            <Path
                                key="3"
                                animate={isOpen ? "open" : "closed"}
                                d="m 3 2.5 L 17 16.346"
                                variants={pathThreeVariants}
                            />
                        </svg>
                    </button>
                </motion.nav>
            </AnimatePresence>
        </>
    );
}

Navbar.propTypes = {
    color: PropTypes.string
}

export default NavBarGeneric