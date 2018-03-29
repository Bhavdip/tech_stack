import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';

//fuctional component
const App = () => (
  <Provider store={createStore(reducers)}>
    <View>
      <Header screenTitle="Tech Stack" />
    </View>
  </Provider>
);
export default App;
