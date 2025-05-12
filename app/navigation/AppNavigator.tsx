import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

// Import Screens
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

// Define Navigation Types
export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
};

// Create Stack Navigator
const Stack = createNativeStackNavigator<RootStackParamList>();

// App Navigator Component
const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator 
      initialRouteName="Welcome"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen 
        name="Welcome" 
        component={WelcomeScreen} 
      />
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;