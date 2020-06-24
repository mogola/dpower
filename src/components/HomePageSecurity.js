import React from 'react';

import SectionContainer from './SectionContainer'
import SectionContainerForm from './SectionContainerForm'
import FormContact from './FormContact'
import ContainerGeneric from './ContainerGeneric'
import ColumnsGeneric from './ColumnsGeneric'

import ScrollToTop from './ScrollToTop'
import { themeContext } from './../context/theme-context'

import {
    CONSTANT,
    LOGO,
    ressourcesSecurity as ressources,
} from './../constants';

const HomePageSecurity = () => {
    return (
<themeContext.Consumer>
    {({ colorTheme2, toggleTheme }) => (
        <div className="default-block">
            <ScrollToTop />
            <SectionContainer
                srcImage={CONSTANT['web1']}
                color={colorTheme2}
                size="large"
                title={ressources.home1['title']}
                content={ressources.home1['content']}
                position={1}
            />
            <SectionContainer
                color="white"
                size="medium"
                title={ressources.home3['title']}
                align="center"
                icon={true}
            />
            <SectionContainer
                srcImage={CONSTANT['web0']}
                color={colorTheme2}
                size="large"
                title={ressources.home2['title']}
                content={ressources.home2['content']}
                position={0}
            />
            <ContainerGeneric />
            <SectionContainer
                srcImage={CONSTANT['web2']}
                color={colorTheme2}
                size="large"
                title={ressources.home4['title']}
                content={ressources.home4['content']}
                position={0}
            />
            <SectionContainerForm
                srcImage={CONSTANT['web5']}
                color={colorTheme2}
                size="large"
                position={0}
                children={[
                    <FormContact
                        title={ressources.contact['title']}
                        content={ressources.contact['content']}
                    />]}
            />
            <ColumnsGeneric title="Ils nous ont fait confiance" element={LOGO} />
            <SectionContainer
                color="white"
                size="medium"
                title={"Une équipe de professionnel à votre service, chez firstDigital votre safisfaction est notre priorité !"}
                align="center"
                icon={false}
            />
        </div>
        )}
        </themeContext.Consumer>
    );
}

export default HomePageSecurity