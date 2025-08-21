/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Splash from './src/Component/Splash';
import LoginStackNavigator from './src/Navigator/LoginStackNavigator';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <LoginStackNavigator></LoginStackNavigator>
    </NavigationContainer>
  );
};



export default App;
