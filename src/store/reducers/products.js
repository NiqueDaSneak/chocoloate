import { SHOW_PRODUCT_DETAILS, DISMISS_PRODUCT_DETAILS } from '../actions/actionTypes'

const initialState = {
  price: 0.00,
  modalVisible: false,
  selectedProduct: {
    name: ''
  },
  cart: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case SHOW_PRODUCT_DETAILS:
      return {
        ...state,
          modalVisible: true,
          selectedProduct: action.product
      }

      case DISMISS_PRODUCT_DETAILS:
        if (action.payload.addToCart) {
          return {
          ...state,
          modalVisible: false,
          price: state.price + action.payload.product.price,
          cart: state.cart.push(action.payload.product)
        }
        } else {
          return {
          ...state,
          modalVisible: false,
        }
        }
    default:
      return state
  }
}

export default reducer
