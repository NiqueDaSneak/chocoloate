import { SHOW_PRODUCT_DETAILS, DISMISS_PRODUCT_DETAILS } from '../actions/actionTypes'

const initialState = {
  price: 0.00,
  cart: [],
  modalVisible: false,
  selectedProduct: {
    name: ''
  }
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
      const newCart = [...state.cart, action.payload.product]
      return {
        ...state,
        modalVisible: false,
        price: state.price + action.payload.product.price,
        cart: newCart
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
