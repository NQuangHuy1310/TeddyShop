import { createAsyncThunk, createAction, createSlice } from '@reduxjs/toolkit'
import { feedbackService } from './feedbackService'
import { feedbackData } from '~/models/feedback'

const initialState = {
  createdFeedback: {} as feedbackData,

  isError: false,
  isSuccess: false,
  isLoading: false,
  status: '',
  message: ''
}

export const createFeedback = createAsyncThunk('feedback/sendFeedback', async (data: feedbackData) => {
  try {
    return await feedbackService.sendFeedback(data)
  } catch (error) {
    return error
  }
})

export const resetState = createAction('ReverAll')

export const feedbackSlide = createSlice({
  name: 'feedback',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createFeedback.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createFeedback.fulfilled, (state, action: any) => {
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
        state.createdFeedback = action.payload.feedback
      })
      .addCase(createFeedback.rejected, (state) => {
        state.isError = true
      })
      .addCase(resetState, () => initialState)
  }
})

export default feedbackSlide.reducer
