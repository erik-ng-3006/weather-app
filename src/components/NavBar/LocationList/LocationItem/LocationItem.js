import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import classes from './LocationItem.module.css';
import { fetchWeatherData } from '../../../../store/weatherSlice';
import { useDispatch } from 'react-redux';
import { navActions } from '../../../../store/navSlice';

const LocationItem = ({ name, id }) => {
	const dispatch = useDispatch();
	const onClickHandler = () => {
		dispatch(fetchWeatherData(id));
		dispatch(navActions.toggleNavBar());
	};

	return (
		<li className={classes['list-item']} onClick={onClickHandler}>
			<p>{name}</p>
			<ArrowForwardIosIcon className={classes.icon} />
		</li>
	);
};

export default LocationItem;
