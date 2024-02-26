import axios from '~/apis/axiosConfig'

const getBlogCat = async () => {
  return await axios.get('blog/category')
}

const getBlogByCategory = async (categoryId: string) => {
  return await axios.get(`blog/cat/${categoryId}`)
}

const getBlogs = async () => {
  return await axios.get('blog')
}

const getBlogById = async (id: string) => {
  return await axios.get(`blog/${id}`)
}

const likeBlog = async (id: string) => {
  return await axios.put(`blog/like/${id}`)
}

export const blogService = {
  getBlogByCategory,
  getBlogCat,
  getBlogs,
  getBlogById,
  likeBlog
}
