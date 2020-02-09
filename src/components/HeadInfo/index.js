import React from 'react';
import { View } from 'react-native';

import { Number, Container, Text } from './styles';

export default function HeadInfo({ value, wvalue }) {
  return (
    <Container>
        <Number>{value}</Number>
        <Text>{wvalue}</Text>
    </Container>
  );
}
