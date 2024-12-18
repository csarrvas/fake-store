import React, { createContext, useState, useContext, ReactNode } from 'react';
import { removeData, storeData } from '../utils/storage';
import { STORAGE_KEYS } from '../constants';
import { loginApi } from '../api';
import { useMutation } from 'react-query';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList, User } from '../types';
import { StackNavigationProp } from '@react-navigation/stack';

type NavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

const AuthContext = createContext({
  isAuthenticated: false,
  isLoading: false,
  login: (_: User) => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigation = useNavigation<NavigationProp>();

  const { mutate: login, isLoading } = useMutation(loginApi, {
    onSuccess: async (data) => {
      await storeData(STORAGE_KEYS.TOKEN, data.data);
      setIsAuthenticated(true);
      navigation.navigate('Dashboard');
    },
  });

  const logout = async () => {
    await removeData(STORAGE_KEYS.TOKEN);
    setIsAuthenticated(false);
    navigation.navigate('Login');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
