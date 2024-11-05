import React, { useEffect } from 'react';
import TrackPlayer from 'react-native-track-player';
import HomeScreen from './src/Screens/HomeScreen/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

const BottomTab = createBottomTabNavigator();

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
      <BottomTab.Navigator screenOptions={{
        tabBarStyle: {backgroundColor: '#000'},
        headerShown: false,
        tabBarActiveTintColor: '#fff',
        }}>
        <BottomTab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={require('./assets/Home.png')}
                style={[
                  styles.bottomTabIcon,
                  focused && styles.bottomTabIconFocused,
                ]}
              />
            ),
          }}
        />
        <BottomTab.Screen
          name="Lenta"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={require('./assets/Home.png')}
                style={[
                  styles.bottomTabIcon,
                  focused && styles.bottomTabIconFocused,
                ]}
              />
            ),
          }}
        />
        <BottomTab.Screen
          name="Search"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={require('./assets/Home.png')}
                style={[
                  styles.bottomTabIcon,
                  focused && styles.bottomTabIconFocused,
                ]}
              />
            ),
          }}
        />
        <BottomTab.Screen
          name="Profile"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={require('./assets/Home.png')}
                style={[
                  styles.bottomTabIcon,
                  focused && styles.bottomTabIconFocused,
                ]}
              />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  bottomTabIcon: {
    width: 20,
    height: 20,
    tintColor: 'grey',
  },
  bottomTabIconFocused: {
    tintColor: '#fff',
  },
});
export default App;

