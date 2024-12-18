import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../types';
import { StackNavigationProp } from '@react-navigation/stack';
import { useQuery } from 'react-query';
import { getUserApi } from '../api';

type NavigationProp = StackNavigationProp<RootStackParamList, 'User'>;


export const User = () => {
  const navigation = useNavigation<NavigationProp>();
  const query = useQuery('user', () => getUserApi('1'));

  if (!query?.data) {
    return <></>;
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>User properties</Text>
      {Object.entries(query.data.data).map(([key, value]) => (
        <View key={key} style={styles.property}>
          <Text>{key}:</Text>
          <Text>{JSON.stringify(value)}</Text>
        </View>
      ))}
      <Pressable style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.textButtom}>Dismiss</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  property: {
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 10,
    padding: 15,
    maxWidth: 400,
    marginLeft: 10,
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

export default User;
