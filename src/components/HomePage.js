import loadable from '@loadable/component';
import React, { Suspense } from 'react';
import { themeContext } from './../context/theme-context'
import SectionContainer from './SectionContainer'
import ContainerForm from './ContainerForm'
import FormContact from './FormContact'
import ContainerGeneric from './ContainerGeneric'
import ContainerPlatform from './ContainerGenericPlatform'
import ColumnsGeneric from './ColumnsGeneric'
import ScrollToTop from './ScrollToTop'
import NavBarGeneric from './NavBar'
const FooterContainer = loadable(() => import('./Footer'))
// const SectionContainer = React.lazy(() => import('./SectionContainer'))
// const ContainerForm = React.lazy(() => import('./ContainerForm'))
// const FormContact = React.lazy(() => import('./FormContact'))
// const ContainerGeneric = React.lazy(() => import('./ContainerGeneric'))
// const ContainerPlatform = React.lazy(() => import('./ContainerGenericPlatform'))
// const ColumnsGeneric = React.lazy(() => import('./ColumnsGeneric'))

import {
    CONSTANT,
    LOGO,
    ressources,
    htmlParse,
} from './../constants';

const HomePage = () => {
    return (
        <themeContext.Consumer>
            {({ colorTheme, colorThemeHexa, toggleTheme }) => (
                <>
                <NavBarGeneric colorStroke={colorThemeHexa} colorTheme={colorTheme} />
                {/* // <Suspense fallback={<div>Chargement...</div>}> */}
                    <div className="default-block">
                        <ScrollToTop />
                        <SectionContainer
                            color="white"
                            size="medium"
                            title=""
                            align="center"
                            icon={false}
                            fullImage={true}
                            srcImage={CONSTANT['webHome']}
                        />
                        <SectionContainer
                            srcImage={CONSTANT['web1']}
                            color={colorTheme}
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
                            color={colorTheme}
                            size="large"
                            title={ressources.home2['title']}
                            content={ressources.home2['content']}
                            position={0}
                        />
                        <ContainerGeneric classes="logoComs" />
                        <SectionContainer
                            srcImage={CONSTANT['web2']}
                            color={colorTheme}
                            size="large"
                            title={ressources.home4['title']}
                            content={ressources.home4['content']}
                            position={0}
                        />
                        <ContainerPlatform classes="logoComs"/>
                        <ContainerForm
                            srcImage={CONSTANT['web5']}
                            color={colorTheme}
                            size="large"
                            position={0}
                            children={[
                                <FormContact
                                    title={ressources.contact['title']}
                                    content={ressources.contact['content']}
                                />]}
                        />
                        <ColumnsGeneric
                            title="Nos références"
                            element={LOGO}
                            classes="logoPartner"
                        />
                        <SectionContainer
                            color="white"
                            size="medium"
                            title={"Une équipe de professionnel à votre service, chez firstDigital votre safisfaction est notre priorité !"}
                            align="center"
                            icon={false}
                        />
                        <FooterContainer />
                    </div>
               {/* // </Suspense> */}
               </>
            )}
        </themeContext.Consumer>
    );
}

export default HomePage