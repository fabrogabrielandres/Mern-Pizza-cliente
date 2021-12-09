import { configureStore } from '@reduxjs/toolkit'
import pizzaSlice from '../features/pizzaSlice/pizzaSlice';

export const store = configureStore({
  reducer: {
    pizza:pizzaSlice
  },
})






