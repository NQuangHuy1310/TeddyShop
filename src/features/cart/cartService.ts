import axios from '~/apis/axiosConfig'
import { cartData } from '~/models/cart'

const addToCart = async (cartData: cartData) => {
  return await axios.post('cart', cartData)
}

const getCartByUserId = async () => {
  return await axios.get('cart')
}

const deleteProductInCart = async (cartId: string) => {
  return await axios.delete(`cart/${cartId}`)
}

const clearCartByUserId = async () => {
  return await axios.delete('cart/clear')
}

export const cartService = {
  addToCart,
  getCartByUserId,
  deleteProductInCart,
  clearCartByUserId
}
