import { configureStore } from '@reduxjs/toolkit'
import authSlice from '~/feature/auth/authSlice'
import productSlice from '~/feature/product/productSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    product: productSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})
