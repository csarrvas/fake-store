import { client } from '../config/axios';
import { User } from '../types';

export const loginApi = (user: User) => client.post('/auth/login', user);

export const getProductsApi = () => client.get('/products');

export const getProductApi = (id: string) => client.get(`/products/${id}`);

export const getUserApi = (id: string) => client.get(`/users/${id}`);
