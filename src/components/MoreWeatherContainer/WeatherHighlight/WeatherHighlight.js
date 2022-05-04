import React from 'react';
import classes from './WeatherHighlight.module.css';
import Card from '../../UI/Card';

const WeatherHighlight = () => {
	return (
		<div className={classes.highlight}>
			<h2>Today’s Highlights </h2>
			<div className={classes['grid-box']}>
				<Card className={classes.card}>
					<h3>Wind status</h3>
					<p>
						7<span>mph</span>
					</p>
					<div>WSW</div>
				</Card>
				<Card className={classes.card}>
					<h3>Humidity</h3>
					<p>
						84<span>%</span>
					</p>
					<div>....</div>
				</Card>
				<Card className={classes.card}>
					<h3>Visibility</h3>
					<p>
						6,4 <span>miles</span>
					</p>
				</Card>
				<Card className={classes.card}>
					<h3>Air Pressure</h3>
					<p>
						998 <span>mb</span>{' '}
					</p>
				</Card>
			</div>
		</div>
	);
};

export default WeatherHighlight;
