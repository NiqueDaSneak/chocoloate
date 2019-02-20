import { REMOVE_ITEM_FROM_CART, SHOW_PRODUCT_DETAILS, DISMISS_PRODUCT_DETAILS } from './actionTypes'

export const showProductDetails = (product) => {
  return {
    type: SHOW_PRODUCT_DETAILS,
    product: product
  }
}

export const dismissProductDetails = (payload) => {
  return {
    type: DISMISS_PRODUCT_DETAILS,
    payload: payload
  }
}

export const removeItemFromCart = (name) => {
  return {
    type: REMOVE_ITEM_FROM_CART,
    name: name
  }
}
