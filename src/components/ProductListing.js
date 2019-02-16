import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
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
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  productImage: {
    width: 100,
    height: 100
  },
  textContainer: {
    justifyContent: 'center',
    marginLeft: 35,
    width: '60%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
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
