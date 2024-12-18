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
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

type NavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

function Login() {
  const navigation = useNavigation<NavigationProp>();
  const [user, setUser] = useState(VALID_CREDENTIALS);
  const { mutate: login, isLoading } = useMutation(loginApi, {
    onSuccess: async (data) => {
      await storeData(STORAGE_KEYS.TOKEN, data.data);
      navigation.navigate('Dashboard');
    },
  });

  const onChangeInput = (name: string, value: string) => {
    setUser({
      ...user,
      [name]: value,
    });
  };

  const onSubmit = () => {
    if (!user.username || !user.password) {
      return;
    }
    login(user);
  };

  return (
    <View style={styles.container}>
      <View style={{ width: '90%', alignSelf: 'center' }}>
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
          styles.button,
        ]}
        onPress={onSubmit}
        disabled={isLoading}
      >
        <Text style={styles.textButtom}>Login</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'flex-end',
  },
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
    padding: 10,
    paddingVertical: 10,
  },
  button: {
    display: 'flex',
    alignItems: 'flex-end',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#138',
    borderRadius: 15,
  },
  textButtom: {
    color: '#fff',
  },
});

export default Login;
