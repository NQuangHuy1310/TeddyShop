import axios from 'axios'
import { getAccessTokenFromLocalStorage } from '~/utils'

const axiosConfig = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL
})

axiosConfig.interceptors.request.use((config) => {
  const token = getAccessTokenFromLocalStorage

  if (token !== '') {
    const auth = `Bearer ${token}`
    config.headers.Authorization = auth
  }
  config.headers.Accept = 'application/json'

  return config
})

export default axiosConfig
