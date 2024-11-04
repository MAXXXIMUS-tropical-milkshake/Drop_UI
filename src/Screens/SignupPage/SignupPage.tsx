import React, { useContext, useEffect, useState } from 'react';
import styles from './SignupPageStyles';
import { View, Image, Text, SafeAreaView, TouchableOpacity, useColorScheme } from 'react-native';
import SignupForm from '../../Components/SignupForm/SignupForm';
import SignupButton from '../../Components/SignupButton/SignupButton';
import { PageProp } from '../Common/PageProps';
import ThemeContext from '../../Common/ThemeContext';

function SignupPage({ navigation }: PageProp): React.JSX.Element {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  });
  const { appTheme, setAppTheme } = useContext(ThemeContext);
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => { setAppTheme(appTheme === 'light' ? 'dark' : 'light'); }}>
        <Text style={{ color: 'red' }}>Switch Theme</Text>
      </TouchableOpacity>

      <View style={styles.header}>
        <Image
          source={require('../../../assets/droplogo.png')}
          style={styles.headerImage}
          alt="Logo"
        />
        <Text style={styles.title}>
          Sign up to <Text style={styles.titleDrop}>Drop</Text>
        </Text>
      </View>

      <View style={styles.form}>
        <SignupForm form={form} setForm={setForm} />
        <SignupButton
          username={form.username}
          email={form.email}
          password={form.password}
          navigation={navigation}
        />
      </View>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('login')}>
        <Text style={styles.loginText}>Already have an account? Log in</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default SignupPage;
