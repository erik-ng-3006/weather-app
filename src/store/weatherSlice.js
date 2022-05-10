import { createSlice } from '@reduxjs/toolkit';
import { uiActions } from './uiSlice';

const initialState = {
	data: [],
	tempScale: 'c',
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
		setTempScale(state, action) {
			state.tempScale = action.payload;
		},
	},
});

export const fetchWeatherData = (locationInput = '796597') => {
	return async (dispatch) => {
		dispatch(uiActions.setIsLoading(true));

		const getData = async () => {
			let response;

			if (typeof locationInput === 'string') {
				response = await fetch(
					`https://mycorsproxy-crossdomainyz.herokuapp.com/https://www.metaweather.com/api/location/${locationInput}`
				);
			} else {
				const { latitude, longitude } = locationInput;
				console.log(latitude);
				response = await fetch(
					`https://mycorsproxy-crossdomainyz.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=${latitude},${longitude}`
				);
			}

			if (!response.ok) {
				throw new Error('Failed to get the data');
			}

			const data = await response.json();
			dispatch(uiActions.setIsLoading(false));

			return data;
		};

		try {
			const weatherData = await getData();
			const transformedWeatherData = weatherData['consolidated_weather'];
			dispatch(
				weatherActions.setWeatherData(transformedWeatherData || [])
			);
			dispatch(weatherActions.setLocation(weatherData.title || ''));
		} catch (e) {
			console.log(e);
		}
	};
};

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

export const setImageUrl = (str = '') => {
	const regex = /\s/;
	str = str.replace(regex, '');
	return `img/${str}.png`;
};

export const convertCelsiusToFahrenheit = (degree) => {
	return Math.round((degree * 9) / 5 + 32);
};

export const weatherActions = weatherSlice.actions;

export default weatherSlice.reducer;
