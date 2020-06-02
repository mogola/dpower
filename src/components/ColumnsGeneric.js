import React from 'react';
import { themeContext } from './../context/theme-context'

import {
    Columns,
    Container,
    Image,
    Heading,
    Section
} from 'react-bulma-components'

//animation global
import Slide from 'react-reveal/Slide'

const ColumnsGeneric = ({ title, element }) => {
    return (
        <themeContext.Consumer>
            {({ colorTheme }) => (
                <Section className="neutral" size="medium">
                    <Container style={{ textAlign: "center" }}>
                        <Heading style={{ marginBottom: 50 }} size={1} className="upper-home is-size-3-mobile" renderAs="p">{title}</Heading>
                        <Columns centered={true} style={{ paddingTop: 50, alignItems: "center" }}>
                            {element.map((el, i) => (
                                <Columns.Column size={3} key={i} style={{ padding: 30 }}>
                                    <Slide top>
                                        <Image src={el} width="170" />
                                    </Slide>
                                </Columns.Column>
                            ))}
                        </Columns>
                    </Container>
                </Section>
            )}
        </themeContext.Consumer>
    );
}

export default ColumnsGeneric
