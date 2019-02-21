import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons'
import { connect } from 'react-redux'

import ProductListing from '../components/ProductListing'
import colors from '../../assets/colorPalette.js'
import { removeItemFromCart } from '../store/actions/index'
import FinalBillModal from '../UI/Modal/FinalBillModal'


class CartScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingFinalBill: false
    }
  }
  static navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => {
      return <Icon name='ios-cart' size={30} color={ focused ? '#ECDA8F' : '#B98948' } />
    }
  }

  removeItemFromCart = (name) => {
    this.props.removeItemFromCart(name)
  }

  showFinalBill = () => {
    this.setState({ showingFinalBill: true })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.heightGiver}>
          <View style={styles.listContainer}>
            <FlatList
              keyExtractor={(item, index) => item.name}
              data={this.props.cart}
              extraData={this.props}
              renderItem={ ({item, index}) =>
              <ProductListing
                removeItemFromCart={(name) => this.removeItemFromCart(name)}
                showRemoveBtn='flex'
                showProductDetail={() => {}}
                color={ index % 2 == 0 ? colors.darkGrey : colors.lightGrey }
                image={item.image}
                name={item.name}
                price={item.price}
                description={item.description} /> }/>
            </View>
          </View>
        <View style={styles.bottomBar}>
          <Text style={styles.price}>Total: ${this.props.price.toFixed(2)}</Text>
          <Button onPress={this.showFinalBill} disabled={this.props.price === 0 ? true : false} style={styles.payBtn} color={colors.success} title='Confirm Order'/>
        </View>
        <FinalBillModal showing={this.state.showingFinalBill}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: colors.lightGrey
  },
  heightGiver: {
    // height: 510,
  },
  listContainer: {
    backgroundColor: colors.lightGrey,
    // flex: 2,
    // flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingTop: 218
  },
  bottomBar: {
    // flex: 1,
    backgroundColor: 'black',
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
    color: colors.main,
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
    removeItemFromCart: (name) => dispatch(removeItemFromCart(name))
  }
}


export default connect(mapStatetoProps, mapDispatchToProps)(CartScreen)
