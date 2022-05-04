import React from 'react';
import classes from './LocationList.module.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const LocationList = () => {
	return (
		<ul className={classes.list}>
			<li>
				<p>London</p>
				<ArrowForwardIosIcon className={classes.icon} />
			</li>
			<li>
				<p>Barcelona</p>
				<ArrowForwardIosIcon className={classes.icon} />
			</li>
			<li>
				<p>Long Beach</p>
				<ArrowForwardIosIcon className={classes.icon} />
			</li>
		</ul>
	);
};

export default LocationList;
