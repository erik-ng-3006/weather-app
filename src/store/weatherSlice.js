import { createSlice } from '@reduxjs/toolkit';
import { uiActions } from './uiSlice';

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
		dispatch(uiActions.setIsLoading(true));
		const getData = async () => {
			(function () {
				var cors_api_host = 'cors-anywhere.herokuapp.com';
				var cors_api_url = 'https://' + cors_api_host + '/';
				var slice = [].slice;
				var origin =
					window.location.protocol + '//' + window.location.host;
				var open = XMLHttpRequest.prototype.open;
				XMLHttpRequest.prototype.open = function () {
					var args = slice.call(arguments);

					// eslint-disable-next-line
					var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
					if (
						targetOrigin &&
						targetOrigin[0].toLowerCase() !== origin &&
						targetOrigin[1] !== cors_api_host
					) {
						args[1] = cors_api_url + args[1];
					}
					return open.apply(this, args);
				};
			})();

			const response = await fetch(
				`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${locationId}`
			);

			if (!response.ok) {
				throw new Error('Failed to get the data');
			}

			const data = await response.json();
			dispatch(uiActions.setIsLoading(false));

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
