import React, { Suspense } from 'react';
import loadable from '@loadable/component';
import ColumnsGeneric from './ColumnsGeneric'
import NavBarGeneric from './NavBar'
const FooterContainer = loadable(() => import('./Footer'))

import ScrollToTop from './ScrollToTop'
import { themeContext } from './../context/theme-context'

import {
    CONSTANT,
    LOGO,
    ressourcesSecurity as ressources,
} from './../constants';

const customSecurityColor = 'gold';

const References = () => {
    return (
        <themeContext.Consumer>
            {({ colorTheme2, colorTheme2Hexa, toggleTheme }) => (
                <>
                <ScrollToTop />
                <div className="default-block">
                    <NavBarGeneric colorStroke={colorTheme2Hexa} colorTheme={colorTheme2} />
                    {/* <Suspense fallback={<div>Chargement...</div>}> */}
                        <div className="default-block">
                            <ColumnsGeneric
                                title="Nos références"
                                element={LOGO}
                                classes="logoPartner"
                            />
                            <FooterContainer />
                        </div>
                    {/* </Suspense> */}
                </div>
                </>
            )}
        </themeContext.Consumer>
    );
}

export default References