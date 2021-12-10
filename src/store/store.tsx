import { configureStore } from '@reduxjs/toolkit'
import pizzaSlice from '../features/pizzaSlice/pizzaSlice';
import cartSlice from '../features/cartSlice/cartSlice';

export const store = configureStore({
  reducer: {
    pizza:pizzaSlice,
    cart:cartSlice
  },
})






