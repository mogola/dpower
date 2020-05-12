import React, { useContext } from 'react';
import { themeContext } from './../context/theme-context'

import SectionContainer from './SectionContainer'
import SectionContainerForm from './SectionContainerForm'
import FormContact from './FormContact'
import ContainerGeneric from './ContainerGeneric'
import ContainerPlatform from './ContainerGenericPlatform'
import ColumnsGeneric from './ColumnsGeneric'


import {
    CONSTANT,
    LOGO,
    ressources,
} from './../constants';

const HomePage = () => {
    return (
        <themeContext.Consumer>
            {({ colorTheme, toggleTheme }) => (
                <div className="default-block">
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
                    <ContainerGeneric />
                    <SectionContainer
                        srcImage={CONSTANT['web2']}
                        color={colorTheme}
                        size="large"
                        title={ressources.home4['title']}
                        content={ressources.home4['content']}
                        position={0}
                    />
                    <ContainerPlatform />
                    <SectionContainerForm
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

export default HomePage