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

import { toast } from 'react-toastify';

const endPoint = process.env.REACT_APP_API_URL
const FormContact = ({ title, content, align = "center" }) => {
    const inputRef = useRef(null)
    const inputRefContent = useRef(null)
    const inputRefOption = useRef(null)
    const [inputValue, SetValue] = useState('enter your email')
    const [form, setForm] = useState({ email: '' })
    const [valueEmail, setValueEmail] = useState('')
    const [inputError, SetInputError] = useState(false)
    const [errorClass, SetErrorClass] = useState({ valid: '', error: '' })
    const [firstFocus, setFirstFocus] = useState(false)
    //const [validClass, SetValidClass] = useState('')
    const VALUES = {
        email: "",
        textarea: "",
        options: "",
        send_email: false
    }
    function init(initialValue) {
        return { state: initialValue }
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
            case 'EMAIL_SENDED':
                return {
                    email: '',
                    textarea: '',
                    options: '',
                    send_email: true
                }
            case 'DISPLAY_FORM':
                return {
                    ...state,
                    send_email: action.payload
                }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(formReducer, VALUES, init)
    function customDIspatch(...args) {
        return dispatch(...args)
    }
    const getValue = ({ target }) => {
        const { value } = target

        const valueEmailString = value !== "" ? value.toLowerCase() : ""

        setValueEmail(valueEmailString)

        if (txtEmail(target.value)) {
            setForm({ ...form, [target.name]: target.value })
            SetInputError(false)
            SetErrorClass({ valid: 'is-success', error: '' })
            customDIspatch({ type: 'VERIFY_VALUE', payload: target.value })

            if (inputRefContent.current.value !== "") {
                console.log('set true', firstFocus)
                setFirstFocus(true)
            }

        } else {
            SetInputError(true)
            SetErrorClass({ valid: '', error: 'is-danger' })
        }
        console.log('value dispatch', state, dispatch({ type: "VERIFY_VALUE", payload: target.value }), target.value)
    }

    const getValueText = ({ target }) => {
        customDIspatch({ type: 'TEXT', payload: target.value })

        if (txtEmail(inputRef.current.value)) {
            setFirstFocus(true)
        }
    }

    const getValueOption = ({ target }) => {
        customDIspatch({ type: 'OPTIONS', payload: target.value })
        console.log('value dispatch', state, dispatch({ type: "OPTIONS", payload: target.value }), target.value)
    }

    const displayForm = () => {
        customDIspatch({ type: 'DISPLAY_FORM', payload: false })
    }

    useEffect(() => {
        if (state.options === "" && inputRefOption.current !== null)
            customDIspatch({ type: 'OPTIONS', payload: inputRefOption.current.value })
        if (inputRef.current !== null && firstFocus === false)
            setFirstFocus(false)
        if (inputRef.current !== null) {
            if (inputRefContent.current !== null && inputRefContent.current.value === "" || !txtEmail(inputRef.current.value)) {
                setFirstFocus(false)
            }
        }
    }, [])

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
            if (inputRefContent.current.value !== "") {
                setFirstFocus(true)
            }

        } else {
            SetInputError(true)
            SetErrorClass({ valid: '', error: 'is-danger' })
        }
    })

    const notify = () => {
        if(FB !== "undefined") {
            FB.AppEvents.logEvent("form Contact")
        }
        toast.success("Nous avons bien reçu votre demande", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }

    const formSubmit = (e) => {
        e.preventDefault();
        const { email, options, textarea } = state
        //console.log('form submit', email, options, textarea)

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

            dispatch({ type: 'EMAIL_SENDED', payload: VALUES })
            //  console.log('state after send email', state)
        }
        catch (err) {
            console.log('error envoie email', err)
        }
    }

    let displayed;

    if (state.send_email) {
        displayed = {
            'display': 'none'
        }
    } else {
        displayed = {
            'display': 'show'
        }
    }

    return (
        <React.Fragment>
            {!state.send_email &&
                <Fade right>
                    <div style={displayed}>
                        <form method='POST' onSubmit={formSubmit}>
                            <Heading style={{ "textAlign": align }} className="title--large" weight="bold" spaced={true} size={1}>
                                {title}
                            </Heading>
                            <Heading subtitle>
                                {content}
                            </Heading>
                            <div className="field">
                                <label id="email" htmlFor="email" className="label">Votre email</label>
                                <div className="control">
                                    <input ref={inputRef}
                                        aria-labelledby="email"
                                        onBlur={update}
                                        className={`input ${errorClass['error']} ${errorClass['valid']}`}
                                        type="text"
                                        name="email"
                                        onChange={getValue}
                                        placeholder={inputValue}
                                        value={valueEmail}
                                    />
                                    {inputError && <div className="has-text-danger">le format du champs non conforme</div>}
                                </div>
                            </div>
                            <div className="field">
                                <label id="service" htmlFor="service" className="label">L'objet de la demande</label>
                                <div className="control">
                                    <div className="select">
                                        <select
                                            aria-labelledby="service"
                                            name="service"
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
                                <label htmlFor="message" className="label">Message</label>
                                <div className="control">
                                    <textarea
                                        aria-labelledby="message"
                                        id="message"
                                        name="message"
                                        ref={inputRefContent}
                                        value={state.textarea}
                                        onChange={getValueText}
                                        className="textarea"
                                        placeholder="Veuillez entrer votre message ici..."></textarea>
                                </div>
                            </div>
                            <Button
                                id="submit"
                                name="submit"
                                className="is-info is-inverted button is-large is-fullwidth"
                                onClick={notify}
                                disabled={firstFocus === false ? true : false}>
                                Envoyer
                            </Button>
                        </form>
                    </div>
                </Fade>}
            {state.send_email &&
                <Fade right>
                    <div style={{ textAlign: 'center', padding: '20px 0' }}>
                        Nous avons bien reçu votre demande, voulez-vous à nouveau nous transmettre un message
                </div>
                    <button style={{ marginTop: '30px' }} onClick={displayForm} className="is-info is-inverted button is-large is-fullwidth">Retour au formulaire</button>
                </Fade>
            }
        </React.Fragment>
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