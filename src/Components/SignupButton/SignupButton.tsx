import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import alert from '../../Screens/Common/Alert';
import styles from './SignupButtonStyles';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

type SignupProps = {
  username: string;
  email: string;
  password: string;
  navigation: NavigationProp<ParamListBase>;
};

function SignupButton(props: SignupProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={_ => {
          const username = props.username;
          const email = props.email;
          const password = props.password;
          const navigation = props.navigation;
          fetch('http://0.0.0.0:8080/v1/auth/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: username,
              email: email,
              password: password,
            }),
          })
            .then(response => {
              if (response.status === 409) {
                alert(
                  'An account with this email or password already exists',
                );
                return null;
              }
              if (response.status === 400) {
                alert('Wrong format of email or password');
                return null;
              }
              if (response.status === 200) {
                return response.json();
              }
            })
            .then(err => {
              if (err === null) {
                return null;
              }
              alert('Регистрация успешна.');
              navigation.navigate('login');
            })
            .catch(error => {
              console.error(
                'There was a problem with the fetch operation:',
                error,
              );
            });
        }}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Sign up</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default SignupButton;
