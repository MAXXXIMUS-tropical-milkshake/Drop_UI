import React, {useState} from 'react';
import styles from './SignupPageStyles';
import {View, Image, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import SignupForm from '../../Components/SignupForm/SignupForm';
import SignupButton from '../../Components/SignupButton/SignupButton';
import {PageProp} from '../Common/PageProps';

function SignupPage({navigation}: PageProp): React.JSX.Element {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  });
  return (
    <SafeAreaView style={styles.container}>
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
