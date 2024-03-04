import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit'
import { uploadService } from './uploadService'
import { uploadModal } from '~/models/upload'

const initialState = {
  images: [] as uploadModal[],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: ''
}

export const uploadImage = createAsyncThunk('upload/images', async (data: Array<File>, thunkAPI) => {
  try {
    const formData = new FormData()
    for (let i = 0; i < data.length; i++) {
      formData.append('images', data[i])
    }
    return await uploadService.uploadImage(formData)
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})

export const deleteImage = createAsyncThunk('upload/delete', async (id: string, thunkAPI) => {
  try {
    return await uploadService.deleteImage(id)
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})

export const resetState = createAction('RevertAll')

export const uploadSlice = createSlice({
  name: 'upload',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(uploadImage.pending, (state) => {
        state.isLoading = true
      })
      .addCase(uploadImage.fulfilled, (state, action: any) => {
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
        state.images = action.payload
      })
      .addCase(uploadImage.rejected, (state) => {
        state.isError = true
      })
      .addCase(deleteImage.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteImage.fulfilled, (state, action: any) => {
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
        state.images = state.images.filter((image) => image.public_id !== action.payload?.id)
      })
      .addCase(deleteImage.rejected, (state) => {
        state.isError = true
      })
  }
})

export default uploadSlice.reducer
