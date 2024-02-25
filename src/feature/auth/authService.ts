import axios from '~/apis/axiosConfig'

const registerUser = async (userData: { email: string; fullName: string; password: string }) => {
  return await axios.post('auth/register', userData)
}

const loginUser = async (userData: { email: string; password: string }) => {
  return await axios.post('auth/login', userData)
}

const logoutUser = async () => {
  return await axios.post('auth/logout', null, { withCredentials: true })
}

export const authService = {
  registerUser,
  loginUser,
  logoutUser
}
