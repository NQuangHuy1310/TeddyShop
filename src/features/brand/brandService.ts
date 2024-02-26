import axios from '~/apis/axiosConfig'

const getBrands = async () => {
  return await axios.get('brand')
}

const getBand = async (id: string) => {
  return await axios.get(`brand/${id}`)
}

export const brandService = {
  getBrands,
  getBand
}
