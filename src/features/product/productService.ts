import axios from '~/apis/axiosConfig'

const getProducts = async () => {
  return await axios.get('product')
}

const getProduct = async (productId: string) => {
  return await axios.get(`product/${productId}`)
}

const getProductCategories = async () => {
  return await axios.get('product/category')
}

export const productService = {
  getProduct,
  getProducts,
  getProductCategories
}
