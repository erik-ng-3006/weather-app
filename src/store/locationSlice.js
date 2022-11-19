import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	locations: [],
	curLocation: {},
	curLocationLoaded: null,
};

export const locationSlice = createSlice({
	name: 'location',
	initialState,
	reducers: {
		setLocations(state, action) {
			state.locations = action.payload;
		},
		setCurLocation(state, action) {
			state.curLocation.latitude = action.payload.latitude;
			state.curLocation.longitude = action.payload.longitude;
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

export const getLocation = () => {
	return (dispatch) => {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				dispatch(
					locationSlice.actions.setCurLocation({
						latitude: position.coords.latitude.toString(),
						longitude: position.coords.longitude.toString(),
					})
				);
			},
			() => {}
		);
	};
};

export const setWindDirectionCompass = (dir) => {
	const direction = dir?.toLowerCase();
	const compassDegrees = {
		n: 0,
		nne: 22.5,
		ne: 45,
		ene: 67.5,
		e: 90,
		ese: 112.5,
		se: 135,
		sse: 157.5,
		s: 180,
		ssw: 202.5,
		sw: 225,
		wsw: 247.5,
		w: 270,
		wnw: 292.5,
		nw: 315,
		nnw: 337.5,
	};
	return compassDegrees[direction];
};

export const locationActions = locationSlice.actions;

export default locationSlice.reducer;
