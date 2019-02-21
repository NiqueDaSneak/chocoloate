import React, { Component } from 'react'
import { TouchableOpacity, Text, View, Image, StyleSheet } from 'react-native';

const ManPicWithTitle = ( props ) => {
  return(
    <View style={styles.manPicWithTitle}>
      <Text style={styles.title}>{ props.title }</Text>
      <TouchableOpacity>
        <Image source={props.imgSource}/>
      </TouchableOpacity>
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
