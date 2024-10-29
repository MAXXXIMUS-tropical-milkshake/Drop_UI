import React, { useEffect } from 'react';
import TrackPlayer from 'react-native-track-player';
import LoginPage from './src/Screens/LoginPage/LoginPage';
import SignupPage from './src/Screens/SignupPage/SignupPage';
import AudioTestPage from './src/Screens/AudioTestPage/AudioTestPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  useEffect(() => {
    const setupPlayer = async () => {
      try {
        await TrackPlayer.setupPlayer();
        console.log('Player setup successful');
      } catch (error) {
        console.error('Error setting up player:', error);
      }
    };

    setupPlayer();
  }, []);

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

export default App;

