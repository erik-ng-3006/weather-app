import { createSlice } from '@reduxjs/toolkit';
import { uiActions } from './uiSlice';

const initialState = {
	locations: [],
	curLocation: '',
};

export const locationSlice = createSlice({
	name: 'location',
	initialState,
	reducers: {
		setLocations(state, action) {
			state.locations = action.payload;
		},
	},
});

export const searchLocations = (inputValue) => {
	return async (dispatch) => {
		const getLocation = async () => {
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
				`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api//api/location/search/?query=${inputValue}`
			);
			if (!response.ok) {
				throw new Error('Failed to get locations data');
			}

			const data = await response.json();

			return data;
		};

		try {
			const locationsData = await getLocation();
			const transformedLocationData = locationsData.map((location) => {
				return { name: location.title, id: location.woeid.toString() };
			});
			console.log(transformedLocationData);
			dispatch(
				locationSlice.actions.setLocations(
					transformedLocationData || []
				)
			);
		} catch (e) {
			console.log(e);
		}
	};
};

export const locationActions = locationSlice.actions;

export default locationSlice.reducer;
