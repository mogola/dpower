import React from 'react';
import HomePageSecurity from './../HomePageSecurity'

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

const HomeSecurity = () => {
    return (
        <HomeElement
            children={[<HomePageSecurity />]}
        />
    )
}
export default HomeSecurity;