import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/store/store';
import MainRoutes from './src/routes';

const App = () => (
  <View style={{ flex: 1 }}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} onBeforeLift={() => { }}>
        <MainRoutes />
      </PersistGate>
    </Provider>
  </View>
);

export default App;