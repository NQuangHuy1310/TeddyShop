import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit'
import { cartService } from './cartService'
import { cartData } from '~/models/cart'

const initialState = {
  carts: [],
  addedCart: {},
  isError: false,
  isLoading: false,
  isSuccess: false,
  state: '',
  message: ''
}

export const getCartByUser = createAsyncThunk('cart/getCart', async () => {
  try {
    return await cartService.getCartByUserId()
  } catch (error) {
    return error
  }
})

export const addProductToCart = createAsyncThunk('cart/addCart', async (cartData: cartData) => {
  try {
    return await cartService.addToCart(cartData)
  } catch (error) {
    return error
  }
})

export const deleteProductInCart = createAsyncThunk('cart/deleteCart', async (cartId: string) => {
  try {
    return await cartService.deleteProductInCart(cartId)
  } catch (error) {
    return error
  }
})

export const resetState = createAction('ReverAll')

export const cartSice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCartByUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getCartByUser.fulfilled, (state, action: any) => {
        state.isLoading = false
        state.isSuccess = true
        state.isError = true
        state.carts = action.payload.carts
      })
      .addCase(getCartByUser.rejected, (state) => {
        state.isError = true
      })
      .addCase(addProductToCart.pending, (state) => {
        state.isLoading = true
      })
      .addCase(addProductToCart.fulfilled, (state, action: any) => {
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
        state.addedCart = action.payload.cart
      })
      .addCase(addProductToCart.rejected, (state) => {
        state.isError = true
      })
      .addCase(deleteProductInCart.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteProductInCart.fulfilled, (state) => {
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
      })
      .addCase(deleteProductInCart.rejected, (state) => {
        state.isError = true
      })
      .addCase(resetState, () => {
        return initialState
      })
  }
})

export default cartSice.reducer
