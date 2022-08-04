import React from 'react';
import {SafeAreaView, Text} from 'react-native';

//PAGES
import HomePage from './src/pages/HomePage';

const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <HomePage />
    </SafeAreaView>
  );
};

export default App;
