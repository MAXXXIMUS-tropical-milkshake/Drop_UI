import React from 'react';
import {useState} from 'react';
import styles from './styles';
import { TextInput, View, Text } from 'react-native';

function InputForm(): React.JSX.Element {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  return (
    <View>
      <View style={styles.input}>
        <Text style={styles.inputLabel}>Email address</Text>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          placeholder="qwerty@example.com"
          placeholderTextColor="#6b7280"
          style={styles.inputControl}
          value={form.email}
          onChangeText={(email: string) => setForm({...form, email})}
        />
      </View>
      <View style={styles.input}>
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          secureTextEntry
          placeholder="*********"
          placeholderTextColor="#6b7280"
          style={styles.inputControl}
          value={form.password}
          onChangeText={(password: string) => setForm({...form, password})}
        />
      </View>
    </View>
  );
}

export default InputForm;

