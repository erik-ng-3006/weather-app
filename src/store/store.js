import { configureStore } from '@reduxjs/toolkit';
import navReducer from './navSlice';
import weatherReducer from './weatherSlice';

export const store = configureStore({
	reducer: {
		nav: navReducer,
		weather: weatherReducer,
	},
});
