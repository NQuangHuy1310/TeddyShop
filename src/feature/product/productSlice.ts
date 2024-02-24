import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit'
import { productService } from './productService'
import { ProductModel } from '~/models'

const initialState = {
  products: [] as ProductModel[],
  product: {} as ProductModel,
  isError: false,
  isLoading: false,
  isSuccess: false,
  status: '',
  message: ''
}

export const getProducts = createAsyncThunk('product/getProducts', async () => {
  try {
    return await productService.getProducts()
  } catch (error) {
    return error
  }
})

export const getProduct = createAsyncThunk('product/getProduct', async (productId: string) => {
  try {
    return await productService.getProduct(productId)
  } catch (error) {
    return error
  }
})

export const resetState = createAction('ReverAll')

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.products = action.payload.products
      })
      .addCase(getProducts.rejected, (state) => {
        state.isError = true
      })
      .addCase(getProduct.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.product = action.payload
      })
      .addCase(getProduct.rejected, (state) => {
        state.isError = true
      })
      .addCase(resetState, () => initialState)
  }
})

export default productSlice.reducer
