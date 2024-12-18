import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  StatusBar,
  useColorScheme,
} from 'react-native';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import Pages from './src/pages';
import { AuthProvider } from './src/context/AuthContext';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <AuthProvider>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          />
            <Pages />
        </AuthProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
