import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { useAuth } from '../context/AuthContext';

function Dashboard() {
  const { logout } = useAuth();

  return (
    <View>
      <Text>Dashboard</Text>
      <Pressable onPress={logout}>
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
}

export default Dashboard;
