import React, { useContext } from 'react';
import styles from './SignupFormStyles';
import { TextInput, View, Text, Platform } from 'react-native';
import ThemeContext from '../../Common/ThemeContext';

type SignupFormProps = {
  form: {
    username: string;
    email: string;
    password: string;
  };
  setForm: React.Dispatch<
    React.SetStateAction<{
      username: string;
      email: string;
      password: string;
    }>
  >;
};

function SignupForm(props: SignupFormProps): React.JSX.Element {
  const {appTheme, setAppTheme} = useContext(ThemeContext);
  return (
    <View>
      <View style={styles.input}>
        <Text style={styles.inputLabel}>Username</Text>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="user123"
          placeholderTextColor="#6b7280"
          style={styles.inputControlNonWeb}
          value={props.form.username}
          onChangeText={(username: string) =>
            props.setForm({ ...props.form, username })
          }
        />
      </View>
      <View style={styles.input}>
        <Text style={styles.inputLabel}>Email address</Text>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          placeholder="qwerty@example.com"
          placeholderTextColor="#6b7280"
          style={Platform.OS === 'web' && appTheme == 'light' ? styles.inputControlWeb : styles.inputControlNonWeb}
          value={props.form.email}
          onChangeText={(email: string) =>
            props.setForm({ ...props.form, email })
          }
        />
      </View>
      <View style={styles.input}>
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          secureTextEntry
          placeholder="*********"
          placeholderTextColor="#6b7280"
          style={styles.inputControlNonWeb}
          value={props.form.password}
          onChangeText={(password: string) =>
            props.setForm({ ...props.form, password })
          }
        />
      </View>
    </View>
  );
}

export default SignupForm;
