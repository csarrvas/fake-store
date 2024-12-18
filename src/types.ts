import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type User = {
  username: string
  password: string
};

export type RootStackParamList = {
  Login: undefined;
  Dashboard: undefined;
};


export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
export type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Dashboard'>;
