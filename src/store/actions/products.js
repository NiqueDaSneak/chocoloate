import { SHOW_PRODUCT_DETAILS, DISMISS_PRODUCT_DETAILS } from './actionTypes'

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
