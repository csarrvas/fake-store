import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, FlatList, StyleSheet, TextInput, Pressable } from 'react-native';
import { useInfiniteQuery } from 'react-query';
import { getProductsApi } from '../api';
import { getRandomInt } from '../utils';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types';
import { StackNavigationProp } from '@react-navigation/stack';
import { storeData } from '../utils/storage';
import { STORAGE_KEYS } from '../constants';

type NavigationProp = StackNavigationProp<RootStackParamList, 'Product'>;

const Products = () => {
  const navigation = useNavigation<NavigationProp>();
  const [filteredValue, setFilteredValue] = useState('');
  const [filteredProductList, setFilteredProducts] = useState([]);
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
  } = useInfiniteQuery('products', () => getProductsApi(20), {
    getNextPageParam: () => 20,
  });

  const products = data?.pages.flatMap((page) => page.data) || [];

  useEffect(() => {
    if (filteredValue) {
      setFilteredProducts(
        // @ts-ignore
        products.filter(product => product.title.includes(filteredValue))
      );
    } else {
      setFilteredProducts([]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredValue]);

  const onPressHandler = async (product: number) => {
    await storeData(STORAGE_KEYS.ACTIVE_PRODUCT, product);
    navigation.navigate('Product');
  };


  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={setFilteredValue}
        value={filteredValue}
      />
      <FlatList
        data={filteredValue ? filteredProductList : products}
        keyExtractor={(item) => `${Date.now()}-${getRandomInt()}-${item.id}`}
        renderItem={({ item }) => (
          <Pressable onLongPress={() => onPressHandler(item)}>
            <View style={styles.item}>
              <Text>{item.title}</Text>
              <Text>${item.price}</Text>
            </View>
          </Pressable>
        )}
        onEndReached={() => {
          console.log({ hasNextPage });
          if (hasNextPage) {
            fetchNextPage();
          }
        }}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          isLoading ? <ActivityIndicator size="large" color="#0000ff" /> : null
      }
    />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default Products;
