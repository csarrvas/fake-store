import React from 'react';
import { Text, View, Pressable, StyleSheet } from 'react-native';
import { useAuth } from '../context/AuthContext';
import Products from '../components/Products';
import { RootStackParamList } from '../types';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

type NavigationProp = StackNavigationProp<RootStackParamList, 'User'>;

function Dashboard() {
  const { logout } = useAuth();
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Pressable onPress={() => navigation.navigate('User')} style={styles.button}
        >
          <Text style={styles.textButtom}>User info</Text>
        </Pressable>
        <Pressable onPress={logout} style={styles.button}
        >
          <Text style={styles.textButtom}>Logout</Text>
        </Pressable>
      </View>
      <Products />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  buttonsContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
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

export default Dashboard;
