import React, {useState} from 'react';
import styles from './LoginPageStyles';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import LoginForm from '../../Components/LoginForm/LoginForm';
import LoginButton from '../../Components/LoginButton/LoginButton';
import {PageProp} from '../Common/PageProps';

function LoginPage({navigation}: PageProp): React.JSX.Element {
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
          alt="Logo"
        />
        <Text style={styles.title}>
          Sign in to <Text style={styles.titleDrop}>Drop</Text>
        </Text>
      </View>

      <View style={styles.form}>
        <LoginForm form={form} setForm={setForm} />
        <LoginButton
          email={form.email}
          password={form.password}
          navigation={navigation}
        />
      </View>
      <TouchableOpacity
        style={styles.signUpButton}
        onPress={() => navigation.navigate('signup')}>
        <Text style={styles.signUpText}>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}

export default LoginPage;
