import { createSlice } from '@reduxjs/toolkit';
import {  CartItem } from '../../../Interfaces/PizzaInterface';

const initialState = {
    cartItems:[] as CartItem[]
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart:(state,action)=>{
      state.cartItems=[...state.cartItems,action.payload]
    }    
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
