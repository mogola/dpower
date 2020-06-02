import React, { useRef, useEffect, useCallback, useState, useReducer, useMemo } from 'react';

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

//animation global
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'

library.add(fab, faBrain, faCoffee, faGrin, faTrophy, faHeart, faGrinStars, faHandsHelping)


Hero.propTypes = {
    color: PropTypes.string
}

Navbar.propTypes = {
    color: PropTypes.string
}

Icon.propTypes = {
    color: PropTypes.string.isRequired
}

FormContact.propTypes = {
    defaultValue: PropTypes.string
}
