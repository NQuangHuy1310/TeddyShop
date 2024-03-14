import axios from '~/apis/axiosConfig'
import { orderData } from '~/models/order'

const createOrder = async (orderData: orderData) => {
  return await axios.post('order', orderData)
}

const getOrderByUserId = async () => {
  return await axios.get('order')
}

export const orderService = {
  createOrder,
  getOrderByUserId
}
