import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: [],
	location: '',
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
	},
});

export const fetchWeatherData = (locationId = '796597') => {
	return async (dispatch) => {
		const getData = async () => {
			const response = await fetch(
				`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${locationId}`
			);

			if (!response.ok) {
				throw new Error('Failed to get the data');
			}

			const data = await response.json();
			return data;
		};

		try {
			const weatherData = await getData();
			console.log(weatherData);
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

export const weatherActions = weatherSlice.actions;

export default weatherSlice.reducer;
