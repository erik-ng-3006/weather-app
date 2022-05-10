import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import classes from './WeatherDetail.module.css';
import { useSelector } from 'react-redux';
import { convertDate } from '../../../store/weatherSlice';
import { setImageUrl } from '../../../store/weatherSlice';
import { convertCelsiusToFahrenheit } from '../../../store/weatherSlice';

const WeatherDetail = () => {
	const location = useSelector((state) => state.weather.location);
	const weatherData = useSelector((state) => state.weather.data);
	const transformedWeatherData = weatherData[0] || {};
	const date = convertDate(transformedWeatherData['applicable_date']);
	const url = setImageUrl(transformedWeatherData['weather_state_name']);
	const temp = Math.round(transformedWeatherData['the_temp']);
	const tempScale = useSelector((state) => state.weather.tempScale);
	const isCelsius = tempScale === 'c';

	return (
		<div className={classes.detail}>
			<div className={classes.cloud}>
				<img src={url} alt='weather today'></img>
			</div>
			<div>
				<div className={classes.degree}>
					{isCelsius ? temp : convertCelsiusToFahrenheit(temp)}
					<span>{isCelsius ? '°C' : '°F'}</span>
				</div>
				<div className={classes.state}>
					{transformedWeatherData['weather_state_name']}
				</div>
				<div className={classes.date}>{`Today • ${date}`}</div>
				<div>
					<LocationOnIcon className={classes.icon} />
					{location}
				</div>
			</div>
		</div>
	);
};

export default WeatherDetail;
