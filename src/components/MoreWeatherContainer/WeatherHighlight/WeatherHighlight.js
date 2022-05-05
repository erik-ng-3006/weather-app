import React from 'react';
import classes from './WeatherHighlight.module.css';
import Card from '../../UI/Card';
import { useSelector } from 'react-redux';

const WeatherHighlight = () => {
	const weatherData = useSelector((state) => state.weather.data);
	const transformedWeatherData = weatherData[0] || {};
	const style = {
		width: `${transformedWeatherData.humidity}%`,
	};

	return (
		<div className={classes.highlight}>
			<h2>Today’s Highlights </h2>
			<div className={classes['grid-box']}>
				<Card className={classes.card}>
					<h3>Wind status</h3>
					<p>
						{Math.round(transformedWeatherData['wind_speed'])}
						<span>mph</span>
					</p>
					<div>
						{transformedWeatherData['wind_direction_compass']}
					</div>
				</Card>
				<Card className={classes.card}>
					<h3>Humidity</h3>
					<p>
						{transformedWeatherData.humidity}
						<span>%</span>
					</p>
					<div className={classes['flex-box']}>
						<div className={classes['percent-num']}>
							<p>0</p>
							<p>50</p>
							<p>100</p>
						</div>
						<div className={classes['humidity-bar']}>
							<span style={style}></span>
						</div>
						<div className={classes.percent}>%</div>
					</div>
				</Card>
				<Card className={classes.card}>
					<h3>Visibility</h3>
					<p>
						{Math.round(transformedWeatherData.visibility)}{' '}
						<span>miles</span>
					</p>
				</Card>
				<Card className={classes.card}>
					<h3>Air Pressure</h3>
					<p>
						{Math.round(transformedWeatherData['air_pressure'])}{' '}
						<span>mb</span>{' '}
					</p>
				</Card>
			</div>
		</div>
	);
};

export default WeatherHighlight;
