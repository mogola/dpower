
import React from 'react';

//animation global
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import Bounce from 'react-reveal/Bounce'

const AnimationTypeWrapper = ({ type, children, ...rest }) => {
    let content;
    switch (type) {
        case 'Zoom':
            console.log('zoom');
            content = <Zoom ssrFadeout {...rest}>
                {children}
            </Zoom>;
            break;
        case 'Slide':
            console.log('Slide');
            content = <Slide ssrFadeout {...rest}>
                {children}
            </Slide>;
            break;
        case 'Fade':
            console.log('Fade');
            content = <Fade ssrFadeout {...rest}>
                {children}
            </Fade>;
            break;
        case 'Bounce':
            console.log('Bounce');
            content = <Bounce ssrFadeout {...rest}>
                {children}
            </Bounce>;
            break;
        default:
            content = <div>{children}</div>
    }

    return (
        <React.Fragment>
            {content}
        </React.Fragment>
    )
};

export default AnimationTypeWrapper