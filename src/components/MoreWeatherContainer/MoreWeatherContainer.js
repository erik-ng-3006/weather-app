import React from 'react';
import WeatherHighlight from './WeatherHighlight/WeatherHighlight';
import MoreWeatherList from './MoreWeatherList/MoreWeatherList';
import classes from './MoreWeatherContainer.module.css';
import ConvertTempTypeButtons from './ConvertTempTypeButtons/ConvertTempTypeButtons';

const MoreWeatherContainer = () => {
	return (
		<div className={classes.container}>
			<ConvertTempTypeButtons />
			<MoreWeatherList />
			<WeatherHighlight />
		</div>
	);
};

export default MoreWeatherContainer;
