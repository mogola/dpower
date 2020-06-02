import React from 'react';

import {
    Columns,
    Image,
} from 'react-bulma-components'

const ColumnsGenericImage = () => {
    return (<Columns>
        <Columns.Column>
            <p className="bd-notification is-success">First Column</p>
            <Image src="http://bulma.io/images/placeholders/640x480.png" size="3by2" />
        </Columns.Column>
        <Columns.Column>
            <p className="bd-notification is-info">Second Column</p>
            <Image src="http://bulma.io/images/placeholders/640x480.png" size="3by2" />
        </Columns.Column>
    </Columns>);
}

export default ColumnsGenericImage
