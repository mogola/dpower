import React, { useState, useReducer, useMemo } from 'react';
import reducer, { init } from './../../reducer/useReducer'
import HomePage from './../HomePage'


import {
    CONSTANT,
    LOGO,
    ressources,
    ICON
} from './../../constants';

console.log('logo', CONSTANT, LOGO, ICON, ressources);

// const { Input, Field, Control, Label, Help, InputFile, Select, CheckboxControlled, Textarea, RadioGroup } = Form;
const HomeElement = ({ children }) => {
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

const Home = () => {
    return (
        <HomeElement
            children={[<HomePage />]}
        />
    )
}
export default Home;