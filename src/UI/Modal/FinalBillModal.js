import React, { Component } from 'react'
import { Button, Text, View, Image, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import colors from '../../../assets/colorPalette'
import { connect } from 'react-redux'

import { showProductDetails, dismissProductDetails } from '../../store/actions/index'

class FinalBillModal extends Component {
  render() {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.showing}>
            <Text>{ this.props.cart.length === 0 ? null : this.props.cart[0].name }</Text>
        </Modal>
      </View>
    )
  }
}

const mapStatetoProps = (state) => {
  return {
    price: state.products.price,
    modalVisible: state.products.modalVisible,
    selectedProduct: state.products.selectedProduct,
    cart: state.products.cart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showProductDetails: (product) => dispatch(showProductDetails(product)),
    dismissProductDetails: (payload) => dispatch(dismissProductDetails(payload))
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(FinalBillModal)
