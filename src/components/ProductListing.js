import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, Button } from 'react-native';
import colors from '../../assets/colorPalette.js'

const ProductListing = ( props ) => {
  // const img = require({props.image})

  return(
    <TouchableOpacity onPress={ () => props.showProductDetail(props) }>
      <View style={[{backgroundColor: props.color}, styles.container]}>
        <Image source={props.image} style={styles.productImage} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{props.name}</Text>
          <Text style={styles.price}>${props.price.toFixed(2)}</Text>
        </View>
        <TouchableOpacity onPress={() => props.removeItemFromCart(props.key)} style={[ { display: props.showRemoveBtn }, styles.minusBtn]}><Text style={styles.minusSign}>-</Text></TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  minusSign: {
    fontSize: 20,
    color: 'white'
  },
  minusBtn: {
    backgroundColor: colors.decline,
    borderRadius: 4,
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 35,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1
  },
  productImage: {
    width: 100,
    height: 100
  },
  textContainer: {
    justifyContent: 'center',
    marginLeft: 35,
    width: '40%'
  },
  name: {
    color: colors.main,
    fontSize: 14,
    fontStyle: 'italic'
  },
  price: {
    color: colors.secondary,
    fontSize: 14,
    fontWeight: 'bold'
  }
})
export default ProductListing
