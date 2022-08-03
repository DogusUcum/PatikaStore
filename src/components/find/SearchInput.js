import {Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import styles from './SearchInput.style';

const SearchInput = () => {
  const [text, onChaneText] = useState();

  return (
    <View>
      <Text style={styles.text}>PATIKASTORE</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChaneText}
        placeholder="Ara..."
        value={text}
      />
    </View>
  );
};

export default SearchInput;
