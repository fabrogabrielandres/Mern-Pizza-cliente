import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Pizza } from '../../../Interfaces/PizzaInterface';

export const getAllPizzasReducer = createAsyncThunk('pizza/getAllPizzas', async () => {
	try {
		const response = await axios.get(`api/pizzas/getallpizzas`);
		return response.data;
	} catch (error) {
		return error;
	}
}) as any;

export interface PizzaState {
	pizzas: Pizza[];
	error: boolean;
}

const initialState: PizzaState = {
	pizzas: [],
	error: false
};

export const pizzaSlice = createSlice({
	name: 'pizza',
	initialState,
	reducers: {},
	extraReducers: {
		[getAllPizzasReducer.pending]: (state, action) => {
			state.error = false;
		},
		[getAllPizzasReducer.fulfilled]: (state, action) => {
			state.pizzas = action.payload;
			state.error = true;
		},
		[getAllPizzasReducer.rejected]: (state, action) => {
			state.error = true;
		}
	}
});

export default pizzaSlice.reducer;
