import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styles from './styles';

type LoginProps = {
  email: string,
  password: string
};

function LoginButton(props: LoginProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={(_) => {
        const email = props.email;
        const pass = props.password;

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
