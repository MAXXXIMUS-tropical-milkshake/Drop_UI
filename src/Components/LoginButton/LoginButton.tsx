import React from 'react';
import { TouchableOpacity, View, Text, Alert } from 'react-native';
import styles from './LoginButtonStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

type LoginProps = {
  email: string,
  password: string
};

function LoginButton(props: LoginProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={(_) => {
        const email = props.email;
        const password = props.password;
        fetch('http://10.0.2.2:8080/v1/auth/login', {
          method: 'POST',
          headers: {
             'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        })
        .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            Alert.alert('Авторизация успешна.');
            AsyncStorage.setItem('accessToken', data.accessToken);
            AsyncStorage.setItem('refreshToken', data.refreshToken);
          })
          .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
          });

      }}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>
            Sign in
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default LoginButton;

