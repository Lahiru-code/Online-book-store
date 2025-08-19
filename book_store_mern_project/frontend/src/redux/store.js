import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "../../src/redux/features/cart/cartSlice"

export const store = configureStore({
  reducer: {

    cart: cartReducer
  },
})