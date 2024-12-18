import { loginApi } from '../api';
import { STORAGE_KEYS, VALID_CREDENTIALS } from '../constants';
import { storeData } from '../utils/storage';
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
} from 'react-native';
import { useMutation } from 'react-query';

function Login() {
  const [user, setUser] = useState(VALID_CREDENTIALS);
  const { mutate: login, isLoading } = useMutation(loginApi, {
    onSuccess(data) {
      storeData(STORAGE_KEYS.TOKEN, data.data);
    },
  });

  const onChangeInput = (name: string, value: string) => {
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <View>
      <Text>Login</Text>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={(value) => onChangeInput('username', value)}
          value={user.username}
        />
        <TextInput
          style={styles.input}
          onChangeText={(value) => onChangeInput('password', value)}
          value={user.password}
          secureTextEntry
        />
      </View>
      <Pressable
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
          styles.wrapperCustom,
        ]}
        onPress={() => login(user)}
        disabled={isLoading}
      >
        <Text>Login</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  wrapperCustom: {
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 8,
    padding: 6,
    paddingVertical: 10,
  },
});

export default Login;
