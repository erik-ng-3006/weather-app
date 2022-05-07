import { createSlice } from '@reduxjs/toolkit';

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
			const response = await fetch(
				`https://mycorsproxy-crossdomainyz.herokuapp.com/https://www.metaweather.com/api//api/location/search/?query=${inputValue}`
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
