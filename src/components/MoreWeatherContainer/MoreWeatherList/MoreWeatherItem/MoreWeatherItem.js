import React from 'react';
import classes from './MoreWeatherItem.module.css';
import Card from '../../../UI/Card';
import { convertDate } from '../../../../store/weatherSlice';
import { setImageUrl } from '../../../../store/weatherSlice';
import { useSelector } from 'react-redux';
import { convertCelsiusToFahrenheit } from '../../../../store/weatherSlice';

const MoreWeatherItem = (props) => {
	const minTemp = Math.round(props.minTemp);
	const maxTemp = Math.round(props.maxTemp);
	const tempScale = useSelector((state) => state.weather.tempScale);
	const isCelsius = tempScale === 'c';

	return (
		<Card key={props.id} className={classes['list-item']}>
			<li>
				<h3>{convertDate(props.date)}</h3>
				<img src={setImageUrl(props.img)} alt='weather forecast'></img>
				<div>
					<p>
						{isCelsius
							? maxTemp
							: convertCelsiusToFahrenheit(maxTemp)}
						<span>{isCelsius ? '°C' : '°F'}</span>
					</p>
					<p className={classes['min-degree']}>
						{isCelsius
							? minTemp
							: convertCelsiusToFahrenheit(minTemp)}
						<span>{isCelsius ? '°C' : '°F'}</span>
					</p>
				</div>
			</li>
		</Card>
	);
};

export default MoreWeatherItem;
