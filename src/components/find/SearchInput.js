import {TextInput, View} from 'react-native';
import React, {useState} from 'react';
import styles from './SearchInput.style'

const SearchInput = () => {
  const [text, onChaneText] = useState();

  return (
    <View>
      <TextInput style={styles.input} onChangeText={onChaneText} placeholder="Ara..." />
    </View>
  );
};

export default SearchInput;
