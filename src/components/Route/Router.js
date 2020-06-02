import React from 'react'
import Home from './../home/Home'
import HomeSecurity from './../home/HomeSecurity'
import SectionContainerForm from './../SectionContainerForm'
import FormContact from './../FormContact'

import {
    CONSTANT,
    ressources,
} from './../../constants';

const screenStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
};

const getRoute = [
    {
        path: "/",
        exact: true,
        component: <Home />,
        screenProps: {
            ...screenStyle
        }
    },
    {
        path: "/home",
        component: <Home />,
        screenProps: {
            ...screenStyle
        }
    },
    {
        path: "/security",
        component: <HomeSecurity />,
        exacta: true,
        screenProps: {
            ...screenStyle
        }
    },
    {
        path: "/contact",
        exacta: true,
        component: <SectionContainerForm
            srcImage={CONSTANT['web5']}
            color="twitter"
            size="large"
            position={0}
            children={[
                <FormContact
                    title={ressources.contact['title']}
                    content={ressources.contact['content']}
                />]}
        />,
        screenProps: {
            ...screenStyle
        }
    }];

export default getRoute