import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './uiSlice';
import weatherReducer, { weatherApi } from './weatherSlice';

export const store = configureStore({
	reducer: {
		ui: uiReducer,
		weather: weatherReducer,
		[weatherApi.reducerPath]: weatherApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(weatherApi.middleware),
});
