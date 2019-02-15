import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native';

import ManPicWithTitle from './ManPicWithTitle'
const ManChooser = ( props ) => {
  return (
    <View style={styles.mainView}>
      <View style={styles.headingContainer}>
        <Text style={styles.header}>{ props.header }</Text>
      </View>
      <View style={styles.imageRow}>

        <ManPicWithTitle title='Fitness' imgSource={require('../../assets/imgs/menImgs/man-fit.png')} />
        <ManPicWithTitle title='Long Hair' imgSource={require('../../assets/imgs/menImgs/man-hair.png')} />

      </View>
      <View style={styles.imageRow}>
        <ManPicWithTitle title='Mysterious' imgSource={require('../../assets/imgs/menImgs/man-mysterious.png')} />
        <ManPicWithTitle title='Business' imgSource={require('../../assets/imgs/menImgs/man-suit.png')} />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  mainView: {
    marginTop: 25
  },
  imageRow: {
    flexDirection: 'row',
    marginBottom: 10
  },
  headingContainer: {
    alignItems: 'center',
    marginBottom: 20,
    borderBottomColor: '#B98948',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom: 8
  },
  header: {
    fontSize: 22,
    color: '#C5C5C5',
    fontWeight: '300',
    fontStyle: 'italic'
  }
})
export default ManChooser
