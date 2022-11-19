import React from 'react';
import classes from './WeatherHighlight.module.css';
import Card from '../../UI/Card';
import { useSelector } from 'react-redux';
import NavigationIcon from '@mui/icons-material/Navigation';
import { setWindDirectionCompass } from '../../../store/locationSlice';

const WeatherHighlight = () => {
	const weatherData = useSelector((state) => state.weather.data);

	const humidityStyle = {
		width: `${weatherData?.relHumidity}%`,
	};

	const windCompassStyle = {
		transform: `rotate(${setWindDirectionCompass(
			weatherData?.windDirString
		)}deg)`,
	};

	return (
		<div className={classes.highlight}>
			<h2>Today’s Highlights </h2>
			<div className={classes['grid-box']}>
				<Card className={classes.card}>
					<h3>Wind status</h3>
					<p>
						{weatherData?.windSpeed} <span>mph</span>
					</p>
					<div>
						<NavigationIcon
							className={classes.icon}
							style={windCompassStyle}
						/>
						<span>{weatherData?.windDirString}</span>
					</div>
				</Card>
				<Card className={classes.card}>
					<h3>Humidity</h3>
					<p>
						{weatherData?.relHumidity}
						<span>%</span>
					</p>
					<div className={classes['flex-box']}>
						<div className={classes['percent-num']}>
							<p>0</p>
							<p>50</p>
							<p>100</p>
						</div>
						<div className={classes['humidity-bar']}>
							<span style={humidityStyle}></span>
						</div>
						<div className={classes.percent}>%</div>
					</div>
				</Card>
				<Card className={classes.card}>
					<h3>Visibility</h3>
					<p>
						{weatherData?.visibility} <span>m</span>
					</p>
				</Card>
				<Card className={classes.card}>
					<h3>Air Pressure</h3>
					<p>
						{weatherData?.pressure} <span>hPa</span>{' '}
					</p>
				</Card>
			</div>
		</div>
	);
};

export default WeatherHighlight;
