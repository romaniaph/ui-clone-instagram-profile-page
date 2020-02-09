import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import json from '../server.json'

import Profile from './pages/Profile';
import { Text } from 'react-native';

const Routes = createAppContainer(
    createStackNavigator({
        Profile
    }, {
        defaultNavigationOptions: {
            headerTitle: () => <Text style={{ fontWeight: "700", fontSize: 18 }}>{json.author.username}</Text>,
            headerStyle: {
                backgroundColor: '#f5f5f5',
                elevation: 0,
                shadowOpacity: 0
            },
        }
    })
);

export default Routes;