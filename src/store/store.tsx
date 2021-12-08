import { configureStore } from '@reduxjs/toolkit'
import pizzaSlice from '../features/pizzaSlice/pizzaSlice';

export const store = configureStore({
  reducer: {
    pizza:pizzaSlice
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch





