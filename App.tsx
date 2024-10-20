import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import LoginPage from './src/Screens/LoginPage';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <LoginPage />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',

  },
});

export default App;
