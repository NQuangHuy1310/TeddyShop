import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit'
import { authService } from './authService'
import { User, addressData, updateUser } from '~/models'
const getUserFormLocalStorage = localStorage.getItem('user_data')
  ? JSON.parse(localStorage.getItem('user_data') || '')
  : {}

const initialState = {
  user: getUserFormLocalStorage as User,
  favoriteProducts: [],
  deletedProductFavorite: {},

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

export const updateUserInfo = createAsyncThunk('auth/update', async (userData: updateUser, thunkAPI) => {
  try {
    return await authService.updateUser(userData)
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})

export const addNewAddress = createAsyncThunk('auth/addAddress', async (addressData: addressData, thunkAPI) => {
  try {
    return await authService.addNewAddress(addressData)
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})

export const deleteAddress = createAsyncThunk('auth/deleteAddress', async (addressId: string, thunkAPI) => {
  try {
    return await authService.deleteAddress(addressId)
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})

export const addProductFavorite = createAsyncThunk('auth/addProductFavorite', async (productId: string, thunkAPI) => {
  try {
    return await authService.addProductFavorite(productId)
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})

export const getProductFavorite = createAsyncThunk('auth/getProductFavorite', async (thunkAPI) => {
  try {
    return await authService.getProductFavorite()
  } catch (error) {
    return (thunkAPI as any).rejectWithValue(error)
  }
})

export const deleteProductFavorite = createAsyncThunk(
  'auth/deleteProductFavorite',
  async (productId: string, thunkAPI) => {
    try {
      return await authService.deleteProductFavorite(productId)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const changeAddressDefault = createAsyncThunk(
  'auth/changeAddressDefault',
  async (addressId: string, thunkAPI) => {
    try {
      return await authService.changeAddressDefault(addressId)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const resetState = createAction('ReverAll')

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
      .addCase(loginUser.fulfilled, (state, action: any) => {
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
        state.user = action.payload
        localStorage.setItem('user_data', JSON.stringify(action.payload))
        localStorage.setItem('access_token', action.payload.token)
      })
      .addCase(loginUser.rejected, (state, action: any) => {
        state.isError = true
        state.message = action.payload?.response?.data?.message || ''
      })
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = {} as User
        localStorage.removeItem('user_data')
        localStorage.removeItem('access_token')
      })
      .addCase(logoutUser.rejected, (state) => {
        state.isError = true
      })
      .addCase(updateUserInfo.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateUserInfo.fulfilled, (state, action: any) => {
        state.isSuccess = true
        state.isError = false
        state.isLoading = false
        state.user = action.payload
        localStorage.setItem('user_data', JSON.stringify(action.payload))
      })
      .addCase(updateUserInfo.rejected, (state) => {
        state.isError = true
      })
      .addCase(addNewAddress.pending, (state) => {
        state.isLoading = true
      })
      .addCase(addNewAddress.fulfilled, (state, action: any) => {
        state.isSuccess = true
        state.isError = false
        state.isLoading = false
        state.user = action.payload
        localStorage.setItem('user_data', JSON.stringify(action.payload))
      })
      .addCase(addNewAddress.rejected, (state) => {
        state.isError = true
      })
      .addCase(deleteAddress.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteAddress.fulfilled, (state, action: any) => {
        state.isSuccess = true
        state.isError = false
        state.isLoading = false
        state.user = action.payload
        localStorage.setItem('user_data', JSON.stringify(action.payload))
      })
      .addCase(deleteAddress.rejected, (state) => {
        state.isError = true
      })
      .addCase(changeAddressDefault.pending, (state) => {
        state.isLoading = true
      })
      .addCase(changeAddressDefault.fulfilled, (state, action: any) => {
        state.isSuccess = true
        state.isError = false
        state.isLoading = false
        state.user = action.payload
        localStorage.setItem('user_data', JSON.stringify(action.payload))
      })
      .addCase(changeAddressDefault.rejected, (state) => {
        state.isError = true
      })
      .addCase(addProductFavorite.pending, (state) => {
        state.isLoading = true
      })
      .addCase(addProductFavorite.fulfilled, (state, action: any) => {
        state.isSuccess = true
        state.isError = false
        state.isLoading = false
        state.user.favoriteProducts = action.payload.favoriteProducts
      })
      .addCase(addProductFavorite.rejected, (state) => {
        state.isError = true
      })
      .addCase(getProductFavorite.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getProductFavorite.fulfilled, (state, action) => {
        state.isSuccess = true
        state.isError = false
        state.isLoading = false
        state.favoriteProducts = action.payload.productsFavorite
      })
      .addCase(getProductFavorite.rejected, (state) => {
        state.isError = true
      })
      .addCase(deleteProductFavorite.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteProductFavorite.fulfilled, (state, action) => {
        state.isSuccess = true
        state.isError = false
        state.isLoading = false
        state.deletedProductFavorite = action.payload
      })
      .addCase(deleteProductFavorite.rejected, (state) => {
        state.isError = true
      })
      .addCase(resetState, (state) => {
        state.isError = false
        state.isLoading = false
        state.isSuccess = false
      })
  }
})

export default authSlice.reducer
