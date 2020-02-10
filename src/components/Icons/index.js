import React from 'react';
import { View, Text } from 'react-native';

import { Container, IconItem, Icon } from './styles';

import grid from '../../assets/grid.png'
import tagged from '../../assets/tagged.png'
import igtv from '../../assets/igtv.png'

export default function Icons() {
    return (
        <Container>
            <IconItem style={{ borderBottomColor: "black", borderBottomWidth: 1 }}>
                <Icon source={grid} />
            </IconItem>
            <IconItem>
                <Icon source={tagged} />
            </IconItem>
            <IconItem>
                <Icon source={igtv} />
            </IconItem>
        </Container>
    );
}
