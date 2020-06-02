import React from 'react';
import HomePage from './../HomePage'

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

const Home = () => {
    return (
        <HomeElement
            children={[<HomePage />]}
        />
    )
}
export default Home;