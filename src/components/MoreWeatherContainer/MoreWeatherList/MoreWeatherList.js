import React from 'react';
import classes from './MoreWeatherList.module.css';
import { useSelector } from 'react-redux';
import MoreWeatherItem from './MoreWeatherItem/MoreWeatherItem';

const MoreWeatherList = () => {
	const weatherData = useSelector((state) => state.weather.data);
	console.log(weatherData);
	return (
		<ul className={classes.list}>
			{weatherData.slice(1).map((dayWeather) => {
				return (
					<MoreWeatherItem
						key={dayWeather.id}
						date={dayWeather['applicable_date']}
						id={dayWeather.id}
						minTemp={dayWeather['min_temp']}
						maxTemp={dayWeather['max_temp']}
						img={dayWeather['weather_state_name']}
					/>
				);
			})}
		</ul>
	);
};

export default MoreWeatherList;
