import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { getData } from '../utils/storage';
import { STORAGE_KEYS } from '../constants';
import { RootStackParamList } from '../types';
import { StackNavigationProp } from '@react-navigation/stack';
import { useQuery } from 'react-query';
import { getProductApi } from '../api';

type NavigationProp = StackNavigationProp<RootStackParamList, 'Dashboard'>;


export const Modal = () => {
  const [productId, setProductId] = useState('');
  const navigation = useNavigation<NavigationProp>();
  const query = useQuery(['product', productId], () => getProductApi(productId),{
    enabled: !!productId,
  });

  useEffect(() => {
    const loadProduct = async () => {
      const productStorage = await getData(STORAGE_KEYS.ACTIVE_PRODUCT);
      setProductId(productStorage.id);
    };
    loadProduct();
  }, []);

  if (!query?.data) {
    return <></>;
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Product properties</Text>
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

export default Modal;
