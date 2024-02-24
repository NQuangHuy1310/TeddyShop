import axios from '~/apis/axiosConfig'

const getProducts = async () => {
  return await axios.get('product')
}

const getProduct = async (productId: string) => {
  return await axios.get(`product/${productId}`)
}

export const productService = {
  getProduct,
  getProducts
}
