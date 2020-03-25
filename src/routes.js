import React from 'react';
import { Image } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import logo from './assets/logo.png';

import Main from './pages/Main';
import Pokemon from './pages/Pokemon';

const Routes = createAppContainer(
  createSwitchNavigator({
    Main: {
      screen: createStackNavigator(
        {
          Main,
          Pokemon,
        },
        {
          defaultNavigationOptions: {
            headerTitleAlign: 'center',
            headerTitle: () => <Image source={logo} resizeMode="center" />,
          },
        }
      ),
    },
  })
);

export default Routes;
