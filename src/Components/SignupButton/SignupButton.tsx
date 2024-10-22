import React from 'react';
import { TouchableOpacity, View, Text, Alert } from 'react-native';
import styles from './SignupButtonStyles';

type SignupProps = {
  username: string,
  email: string,
  password: string,
  navigation, 
};

function SignupButton(props: SignupProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={(_) => {
        const username = props.username;
        const email = props.email;
        const password = props.password;
        const navigation = props.navigation;
        fetch('http://10.0.2.2:8080/v1/auth/signup', {
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
              Alert.alert('An account with this email or password already exists');
              return null;
            }
            if (response.status === 400) {
              Alert.alert('Wrong format of email or password');
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
            Alert.alert('Регистрация успешна.');
            navigation.navigate('login');
          })
          .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
          });

      }}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>
            Sign up
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default SignupButton;

