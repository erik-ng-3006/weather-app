import React, { useEffect } from 'react';
import classes from './MoreWeatherList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import MoreWeatherItem from './MoreWeatherItem/MoreWeatherItem';
import {
	useGetDailyWeatherQuery,
	weatherActions,
} from '../../../store/weatherSlice';

const MoreWeatherList = () => {
	const dispatch = useDispatch();
	const location = useSelector((state) => state.weather.location);
	const dailyWeatherData = useSelector(
		(state) => state.weather.dailyWeatherData
	);
	const { data } = useGetDailyWeatherQuery(location?.id);

	useEffect(() => {
		dispatch(weatherActions.setDailyWeatherData(data?.forecast));
	}, [data, dispatch]);

	return (
		<ul className={classes.list}>
			{dailyWeatherData?.slice(0, 5).map((dayWeather, index) => {
				return (
					<MoreWeatherItem
						key={index}
						date={dayWeather?.date}
						minTemp={dayWeather?.minTemp}
						maxTemp={dayWeather?.maxTemp}
						img={dayWeather?.symbolPhrase}
					/>
				);
			})}
		</ul>
	);
};

export default MoreWeatherList;
