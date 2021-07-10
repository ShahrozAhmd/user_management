import 'react-native-gesture-handler';
import React from 'react';
import GridPractice from './src/GridPractice';
import MyApplication from './src/MyApplication';
import {Provider} from 'react-redux';
import store from './src/store';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    // <GridPractice />
    <Provider store={store}>
      <NavigationContainer>
        <MyApplication />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
