import { NavigationContainer } from '@react-navigation/native';
import { registerRootComponent } from 'expo';
import React from 'react';
import 'react-native-gesture-handler';
import App from './app';

// Wrap the app with a single NavigationContainer at the root
const RootApp = () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(RootApp);