import React, { Suspense } from 'react';

import SectionContainer from './SectionContainer'
import ContainerForm from './ContainerForm'
import FormContact from './FormContact'
import ContainerGeneric from './ContainerGeneric'
import ColumnsGeneric from './ColumnsGeneric'
// const ContainerPlatform = React.lazy(() => import('./ContainerGenericPlatform'))
import ContainerPlatform from './ContainerGenericPlatform'
import NavBarGeneric from './NavBar'

import ScrollToTop from './ScrollToTop'
import { themeContext } from './../context/theme-context'

import {
    CONSTANT,
    LOGO,
    ressourcesSecurity as ressources,
} from './../constants';

const customSecurityColor = 'gold';

const HomePageSecurity = () => {
    return (
        <themeContext.Consumer>
            {({ colorTheme2, colorTheme2Hexa, toggleTheme }) => (
                <>
                <ScrollToTop />
                <div className="default-block">
                    <NavBarGeneric colorStroke={colorTheme2Hexa} colorTheme={colorTheme2} />
                    {/* <Suspense fallback={<div>Chargement...</div>}> */}
                        <div className="default-block">
                            <SectionContainer
                                srcImage={CONSTANT['web1']}
                                color={customSecurityColor}
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
                                color={customSecurityColor}
                                size="large"
                                title={ressources.home2['title']}
                                content={ressources.home2['content']}
                                position={0}
                            />
                            <ContainerGeneric
                                color={customSecurityColor}
                            />
                            <SectionContainer
                                srcImage={CONSTANT['web2']}
                                color={customSecurityColor}
                                size="large"
                                title={ressources.home4['title']}
                                content={ressources.home4['content']}
                                position={0}
                            />
                            <ContainerPlatform
                                color={customSecurityColor}
                            />
                            <ContainerForm
                                srcImage={CONSTANT['web5']}
                                color={customSecurityColor}
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
                                color={customSecurityColor}
                                size="medium"
                                title={"Une équipe de professionnel à votre service, chez firstDigital votre safisfaction est notre priorité !"}
                                align="center"
                                icon={false}
                            />
                        </div>
                    {/* </Suspense> */}
                </div>
                </>
            )}
        </themeContext.Consumer>
    );
}

export default HomePageSecurity