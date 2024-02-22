import { configureStore } from '@reduxjs/toolkit'
import authSlice from '~/feature/auth/authSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})
