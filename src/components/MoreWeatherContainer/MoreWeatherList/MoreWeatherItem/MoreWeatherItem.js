import React from 'react';
import classes from './MoreWeatherItem.module.css';
import Card from '../../../UI/Card';
import { convertDate } from '../../../../store/weatherSlice';
import { setImageUrl } from '../../../../store/weatherSlice';
const MoreWeatherItem = (props) => {
	return (
		<Card key={props.id} className={classes['list-item']}>
			<li>
				<h3>{convertDate(props.date)}</h3>
				<img src={setImageUrl(props.img)} alt='weather forecast'></img>
				<div>
					<p>
						{Math.round(props.maxTemp)}
						<span>°C</span>
					</p>
					<p className={classes['min-degree']}>
						{Math.round(props.minTemp)}
						<span>°C</span>
					</p>
				</div>
			</li>
		</Card>
	);
};

export default MoreWeatherItem;
