import React from 'react';
import classes from './LoadingSpinner.module.css';

const LoadingSpinner = () => {
	return (
		<div className={classes['loading-container']}>
			<div className={classes['lds-dual-ring']}></div>
			<h3>Loading...</h3>
		</div>
	);
};

export default LoadingSpinner;
