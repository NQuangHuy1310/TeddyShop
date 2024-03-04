import axios from '~/apis/axiosConfig'

const uploadImage = async (data: any) => {
  return await axios.post('upload', data)
}

const deleteImage = async (id: string) => {
  return await axios.delete(`upload/${id}`)
}

export const uploadService = {
  uploadImage,
  deleteImage
}
