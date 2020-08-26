import loadable from '@loadable/component';
import React, { Suspense } from 'react';
import { themeContext } from './../context/theme-context'
import { themeEvent } from './../context/theme-event'
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

import { useSpring, animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'


function PullRelease(){
    const [{ x }, set] = useSpring(() => ({ x: 0 }))
    const bind = useDrag(
        ({ down, movement: [mx] }) =>
        set({ x: down ? mx : 0, immediate: down, config: { duration: 3000 } }),
        { initial: () => [x.get(), 0] }
    )
    return <animated.div className="dragger" {...bind()} style={{ x }} />
}

const HomePage = () => {
    return (
        <themeEvent.Consumer>
        {mssg => (
        <themeContext.Consumer>
            {({ colorTheme, colorThemeHexa }) => (
                <>
                <NavBarGeneric colorStroke={colorThemeHexa} colorTheme={colorTheme} />
                {/* // <Suspense fallback={<div>Chargement...</div>}> */}
                    <div onClick={mssg.onClose} className="default-block">
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
                        <div id="drag">
                            <PullRelease />
                        </div>
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
        )}
        </themeEvent.Consumer>
    );
}

export default HomePage