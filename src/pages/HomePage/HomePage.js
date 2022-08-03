import {View, FlatList} from 'react-native';
import React from 'react';
import style from './HomePage.style';
import patikaObject from '../../patikaObject.json';

//COMPONENTS
import SearchInput from '../../components/find/SearchInput';
import Card from '../../components/card';

const HomePage = () => {

  const renderItem = ({item}) => {
    return(
      <Card item={item}/>
    )
  }

  return (
    <View style={style.container}>
      <SearchInput />
      <View style={style.flatListContainer}>
        <FlatList
          data={patikaObject}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default HomePage;
