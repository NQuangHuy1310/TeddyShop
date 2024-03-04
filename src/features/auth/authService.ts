import axios from '~/apis/axiosConfig'
import { updateUser } from '~/models'

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

export const authService = {
  registerUser,
  loginUser,
  logoutUser,
  updateUser
}
