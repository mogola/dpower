//import Loadable from 'react-loadable';
import loadable from '@loadable/component';

import React from 'react'
// import Home from './../home/Home'
// import HomeSecurity from './../home/HomeSecurity'
// import SectionContainerForm from './../SectionContainerForm'
// import FormContact from './../FormContact'

const Home = loadable(() => import('./../home/Home'))
const HomeSecurity = loadable(() => import('./../home/HomeSecurity'))
const SectionContainerForm = loadable(() => import('./../SectionContainerForm'))
const FormContact = loadable(() => import('./../FormContact'))
const BusinessCard = loadable(() => import('./../BusinessCard'))

// HomeSecurity.load()
// SectionContainerForm.load()
// FormContact.load()

import {
    CONSTANT,
    ressources,
} from './../../constants';

// const screenStyle = {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center"
// };

const getRoute = [
    {
        path: "/",
        exact: true,
        component: <Home />,
        // screenProps: {
        //     ...screenStyle
        // }
    },
    {
        path: "/home",
        component: <Home />,
        // screenProps: {
        //     ...screenStyle
        // }
    },
    {
        path: "/security",
        component: <HomeSecurity />,
        exacta: true,
        // screenProps: {
        //     ...screenStyle
        // }
    },
    {
        path: "/business_card_MS",
        component: <BusinessCard src={CONSTANT["business1"]} />,
        exacta: true,
        // screenProps: {
        //     ...screenStyle
        // }
    },
    {
        path: "/business_card_SY",
        component: <BusinessCard src={CONSTANT["business2"]} />,
        exacta: true,
        // screenProps: {
        //     ...screenStyle
        // }
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
        // screenProps: {
        //     ...screenStyle
        // }
    }];

export default getRoute