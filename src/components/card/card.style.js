import {Dimensions, StyleSheet} from 'react-native';

const height = Dimensions.get('screen').height / 2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    width: Dimensions.get('window').width / 2,
    marginTop: 10,
    marginHorizontal: 10,
    backgroundColor: 'lightgray',
    borderRadius: 10,
  },
  image: {
    flex:2,
    resizeMode:'contain',
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  text: {
    flex:1,
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  price: {
    marginHorizontal: 10,
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  inStock: {
    marginHorizontal: 10,
    marginBottom:10,
    fontWeight: 'bold',
    fontSize: 18,
    color: 'red',
  },
});

export default styles;
