import { AppRegistry } from 'react-native';
import React from 'react';
import App from './App';
import { store } from './src/reducers';
import { Provider } from 'react-redux';

const RNRedux = () => (
  <Provider store = { store }>
    <App />
  </Provider>
)

AppRegistry.registerComponent(() => RNRedux);