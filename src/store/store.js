import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './uiSlice';
import weatherReducer, { weatherApi } from './weatherSlice';
import locationReducer from './locationSlice';

export const store = configureStore({
	reducer: {
		ui: uiReducer,
		weather: weatherReducer,
		location: locationReducer,
		[weatherApi.reducerPath]: weatherApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(weatherApi.middleware),
});
