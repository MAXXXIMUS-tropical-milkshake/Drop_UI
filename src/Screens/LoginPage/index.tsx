import React from 'react';
import styles from './styles';
import {
  View,
  Image,
  Text,
} from 'react-native';
import InputForm from '../../Components/TextInput';
import LoginButton from '../../Components/LoginButton';

function LoginPage(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../../assets/droplogo.png')}
          style={styles.headerImage}
          alt="Logo" />
        <Text style={styles.title}>
          Sign in to <Text style={styles.titleDrop}>
            Drop
          </Text>
        </Text>
      </View>

      <View style={styles.form}>
        <InputForm />
        <LoginButton />
      </View>
    </View>
  );
}

export default LoginPage;
