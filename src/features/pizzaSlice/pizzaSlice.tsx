import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getAllPizzasReducer = createAsyncThunk('pizza/getAllPizzas', async () => {
	try {
		const response = await axios.get(`/api/pizzas/getpizzas`);
		console.log(response);
		return response
		
	} catch (error) {
		return error
	}
});



export interface PizzaState {
	success:string,
}

const initialState: PizzaState = {
	success:""
};

export const pizzaSlice = createSlice({
	name: 'pizza',
	initialState,
	reducers: {},
	extraReducers:{
		[getAllPizzasReducer.pending]:(state,action)=>{
			state.success="pending";
		},
		[getAllPizzasReducer.fulfilled]:(state,action)=>{
			state.success="succes";
		},
		[getAllPizzasReducer.rejected]:(state,action)=>{
			state.success="rejected";
		}


	}
});

// Action creators are generated for each case reducer function
export const {} = pizzaSlice.actions;

export default pizzaSlice.reducer;
