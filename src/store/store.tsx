import { configureStore } from '@reduxjs/toolkit'
import AddToCart from '@/features/AddToCart'

export const store = configureStore({
  reducer: {
     AddToCart: AddToCart
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch