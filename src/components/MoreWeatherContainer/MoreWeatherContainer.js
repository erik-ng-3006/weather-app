import React from 'react';
import WeatherHighlight from './WeatherHighlight/WeatherHighlight';
import MoreWeatherList from './MoreWeatherList/MoreWeatherList';
import classes from './MoreWeatherContainer.module.css';

const MoreWeatherContainer = () => {
	return (
		<div className={classes.container}>
			<MoreWeatherList />
			<WeatherHighlight />
		</div>
	);
};

export default MoreWeatherContainer;
