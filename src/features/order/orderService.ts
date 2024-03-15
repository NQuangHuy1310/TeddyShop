import axios from '~/apis/axiosConfig'
import { cancelOrder, orderData } from '~/models/order'

const createOrder = async (orderData: orderData) => {
  return await axios.post('order', orderData)
}

const getOrderByUserId = async () => {
  return await axios.get('order/user')
}

const cancelOrderById = async (orderData: cancelOrder) => {
  return await axios.put('order/cancel-order', orderData)
}

export const orderService = {
  createOrder,
  getOrderByUserId,
  cancelOrderById
}
