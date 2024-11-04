import React, { createContext, useContext, useState } from 'react';
import LoginPage from './src/Screens/LoginPage/LoginPage';
import SignupPage from './src/Screens/SignupPage/SignupPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import ThemeContext from './src/Common/ThemeContext';

const Stack = createNativeStackNavigator();

export default function App(): React.JSX.Element {
  const [appTheme, setAppTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ appTheme, setAppTheme }}>
      <NavigationContainer theme={appTheme == 'light' ? DefaultTheme : DarkTheme}>
        <Stack.Navigator initialRouteName="signup">
          <Stack.Screen name="signup" component={SignupPage} options={{ headerShown: false }} />
          <Stack.Screen name="login" component={LoginPage} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}
