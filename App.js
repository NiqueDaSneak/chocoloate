import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/dist/Ionicons'

import AboutUsScreen from './src/screens/AboutUsScreen'
import ProductsScreen from './src/screens/ProductsScreen'
import CartScreen from './src/screens/CartScreen'
import colors from './assets/colorPalette.js'

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
    // activeTintColor: '#ECDA8F',
    activeBackgroundColor: colors.main,
    inactiveBackgroundColor: colors.secondary,
    // inactiveTintColor: '#B98948',
    // showIcon: false,
    showLabel: false
  }
}

const TabNavigator = createBottomTabNavigator(RouteConfigs, BottomTabNavigatorConfig);

export default createAppContainer(TabNavigator);
