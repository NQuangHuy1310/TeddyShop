import axios from '~/apis/axiosConfig'

const registerUser = async (userData: { email: string; fullName: string; password: string }) => {
  const response = await axios.post('auth/register', userData)

  return response.data
}

const loginUser = async (userData: { email: string; password: string }) => {
  const response = await axios.post('auth/login', userData)

  return response
}

const logoutUser = async () => {
  const reponse = await axios.get('auth/logout')

  return reponse
}

export const authService = {
  registerUser,
  loginUser,
  logoutUser
}
