import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons'
import ProductListing from '../components/ProductListing.js'

import Products from '../../data/products.js'

class ProductsScreen extends Component {
  state = {
    price: 0.00
  }

  static navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => {
      return <Icon name='ios-pricetags' size={30} color={ focused ? '#ECDA8F' : '#B98948' } />
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{`$${this.state.price}`}</Text>
        </View>
        <FlatList
          data={Products}
          renderItem={({item}) => <ProductListing key={item.name} image={item.image} name={item.name} price={item.price} description={item.description}/>} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#393939',
  },
  priceContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  price: {
    color: '#C5C5C5',
  }
});


export default ProductsScreen
