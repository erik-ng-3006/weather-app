import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './uiSlice';
import weatherReducer from './weatherSlice';
import locationReducer from './locationSlice';

export const store = configureStore({
	reducer: {
		ui: uiReducer,
		weather: weatherReducer,
		location: locationReducer,
	},
});
