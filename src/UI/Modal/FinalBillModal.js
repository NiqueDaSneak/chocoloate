import React, { Component } from 'react'
import { TouchableWithoutFeedback, ScrollView, TextInput, Button, Text, View, Image, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/dist/Ionicons'

import ManChooser from '../../components/ManChooser'
import colors from '../../../assets/colorPalette'
import { showProductDetails, dismissProductDetails } from '../../store/actions/index'

class FinalBillModal extends Component {
  render() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.showing}>
        <ScrollView style={styles.container}>
          <TouchableOpacity>
            <TouchableWithoutFeedback>
              <View style={styles.contentCont}>
                <View style={styles.header}>
                  <Text style={styles.heading}>Order Summary</Text>
                  <Text style={styles.price}>${this.props.price.toFixed(2)}</Text>
                </View>
                <View style={styles.allInputs}>
                  <Text style={styles.inputHeader}>Credit Card</Text>
                  <View style={styles.inputCont}>
                    <TextInput keyboardAppearance='dark' keyboardType='numeric' style={styles.input} placeholder='5555-5555-5555-5555'/>
                  </View>
                  <Text style={styles.inputHeader}>Email</Text>
                  <View style={styles.inputCont}>
                    <TextInput keyboardAppearance='dark' style={styles.input} placeholder='steve.jobs@apple.com'/>
                  </View>
                  <Text style={styles.inputHeader}>Location</Text>
                  <View style={[styles.inputCont, styles.locationInputCont]}>
                    <TextInput keyboardAppearance='dark' style={[styles.locationInput, styles.input]} placeholder='1234 Sesame Street'/>
                    <TouchableOpacity onPress={() => {}} style={styles.locationBtn}>
                      <Icon name='ios-navigate' size={30} color='white' />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.mapView}>
                </View>
                <ManChooser header='Choose Your Type of Gentleman' />
                <View style={styles.submitOrderBtnCont}>
                  <Button onPress={this.props.completeOrder} title='Complete Order' color={colors.success} />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </TouchableOpacity>
        </ScrollView>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkGrey,
  },
  contentCont: {
    alignItems: 'center',
    paddingBottom: 250,
  },
  scroller: {
    height: 1000
  },
  submitOrderBtnCont: {
    marginTop: 30
  },
  header: {
    marginTop: 60,
    marginBottom: 30,
    alignItems: 'center'
  },
  allInputs: {
    width: '88%',
    backgroundColor: 'white',
    borderRadius: 4,
    padding: 14,
    marginBottom: 30
  },
  inputCont: {
    marginBottom: 15,
  },
  locationInputCont: {
    marginBottom: 0,
    flexDirection: 'row',
  },
  inputHeader: {
    fontSize: 16
  },
  heading: {
    fontSize: 20,
    color: 'white'
  },
  input: {
    backgroundColor: '#D8D8D8',
    fontSize: 16,
    borderRadius: 4,
    padding: 6
  },
  locationInput: {
    width: '80%'
  },
  price: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold'
  },
  locationBtn: {
    backgroundColor: 'blue',
    borderRadius: 4,
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  mapView: {
    backgroundColor: 'red',
    width: '88%',
    height: '20%',
    // marginLeft: '6%',
    borderRadius: 4,
  }
})

const mapStatetoProps = (state) => {
  return {
    price: state.products.price,
    modalVisible: state.products.modalVisible,
    selectedProduct: state.products.selectedProduct,
    cart: state.products.cart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showProductDetails: (product) => dispatch(showProductDetails(product)),
    dismissProductDetails: (payload) => dispatch(dismissProductDetails(payload))
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(FinalBillModal)
