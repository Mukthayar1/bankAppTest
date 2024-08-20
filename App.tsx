import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { persistor, store } from './src/store/store';
import MainRoutes from './src/routes';

const queryClient = new QueryClient()


const App = () => (
  <QueryClientProvider client={queryClient}>
    <View style={{ flex: 1 }}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor} onBeforeLift={() => { }}>
          <MainRoutes />
        </PersistGate>
      </Provider>
    </View>
  </QueryClientProvider>
);

export default App;