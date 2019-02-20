import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons'
import { connect } from 'react-redux'

import ProductListing from '../components/ProductListing'
import ProductDetailsModal from '../UI/Modal/ProductDetailsModal'
import Products from '../../data/products.js'
import colors from '../../assets/colorPalette.js'
import { showProductDetails, dismissProductDetails } from '../store/actions/index'

class ProductsScreen extends Component {

  showProductDetails = (product) => {
    this.props.showProductDetails(product)
  }

  dismissModal = (payload) => {
    this.props.dismissProductDetails(payload)
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
          <Text style={styles.price}>{`$${this.props.price.toFixed(2)}`}</Text>
        </View>
        <FlatList
          keyExtractor={(item) => item.name}
          data={Products}
          renderItem={ ({ item, index}) =>
          <ProductListing
            showRemoveBtn='none'
            showProductDetail={( props ) => this.showProductDetails(props)}
            color={ index%2 == 0 ? colors.darkGrey : colors.lightGrey }
            image={item.image}
            name={item.name}
            price={item.price}
            description={item.description}/>}/>
        <ProductDetailsModal
          dismissModal={ (payload) => this.dismissModal(payload)}
          modalData={{ isVisible: this.props.modalVisible, selectedProduct: this.props.selectedProduct }} />
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

const mapStatetoProps = state => {
  return {
    price: state.products.price,
    modalVisible: state.products.modalVisible,
    selectedProduct: state.products.selectedProduct,
    cart: state.products.cart
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showProductDetails: (product) => dispatch(showProductDetails(product)),
    dismissProductDetails: (payload) => dispatch(dismissProductDetails(payload))
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(ProductsScreen)
