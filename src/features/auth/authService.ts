import axios from '~/apis/axiosConfig'
import { addressData, updateUser } from '~/models'

const registerUser = async (userData: { email: string; fullName: string; password: string }) => {
  return await axios.post('auth/register', userData)
}

const loginUser = async (userData: { email: string; password: string }) => {
  return await axios.post('auth/login', userData)
}

const logoutUser = async () => {
  return await axios.post('auth/logout', null, { withCredentials: true })
}

const updateUser = async (userData: updateUser) => {
  return await axios.put('auth/profile', userData)
}

const addNewAddress = async (addressData: addressData) => {
  return await axios.put('auth/address', addressData)
}

const deleteAddress = async (addressId: string) => {
  return await axios.delete(`auth/address/${addressId}`)
}

const changeAddressDefault = async (addressId: string) => {
  return await axios.put(`auth/address/${addressId}`)
}

const addProductFavorite = async (productId: string) => {
  return await axios.put(`auth/product-favorite/${productId}`)
}

const getProductFavorite = async () => {
  return await axios.get('auth/product-favorite')
}

const deleteProductFavorite = async (productId: string) => {
  return await axios.delete(`auth/product-favorite/${productId}`)
}

const sendEmailCode = async () => {
  return await axios.post('auth/send-email')
}

const verifyEmail = async (code: string) => {
  return await axios.post('auth/verify-email', { code: code })
}

export const authService = {
  registerUser,
  loginUser,
  logoutUser,
  updateUser,
  addNewAddress,
  deleteAddress,
  changeAddressDefault,
  addProductFavorite,
  getProductFavorite,
  deleteProductFavorite,
  sendEmailCode,
  verifyEmail
}
