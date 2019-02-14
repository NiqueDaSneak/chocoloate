import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/dist/Ionicons'

class AboutUsScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => {
      return <Icon name='ios-information-circle' size={30} />
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>About</Text>
        <Text style={styles.instructions}>About</Text>
      </View>
    );
  }
}

class ProductsScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => {
      return <Icon name='ios-pricetags' size={30} />
    }
  }

  render() {
    return (
      <View style={styles.container2}>
        <Text style={styles.welcome}>Products</Text>
        <Text style={styles.instructions}>Products</Text>
      </View>
    );
  }
}

class CartScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => {
      return <Icon name='ios-cart' size={30} />
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Cart</Text>
        <Text style={styles.instructions}>Cart</Text>
      </View>
    );
  }
}

const RouteConfigs = {
  AboutUs: {
    screen: AboutUsScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'About Us'
    })
  },
  Products: {
    screen: ProductsScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Products'
    })
  },
  Cart: {
    screen: CartScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Cart'
    })
  }
}

const BottomTabNavigatorConfig = {
  initialRouteName: 'AboutUs',
  tabBarOptions: {
    activeTintColor: 'yellow',
    activeBackgroundColor: 'purple',
    inactiveTintColor: 'red',
    // showIcon: false,
    showLabel: false
  }
}
const TabNavigator = createBottomTabNavigator(RouteConfigs, BottomTabNavigatorConfig);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default createAppContainer(TabNavigator);
