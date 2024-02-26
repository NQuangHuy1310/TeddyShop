import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit'
import { blogService } from './blogService'
import { blogCategory, blogModel } from '~/models'

const initialState = {
  blogCategories: [] as blogCategory[],
  blogs: [] as blogModel[],
  blog: {} as blogModel,
  isError: false,
  isLoading: false,
  isSuccess: false,
  status: '',
  message: ''
}

export const getCategories = createAsyncThunk('blog/getCategories', async () => {
  try {
    return await blogService.getBlogCat()
  } catch (error) {
    return error
  }
})

export const getBlogs = createAsyncThunk('blog/getBlogs', async () => {
  try {
    return await blogService.getBlogs()
  } catch (error) {
    return error
  }
})

export const getBlogByCategory = createAsyncThunk('blog/getBlogByCategory', async (categoryId: string) => {
  try {
    return await blogService.getBlogByCategory(categoryId)
  } catch (error) {
    return error
  }
})

export const getBlogById = createAsyncThunk('blog/getBlog', async (blogId: string) => {
  try {
    return await blogService.getBlogById(blogId)
  } catch (error) {
    return error
  }
})

export const likeBlog = createAsyncThunk('blog/likeBlog', async (blogId: string) => {
  try {
    return await blogService.likeBlog(blogId)
  } catch (error) {
    return error
  }
})

export const resetState = createAction('ReverAll')

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getCategories.fulfilled, (state, action: any) => {
        state.isSuccess = true
        state.isError = false
        state.isLoading = false
        state.blogCategories = action.payload.blogCategories
      })
      .addCase(getCategories.rejected, (state) => {
        state.isError = true
      })
      .addCase(getBlogByCategory.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getBlogByCategory.fulfilled, (state, action: any) => {
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
        state.blogs = action.payload.blogs
      })
      .addCase(getBlogByCategory.rejected, (state) => {
        state.isError = true
      })
      .addCase(getBlogs.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getBlogs.fulfilled, (state, action: any) => {
        state.isSuccess = true
        state.isError = false
        state.isLoading = false
        state.blogs = action.payload.blogs
      })
      .addCase(getBlogs.rejected, (state) => {
        state.isError = true
      })
      .addCase(getBlogById.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getBlogById.fulfilled, (state, action: any) => {
        state.isError = false
        state.isSuccess = true
        state.isLoading = false
        state.blog = action.payload.blog
      })
      .addCase(getBlogById.rejected, (state) => {
        state.isError = true
      })
  }
})

export default blogSlice.reducer
