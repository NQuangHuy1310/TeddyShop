import { configureStore } from '@reduxjs/toolkit'
import authSlice from '~/features/auth/authSlice'
import blogSlice from '~/features/blog/blogSlice'
import brandSelice from '~/features/brand/brandSlice'
import productSlice from '~/features/product/productSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    product: productSlice,
    blog: blogSlice,
    brand: brandSelice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})
