import React, { useEffect, useState, useRef, useReducer } from 'react';

import {
    Heading,
    Hero,
    Icon,
} from 'react-bulma-components'
import { Button } from 'react-bulma-components/dist';
import PropTypes from 'prop-types'

//animation global
import Fade from 'react-reveal/Fade'

console.log("process developpement", process.env.REACT_APP_API_URL)
const endPoint = process.env.REACT_APP_API_URL


const FormContact = ({ title, content, align = "center" }) => {
    const inputRef = useRef(null)
    const inputRefOption = useRef(null)
    const [inputValue, SetValue] = useState('enter your email')
    const [form, setForm] = useState({ email: '' })
    const [inputError, SetInputError] = useState(false)
    const [errorClass, SetErrorClass] = useState({ valid: '', error: '' })
    //const [validClass, SetValidClass] = useState('')
    const VALUES = {
        email: "",
        textarea: "",
        options: ""
    }
    const formReducer = (state, action) => {
        switch (action.type) {
            case 'VERIFY_VALUE':
                return {
                    ...state,
                    email: action.payload,
                }
            case 'TEXT':
                return {
                    ...state,
                    textarea: action.payload,
                }
            case 'OPTIONS':
                return {
                    ...state,
                    options: action.payload
                }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(formReducer, VALUES)
    function customDIspatch(...args) {
        return dispatch(...args)
    }
    const getValue = ({ target }) => {

        if (txtEmail(target.value)) {
            setForm({ ...form, [target.name]: target.value })
            SetInputError(false)
            SetErrorClass({ valid: 'is-success', error: '' })
            customDIspatch({ type: 'VERIFY_VALUE', payload: target.value })
        } else {
            SetInputError(true)
            SetErrorClass({ valid: '', error: 'is-danger' })
        }
        console.log('value dispatch', state, dispatch({ type: "VERIFY_VALUE", payload: target.value }), target.value)
    }

    const getValueText = ({ target }) => {
        customDIspatch({ type: 'TEXT', payload: target.value })
        console.log('value dispatch', state, dispatch({ type: "TEXT", payload: target.value }), target.value)
    }

    const getValueOption = ({ target }) => {
        customDIspatch({ type: 'OPTIONS', payload: target.value })
        console.log('value dispatch', state, dispatch({ type: "OPTIONS", payload: target.value }), target.value)
    }

    useEffect(() => {
        if (state.options === "")
            customDIspatch({ type: 'OPTIONS', payload: inputRefOption.current.value })
        console.log('next State', state)
    }, [state])

    const txtEmail = (value) => {
        let re = new RegExp('^[a-z0-9.-]+@[a-z.]{2,}\.[a-z]$');
        return re.test(value);
    }

    const update = (({ target }) => {
        console.log(target.value, txtEmail(target.value))

        if (txtEmail(target.value)) {
            setForm({ ...form, [target.name]: target.value })
            SetInputError(false)
            SetErrorClass({ valid: 'is-success', error: '' })
        } else {
            SetInputError(true)
            SetErrorClass({ valid: '', error: 'is-danger' })
        }
    })

    const formSubmit = (e) => {
        e.preventDefault();
        const { email, options, textarea } = state
        console.log('form submit', email, options, textarea)

        try {
            fetch(endPoint + '/emailcontact',
                {
                    method: 'POST',
                    body: JSON.stringify({
                        email: email,
                        option: options,
                        content: textarea
                    }),
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json'
                    }
                })
        }
        catch (err) {
            console.log('error envoie email', err)
        }
    }

    console.log('update', update, form)
    return (
        <Fade right>
            <div>
                <form method='POST' onSubmit={formSubmit}>
                    <Heading style={{ "textAlign": align }} className="title--large" weight="bold" spaced={true} size={1}>
                        {title}
                    </Heading>
                    <Heading subtitle>
                        {content}
                    </Heading>
                    <div className="field">
                        <label className="label">Votre email</label>
                        <div className="control">
                            <input ref={inputRef}
                                onBlur={update}
                                className={`input ${errorClass['error']} ${errorClass['valid']}`}
                                type="text"
                                name="email"
                                onChange={getValue}
                                placeholder={inputValue} />
                            {inputError && <div className="has-text-danger">le format du champs non conforme</div>}
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">L'objet de la demande</label>
                        <div className="control">
                            <div className="select">
                                <select
                                    onChange={getValueOption}
                                    ref={inputRefOption}
                                >
                                    <option>Développement web</option>
                                    <option>Sécurité web</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Message</label>
                        <div className="control">
                            <textarea onChange={getValueText} className="textarea" placeholder="Textarea"></textarea>
                        </div>
                    </div>
                    <div className="field is-grouped">
                        <div className="control">
                            <Button disabled={inputError ? "disabled" : false}>Envoyer</Button>
                        </div>
                    </div>
                </form>
            </div>
        </Fade >
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