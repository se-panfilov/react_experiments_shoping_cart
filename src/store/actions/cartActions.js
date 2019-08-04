import { ADD_TO_CART, REMOVE_ITEM } from './action-types/cart-actions'

export const addToCart = (id) => ({ type: ADD_TO_CART, id })
export const removeFromCart = (id) => ({ type: REMOVE_ITEM, id })
