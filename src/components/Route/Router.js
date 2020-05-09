import React from 'react'
import Home from './../home/Home'
import HomeSecurity from './../home/HomeSecurity'
import SectionContainerForm from './../SectionContainerForm'
import FormContact from './../FormContact'

import {
    CONSTANT,
    ressources,
} from './../../constants';

const getRoute = [{
    path: "/",
    component: <Home />,
},
{
    path: "/security",
    component: <HomeSecurity />,
},
{
    path: "/contact",
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
}];

export default getRoute