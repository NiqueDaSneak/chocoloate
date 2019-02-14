import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons'
import ManChooser from '../components/ManChooser.js'

class AboutUsScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => {
      return <Icon name='ios-information-circle' size={30} color={ focused ? '#ECDA8F' : '#B98948' } />
    }
  }

  render() {
    return (
      <View style={styles.mainView}>
        <Image source={ require('../../assets/imgs/cdc-logo.png') } style={styles.logo}/>
        <Text style={styles.introCopy}>Proin justo est, tempor mattis vulputate nec, ultrices at sem. Donec sit amet mi nulla. Nunc ac pellentesque nisl, ut finibus velit</Text>
        <ManChooser header='Types of Gentlemen' />
  </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#393939',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginTop: 100
  },
  introCopy: {
    width: '75%',
    color: '#C5C5C5',
    textAlign: 'center',
    marginTop: 25,
    fontSize: 12,
    fontWeight: 'bold'
  }
});

export default AboutUsScreen
