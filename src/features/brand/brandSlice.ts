import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit'
import { brandService } from './brandService'
import { brandModal } from '~/models/brand'

const initialState = {
  brands: [] as brandModal[],
  brand: {} as brandModal,
  isError: false,
  isLoading: false,
  isSuccess: false,
  status: '',
  message: ''
}

export const getBrands = createAsyncThunk('brand/getBrands', async () => {
  try {
    return await brandService.getBrands()
  } catch (error) {
    return error
  }
})

export const getBrand = createAsyncThunk('brand/getBrand', async (brandId: string) => {
  try {
    return await brandService.getBand(brandId)
  } catch (error) {
    return error
  }
})

export const resetState = createAction('ReverAll')

export const brandSlice = createSlice({
  name: 'brand',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBrands.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getBrands.fulfilled, (state, action: any) => {
        state.isLoading = false
        state.isSuccess = true
        state.brands = action.payload.brands
      })
      .addCase(getBrands.rejected, (state) => {
        state.isError = true
      })
      .addCase(getBrand.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getBrand.fulfilled, (state, action: any) => {
        state.isLoading = false
        state.isSuccess = true
        state.brand = action.payload.brand
      })
      .addCase(getBrand.rejected, (state) => {
        state.isError = true
      })
      .addCase(resetState, () => initialState)
  }
})

export default brandSlice.reducer
