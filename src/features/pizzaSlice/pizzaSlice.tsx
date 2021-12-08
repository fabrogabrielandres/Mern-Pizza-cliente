import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PizzaState {
	
}

const initialState: PizzaState = {
	
};

export const pizzaSlice = createSlice({
	name: 'pizza',
	initialState,
	reducers: {}
});

// Action creators are generated for each case reducer function
export const {} = pizzaSlice.actions;

export default pizzaSlice.reducer;
