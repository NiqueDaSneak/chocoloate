import { REMOVE_ITEM_FROM_CART, SHOW_PRODUCT_DETAILS, DISMISS_PRODUCT_DETAILS } from '../actions/actionTypes'

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
    case REMOVE_ITEM_FROM_CART:
      const newCart = []
      var newPrice = state.price
      for (var i = 0; i < state.cart.length; i++) {
        if (state.cart[i]['name'] !== action.name) {
          newCart.push(state.cart[i])
          // console.log('inside reducer deleting...' )
          // newCart.splice(i)
        } else {
          newPrice = state.price - state.cart[i]['price']
        }
      }
      return {
        ...state,
        cart: newCart,
        price: newPrice
      };
      break
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
