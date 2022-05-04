import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isShownNavBar: false,
};

export const navSlice = createSlice({
	name: 'nav',
	initialState,
	reducers: {
		toggleNavBar: (state) => {
			state.isShownNavBar = !state.isShownNavBar;
		},
	},
});

export const navActions = navSlice.actions;

export default navSlice.reducer;
