import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native';
import colors from '../../assets/colorPalette.js'

const ProductListing = ( props ) => {
  // const img = require({props.image})

  return(
    <View style={styles.container}>
      <Image source={props.image} style={styles.productImage} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.price}>{props.price}</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 30,
    backgroundColor: colors.third
  },
  productImage: {
    width: 130,
    height: 130
  },
  textContainer: {
    justifyContent: 'center',
    marginLeft: 25,
    width: '50%'
  },
  name: {
    color: colors.lightGrey,
    fontSize: 16,
    fontStyle: 'italic'
  },
  price: {
    color: colors.lightGrey,
    fontSize: 14,
    fontWeight: 'bold'
  }
})
export default ProductListing
