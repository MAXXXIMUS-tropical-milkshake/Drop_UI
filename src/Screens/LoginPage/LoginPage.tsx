import React, { useState } from 'react';
import styles from './LoginPageStyles';
import {
  View,
  Image,
  Text,
} from 'react-native';
import InputForm from '../../Components/InputForm/InputForm';
import LoginButton from '../../Components/LoginButton/LoginButton';

function LoginPage(): React.JSX.Element {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
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
        <InputForm form={form} setForm={setForm} />
        <LoginButton email={form.email} password={form.password} />
      </View>
    </View>
  );
}

export default LoginPage;

