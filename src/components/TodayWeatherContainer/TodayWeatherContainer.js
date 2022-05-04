import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import WeatherDetail from './WeatherDetail/WeatherDetail';
import classes from './TodayWeatherContainer.module.css';

const TodayWeatherContainer = () => {
	return (
		<div className={classes.container}>
			<div className={classes.flex}>
				<SearchBar />
				<div className={classes.icon}>
					<MyLocationIcon />
				</div>
			</div>
			<WeatherDetail />
		</div>
	);
};

export default TodayWeatherContainer;
