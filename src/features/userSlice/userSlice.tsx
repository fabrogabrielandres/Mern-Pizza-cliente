import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const userRegister = createAsyncThunk('users/Register', async (user) => {
	try {
		// const response = await axios.post(`api/pizzas/getallpizzas`);
	} catch (error) {
		// return error;
	}
}) as any;

interface InitialState {
	userEmail: string;
	error: boolean;
	state: string;
}

const initialState: InitialState = {
	userEmail: '',
	error: false,
	state: ''
};

export const userSlice = createSlice({
	name: 'pizza',
	initialState,
	reducers: {},
	extraReducers: {
		[userRegister.peding]: (state, action) => {},
		[userRegister.rejected]: (state, action) => {},
		[userRegister.fulfilled]: (state, action) => {}
	}
});

export default userSlice.reducer;
