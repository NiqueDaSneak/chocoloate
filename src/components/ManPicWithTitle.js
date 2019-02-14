import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native';

const ManPicWithTitle = ( props ) => {
  return(
    <View style={styles.manPicWithTitle}>
      <Text style={styles.title}>{ props.title }</Text>
      <Image source={props.imgSource}/>
    </View>
  )
}

const styles = StyleSheet.create({
  manPicWithTitle: {
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20
  },
  title: {
    color: 'white',
    marginBottom: 5
  }
})

export default ManPicWithTitle
