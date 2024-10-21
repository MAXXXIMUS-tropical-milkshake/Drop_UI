import React from 'react';
import { useState } from 'react';
import styles from './styles';
import { TextInput, View, Text } from 'react-native';


type InputFormProps = {
  form: {
    email: string,
    password: string
  }
  setForm: React.Dispatch<React.SetStateAction<{
    email: string;
    password: string;
  }>>
}

function InputForm(props: InputFormProps): React.JSX.Element {
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
          value={props.form.email}
          onChangeText={(email: string) => props.setForm({ ...props.form, email })}
        />
      </View>
      <View style={styles.input}>
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          secureTextEntry
          placeholder="*********"
          placeholderTextColor="#6b7280"
          style={styles.inputControl}
          value={props.form.password}
          onChangeText={(password: string) => props.setForm({ ...props.form, password })}
        />
      </View>
    </View>
  );
}

export default InputForm;

