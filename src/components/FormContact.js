import React, { useState } from 'react';

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

const onChangeInput = (event) => {
    console.log(event)
}
const FormContact = ({ title, content, align = "center" }) => {
    const [inputValue, SetValue] = useState('enter your email')

    return (
        <Fade right>
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
            </div>
        </Fade>
    );
}

Hero.propTypes = {
    color: PropTypes.string
}


Icon.propTypes = {
    color: PropTypes.string.isRequired
}

FormContact.propTypes = {
    defaultValue: PropTypes.string
}

export default FormContact