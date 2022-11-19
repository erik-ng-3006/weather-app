import React, { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import classes from './LocationItem.module.css';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../../../store/uiSlice';
import {
	useGetCurrentWeatherQuery,
	useGetDailyWeatherQuery,
	useGetLocationByNameQuery,
	weatherActions,
} from '../../../../store/weatherSlice';

const LocationItem = ({ name, country, id }) => {
	const [skip, setSkip] = useState(false);
	const dispatch = useDispatch();
	const { data: weatherData } = useGetCurrentWeatherQuery(id, { skip });
	const { data: dailyWeatherData } = useGetDailyWeatherQuery(id, { skip });
	const { data: locationData } = useGetLocationByNameQuery(name, {
		skip,
	});
	const onClickHandler = () => {
		setSkip(true);
		dispatch(uiActions.toggleNavBar());
		dispatch(weatherActions.setWeatherData(weatherData?.current));
		dispatch(
			weatherActions.setDailyWeatherData(dailyWeatherData?.forecast)
		);
		dispatch(weatherActions.setLocation(locationData?.locations[0]));
	};

	return (
		<li className={classes['list-item']} onClick={onClickHandler}>
			<p>
				{name} / {country}
			</p>
			<ArrowForwardIosIcon className={classes.icon} />
		</li>
	);
};

export default LocationItem;
