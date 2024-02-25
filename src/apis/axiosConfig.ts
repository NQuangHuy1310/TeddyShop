import axios from 'axios'
import { getAccessTokenFromLocalStorage } from '~/utils'

// axios.defaults.withCredentials = true

const axiosConfig = axios.create({
  withCredentials: true,
  baseURL: import.meta.env.VITE_BASE_URL
})

axiosConfig.interceptors.request.use((config) => {
  const token = getAccessTokenFromLocalStorage()

  if (token !== '') {
    const auth = `Bearer ${token}`
    config.headers.Authorization = auth
  }

  config.headers.Accept = 'application/json'

  return config
})

// axiosConfig.interceptors.response.use(
//   (response) => {
//     if (response.status === 200) {
//       return response.data
//     }
//     return response
//   },
//   (error) => {
//     if (error.response.status === 401) {
//       toast.error('Bạn cần đăng nhập để thực hiện chức năng này')
//       window.location.href = '/login'
//     } else if (error.request) {
//       toast.error('Lỗi kết nối đến server, vui lòng thử lại sau')
//     } else {
//       toast.error('Lỗi không xác định, vui lòng thử lại sau')
//     }
//     return Promise.reject(error)
//   }
// )

export default axiosConfig
