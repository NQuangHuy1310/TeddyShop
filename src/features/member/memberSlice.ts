import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit'
import { memberService } from './memberService'
import { memberModal } from '~/models'

const initialState = {
  members: [] as memberModal[],
  isError: false,
  isLoading: false,
  isSuccess: false,
  status: '',
  message: ''
}

export const getMembers = createAsyncThunk('member/getMembers', async () => {
  try {
    return await memberService.getMembers()
  } catch (error) {
    return error
  }
})

export const resetState = createAction('ReverAll')

export const memberSlice = createSlice({
  name: 'member',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMembers.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getMembers.fulfilled, (state, action: any) => {
        state.isLoading = false
        state.isSuccess = true
        state.members = action.payload.members
      })
      .addCase(getMembers.rejected, (state) => {
        state.isError = true
      })
      .addCase(resetState, () => initialState)
  }
})

export default memberSlice.reducer
