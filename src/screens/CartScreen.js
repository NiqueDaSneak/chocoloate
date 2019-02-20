import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons'
import { connect } from 'react-redux'

import ProductListing from '../components/ProductListing'
import colors from '../../assets/colorPalette.js'


class CartScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => {
      return <Icon name='ios-cart' size={30} color={ focused ? '#ECDA8F' : '#B98948' } />
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.listContainer}>
          <FlatList
            keyExtractor={(item) => item.name}
            data={this.props.cart} r
            enderItem={ ({item, index}) =>
            <ProductListing
              showRemoveBtn='flex'
              showProductDetail={() => {}}
              color={ index%2 == 0 ? colors.darkGrey : colors.third }
              image={item.image}
              name={item.name}
              price={item.price}
              description={item.description} /> }/>
        </View>
        <View style={styles.bottomBar}>
          <Text style={styles.price}>Total: ${this.props.price.toFixed(2)}</Text>
          <Button style={styles.payBtn} color={colors.success} title='Confirm Order'/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#F5FCFF'
  },
  listContainer: {
    backgroundColor: 'red',
  },
  bottomBar: {
    backgroundColor: colors.darkGrey,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '25%',
  },
  payBtn: {
    color: colors.success
  },
  price: {
    fontSize: 22,
    color: colors.lightGrey,
    fontWeight: 'bold',
    marginBottom: 4
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const mapStatetoProps = (state) => {
  return {
    price: state.products.price,
    cart: state.products.cart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}


export default connect(mapStatetoProps, mapDispatchToProps)(CartScreen)
