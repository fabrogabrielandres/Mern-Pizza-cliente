import { configureStore } from '@reduxjs/toolkit'
import pizzaSlice from '../features/pizzaSlice/pizzaSlice';
import cartSlice from '../features/cartSlice/cartSlice';
import userSlice from '../features/userSlice/userSlice';

export const store = configureStore({
  reducer: {
    pizza:pizzaSlice,
    cart:cartSlice,
    user:userSlice
  },
})






