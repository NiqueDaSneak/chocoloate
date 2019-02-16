import React, { Component } from 'react'
import { Button, Text, View, Image, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import colors from '../../../assets/colorPalette'

const ProductDetailsModal = ( props ) => {
  return(
    <View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={props.modalData.isVisible}
        onRequestClose={() => {}}
        onDimiss={() => {}}>
        <View style={styles.modalContainer}>
          <Image source={props.modalData.selectedProduct.image}/>
          <View style={styles.productInfoContainer}>
            <Text style={styles.productName}>{props.modalData.selectedProduct.name}</Text>
            <Text style={styles.productDescription}>{props.modalData.selectedProduct.description}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              onPress={() => props.dismissModal(props.modalData.selectedProduct)}
              title="Add To Cart"
              color={colors.success}
              accessibilityLabel="Add To Cart"
              />
            <Button
              onPress={() => props.dismissModal(props.modalData.selectedProduct)}
              title="Back To Products"
              color={colors.decline}
              accessibilityLabel="Back To Products"
              />
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    alignItems: 'center',
  },
  productInfoContainer: {
    marginTop: 45,
    width: '80%',
    alignItems: 'center',
  },
  productName: {
    fontSize: 18,
    fontStyle: 'italic'
  },
  productDescription: {
    marginTop: 30,
    fontSize: 14,
    textAlign: 'center',

  },
  buttonContainer: {
    marginTop: 90,
  }
})

export default ProductDetailsModal
