import React from 'react';
import { TouchableOpacity, View, Text, Alert } from 'react-native';
import styles from './SignupButtonStyles';

type SignupProps = {
  username: string,
  email: string,
  password: string
};

function SignupButton(props: SignupProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={(_) => {
        const username = props.username;
        const email = props.email;
        const password = props.password;
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
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(() => {
            Alert.alert('Регистрация успешна.');
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

