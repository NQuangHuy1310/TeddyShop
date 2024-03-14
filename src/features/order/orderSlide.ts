import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit'
import { orderService } from './orderService'
import { orderData } from '~/models/order'

const initialState = {
  orders: [] as orderData[],
  createdOrder: {} as orderData,

  isError: false,
  isLoading: false,
  isSuccess: false,
  status: '',
  message: ''
}

export const createOder = createAsyncThunk('order/createOrder', async (orderData: orderData) => {
  try {
    return await orderService.createOrder(orderData)
  } catch (error) {
    return error
  }
})

export const getOrderByUserId = createAsyncThunk('order/getOrderByUserId', async () => {
  try {
    return await orderService.getOrderByUserId()
  } catch (error) {
    return error
  }
})

export const resetState = createAction('ReverAll')

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createOder.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createOder.fulfilled, (state, action: any) => {
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
        state.createdOrder = action.payload.order
      })
      .addCase(createOder.rejected, (state) => {
        state.isError = true
      })
      .addCase(getOrderByUserId.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getOrderByUserId.fulfilled, (state, action: any) => {
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
        state.orders = action.payload.orders
      })
      .addCase(getOrderByUserId.rejected, (state) => {
        state.isError = true
      })
      .addCase(resetState, () => initialState)
  }
})

export default orderSlice.reducer
