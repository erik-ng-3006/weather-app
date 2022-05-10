import React from 'react';
import classes from './ConvertTempTypeButtons.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { weatherActions } from '../../../store/weatherSlice';

const ConvertTempTypeButtons = () => {
	const tempScale = useSelector((state) => state.weather.tempScale);
	const isCelsius = tempScale === 'c';
	const dispatch = useDispatch();

	const celsiusButtonHandler = () => {
		dispatch(weatherActions.setTempScale('c'));
	};

	const fahrenheitButtonHandler = () => {
		dispatch(weatherActions.setTempScale('f'));
	};
	return (
		<div className={classes.buttons}>
			<button
				className={isCelsius ? classes.active : undefined}
				onClick={celsiusButtonHandler}
			>
				℃
			</button>
			<button
				className={!isCelsius ? classes.active : undefined}
				onClick={fahrenheitButtonHandler}
			>
				℉
			</button>
		</div>
	);
};

export default ConvertTempTypeButtons;
