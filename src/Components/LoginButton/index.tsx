import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styles from './styles';

function LoginButton(): React.JSX.Element {
  return (
    <View style={styles.container}>
     <TouchableOpacity>
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
