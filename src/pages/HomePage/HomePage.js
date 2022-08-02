import {View, Text, FlatList} from 'react-native';
import React from 'react';
import style from './HomePage.style';

//COMPONENTS
import SearchInput from '../../components/find/SearchInput';

const HomePage = () => {
  return (
    <View style={style.container}>
      <SearchInput />
      <FlatList />
    </View>
  );
};

export default HomePage;
