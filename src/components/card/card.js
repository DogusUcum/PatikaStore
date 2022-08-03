import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './card.style';

const card = ({item}) => {
  const {title, imgURL, price, inStock} = item;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: imgURL}} />
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
      <Text style={styles.inStock}>{inStock ? 'STOKTA VAR' : 'STOKTA YOK'}</Text>
    </View>
  );
};

export default card;
