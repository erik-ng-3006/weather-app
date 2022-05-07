import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isShownNavBar: false,
	isLoading: false,
};

export const uiSlice = createSlice({
	name: 'nav',
	initialState,
	reducers: {
		toggleNavBar(state) {
			state.isShownNavBar = !state.isShownNavBar;
		},
		setIsLoading(state, action) {
			state.isLoading = action.payload;
		},
	},
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
