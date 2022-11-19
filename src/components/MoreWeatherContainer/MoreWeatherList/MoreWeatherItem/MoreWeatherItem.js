import React from 'react';
import classes from './MoreWeatherItem.module.css';
import Card from '../../../UI/Card';
import { convertDate } from '../../../../store/weatherSlice';
import { useSelector } from 'react-redux';
import { convertCelsiusToFahrenheit } from '../../../../store/weatherSlice';

const MoreWeatherItem = (props) => {
	const tempScale = useSelector((state) => state.weather.tempScale);
	const isCelsius = tempScale === 'c';

	return (
		<Card className={classes['list-item']}>
			<li>
				<h3>{convertDate(props.date)}</h3>
				<img
					src={`/img/${props.img.replaceAll(' ', '')}.png`}
					alt='weather forecast'
				></img>
				<div>
					<p>
						{isCelsius
							? props.maxTemp
							: convertCelsiusToFahrenheit(props.maxTemp)}
						<span>{isCelsius ? '°C' : '°F'}</span>
					</p>
					<p className={classes['min-degree']}>
						{isCelsius
							? props.minTemp
							: convertCelsiusToFahrenheit(props.minTemp)}
						<span>{isCelsius ? '°C' : '°F'}</span>
					</p>
				</div>
			</li>
		</Card>
	);
};

export default MoreWeatherItem;
