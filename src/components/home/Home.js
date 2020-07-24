import React, { Suspense } from 'react';

// const HomePage = React.lazy(() => import(/*webpackPreLoad: true*/ './../HomePage'))

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
        // <Suspense fallback={<div>Chargement...</div>}>
            <HomeElement
                children={[<HomePage />]}
            />
        // </Suspense>
    )
}
export default Home;