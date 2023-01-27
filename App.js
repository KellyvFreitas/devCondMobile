import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/stacks/AuthStack';
import {StateProvider} from './src/contexts/StateContext';

export default () => {
  return (
    <StateProvider>
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    </StateProvider>
  );
};
