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
})as any;

export interface PizzaState {
	success: string;
	pizzas: Pizza[];
}

const initialState: PizzaState = {
	success: '',
	pizzas: []
};

export const pizzaSlice = createSlice({
	name: 'pizza',
	initialState,
	reducers: {},
	extraReducers: {
		[getAllPizzasReducer.pending]: (state, action) => {
			state.success = 'pending';
		},
		[getAllPizzasReducer.fulfilled]: (state, action) => {
			state.success = 'succes';			
			state.pizzas=[...action.payload]
		},
		[getAllPizzasReducer.rejected]: (state, action) => {
			state.success = 'rejected';
		}
	}
});

export default pizzaSlice.reducer;
