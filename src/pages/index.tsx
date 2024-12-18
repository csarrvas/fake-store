import React from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function Pages(): React.JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
      name="Dashboard"
      component={Dashboard}
      options={{
        headerBackVisible: false,
      }}
    />
    </Stack.Navigator>
  );
}

export default Pages;
