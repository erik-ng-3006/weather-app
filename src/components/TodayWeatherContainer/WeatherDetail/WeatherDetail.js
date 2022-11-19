import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import classes from './WeatherDetail.module.css';
import { useSelector } from 'react-redux';
import { convertDate } from '../../../store/weatherSlice';
import { convertCelsiusToFahrenheit } from '../../../store/weatherSlice';

const WeatherDetail = () => {
	const locationsData = useSelector((state) => state.weather.location);
	const currentWeatherData = useSelector((state) => state.weather.data);
	const tempScale = useSelector((state) => state.weather.tempScale);
	const isCelsius = tempScale === 'c';

	console.log(locationsData);

	return (
		<div className={classes.detail}>
			<div className={classes.cloud}>
				<img
					src={`/img/${currentWeatherData?.symbolPhrase?.replaceAll(
						' ',
						''
					)}.png`}
					alt='weather today'
				></img>
			</div>
			<div>
				<div className={classes.degree}>
					{isCelsius
						? currentWeatherData?.temperature
						: convertCelsiusToFahrenheit(
								currentWeatherData?.temperature
						  )}
					<span>{isCelsius ? '°C' : '°F'}</span>
				</div>
				<div className={classes.state}>
					{currentWeatherData?.symbolPhrase}
				</div>
				<div className={classes.date}>{`Today • ${convertDate(
					currentWeatherData?.time
				)}`}</div>
				<div>
					<LocationOnIcon className={classes.icon} />
					{locationsData?.name}
				</div>
			</div>
		</div>
	);
};

export default WeatherDetail;
