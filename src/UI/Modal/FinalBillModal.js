import React, { Component } from 'react'
import { Button, Text, View, Image, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import colors from '../../../assets/colorPalette'

const FinalBillModal = ( props ) => {
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={props.showing} />
    </View>
  )
}

export default FinalBillModal
