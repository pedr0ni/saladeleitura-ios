import React from 'react';

import { Text } from 'react-native';

export default class Title extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Text style={{fontWeight: 'bold',fontSize: 34}}>{this.props.children}</Text>
        );
    }

}

