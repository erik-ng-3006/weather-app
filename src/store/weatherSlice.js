import { createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://foreca-weather.p.rapidapi.com';

export const weatherApi = createApi({
	reducerPath: 'weatherApi',
	baseQuery: fetchBaseQuery({
		baseUrl,
		prepareHeaders: () =>
			new Headers({
				'X-RapidAPI-Key':
					'c30d4cb11cmsh96d85945474621bp16bd92jsn59adb28b9184',
				'X-RapidAPI-Host': 'foreca-weather.p.rapidapi.com',
			}),
	}),
	endpoints: (builder) => ({
		getLocationByName: builder.query({
			query: (location) => `/location/search/${location}`,
		}),
		getCurrentWeather: builder.query({
			query: (locationId) =>
				`/current/${locationId}?alt=0&tempunit=C&windunit=MPH&tz=Europe%2FLondon&lang=en`,
		}),
		getDailyWeather: builder.query({
			query: (locationId) =>
				`/forecast/daily/${locationId}?alt=0&tempunit=C&windunit=MPH&periods=8&dataset=full`,
		}),
	}),
});

export const {
	useGetLocationByNameQuery,
	useGetCurrentWeatherQuery,
	useGetDailyWeatherQuery,
} = weatherApi;

const initialState = {
	data: {},
	tempScale: 'c',
	location: {},
	searchedLocations: [],
	dailyWeatherData: [],
};

export const weatherSlice = createSlice({
	name: 'weather',
	initialState,
	reducers: {
		setWeatherData(state, action) {
			state.data = action.payload;
		},
		setLocation(state, action) {
			state.location = action.payload;
		},
		setSearchedLocations(state, action) {
			state.searchedLocations = action.payload;
		},
		setTempScale(state, action) {
			state.tempScale = action.payload;
		},
		setDailyWeatherData(state, action) {
			state.dailyWeatherData = action.payload;
		},
	},
});

export const convertDate = (day) => {
	const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	const months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];
	let d = new Date(day);
	let date = d.getDate();
	let dayIndex = d.getDay();
	let monthIndex = d.getMonth();
	return `${days[dayIndex]}, ${date} ${months[monthIndex]}`;
};

export const convertCelsiusToFahrenheit = (degree) => {
	return Math.round((degree * 9) / 5 + 32);
};

export const weatherActions = weatherSlice.actions;

export default weatherSlice.reducer;
