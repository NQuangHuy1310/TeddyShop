import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { authService } from './authService'
import { User } from '~/models'
const getUserFormLocalStorage = localStorage.getItem('user_data')
  ? JSON.parse(localStorage.getItem('user_data') || '')
  : {}

const initialState = {
  user: getUserFormLocalStorage as User,
  isError: false,
  isLoading: false,
  isSuccess: false,
  status: '',
  message: ''
}

export const registerUser = createAsyncThunk(
  'auth/register',
  async (user: { email: string; fullName: string; password: string }, thunkAPI) => {
    try {
      const { email, fullName, password } = user
      const userData = { email, fullName, password }

      return await authService.registerUser(userData)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const loginUser = createAsyncThunk('auth/login', async (user: { email: string; password: string }, thunkAPI) => {
  try {
    const { email, password } = user
    const userData = { email, password }

    return await authService.loginUser(userData)
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})

export const logoutUser = createAsyncThunk('auth/logout', async (thunkAPI) => {
  try {
    return await authService.logoutUser()
  } catch (error) {
    return (thunkAPI as any).rejectWithValue(error)
  }
})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
      })
      .addCase(registerUser.rejected, (state, action: any) => {
        state.isError = true
        state.message = action.payload?.response?.data?.message || ''
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
        state.user = action.payload.data
        localStorage.setItem('user_data', JSON.stringify(action.payload.data))
        localStorage.setItem('access_token', action.payload.data.token)
      })
      .addCase(loginUser.rejected, (state, action: any) => {
        state.isError = true
        state.message = action.payload?.response?.data?.message || ''
      })
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
        state.user = {} as User
        localStorage.removeItem('user_data')
        localStorage.removeItem('access_token')
        // location.reload()
      })
      .addCase(logoutUser.rejected, (state) => {
        state.isError = true
      })
  }
})

export default authSlice.reducer
