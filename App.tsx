import React from 'react';
import LoginPage from './src/Screens/LoginPage/LoginPage';
import SignupPage from './src/Screens/SignupPage/SignupPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="signup">
        <Stack.Screen name="signup" component={SignupPage} options={{ headerShown: false }} />
        <Stack.Screen name="login" component={LoginPage} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
