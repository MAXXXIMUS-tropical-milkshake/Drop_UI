import React, { createContext, useContext, useEffect, useState } from 'react';

import LoginPage from './src/Screens/LoginPage/LoginPage';
import SignupPage from './src/Screens/SignupPage/SignupPage';
import AudioTestPage from './src/Screens/AudioTestPage/AudioTestPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import ThemeContext from './src/Common/ThemeContext';
import { setupPlayer } from './src/Services/StreamPlayer';

const Stack = createNativeStackNavigator();

export default function App(): React.JSX.Element {
  useEffect(() => { setupPlayer(); }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="audio">
        <Stack.Screen
          name="audio"
          component={AudioTestPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="signup"
          component={SignupPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="login"
          component={LoginPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
