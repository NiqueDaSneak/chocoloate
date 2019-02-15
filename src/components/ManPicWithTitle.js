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
    marginRight: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  title: {
    color: 'white',
    marginBottom: 5
  }
})

export default ManPicWithTitle
