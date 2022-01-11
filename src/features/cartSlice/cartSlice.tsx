import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from '../../../Interfaces/PizzaInterface';

const initialState = {
	cartItems: [] as CartItem[]
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<CartItem>) => {
			const alreadyExist = state.cartItems.find((item) => item._id === action.payload._id);
			if (alreadyExist) {
				state.cartItems = state.cartItems.map(
					(item) => (item._id === action.payload._id ? action.payload : item)
				);
			} else {
				state.cartItems = [ ...state.cartItems, action.payload ];
			}
		},
		deleteToCart: (state,action: PayloadAction<CartItem>)=>{
			state.cartItems=state.cartItems.filter((item)=>
				item._id!==action.payload._id
			)
		}
	}
});

export const { addToCart,deleteToCart } = cartSlice.actions;

export default cartSlice.reducer;
