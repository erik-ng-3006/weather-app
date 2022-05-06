import { configureStore } from '@reduxjs/toolkit';
import navReducer from './navSlice';
import weatherReducer from './weatherSlice';
import locationReducer from './locationSlice';

export const store = configureStore({
	reducer: {
		nav: navReducer,
		weather: weatherReducer,
		location: locationReducer,
	},
});
