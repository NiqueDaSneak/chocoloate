import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons'

import ProductListing from '../components/ProductListing'
import ProductDetailsModal from '../UI/Modal/ProductDetailsModal'
import Products from '../../data/products.js'
import colors from '../../assets/colorPalette.js'

class ProductsScreen extends Component {

  showProductDetails = (product) => {
    this.setState({
      modalVisible: true,
      selectedProduct: product })
  }

  dismissModal = (product) => {
    this.setState({
      modalVisible: false,
      price: this.state.price + product.price,
      })
  }

  state = {
    price: 0.00,
    modalVisible: false,
    selectedProduct: {
      name: ''
    }
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
        <FlatList data={Products} renderItem={ ({ item, index}) => <ProductListing showProductDetail={( props ) => this.showProductDetails(props)} color={ index%2 == 0 ? colors.darkGrey : colors.third } key={index} image={item.image} name={item.name} price={item.price} description={item.description}/>}/>
        <ProductDetailsModal dismissModal={(product) => this.dismissModal(product)} modalData={ {isVisible: this.state.modalVisible, selectedProduct: this.state.selectedProduct} } />
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
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  price: {
    color: '#C5C5C5',
  }
});


export default ProductsScreen
