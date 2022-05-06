import React from 'react';
import { useSelector } from 'react-redux';
import LocationItem from './LocationItem/LocationItem';
import classes from './LocationList.module.css';

const LocationList = () => {
	const locations = useSelector((state) => state.location.locations);
	return (
		<ul className={classes.list}>
			{locations.map((location) => {
				return (
					<LocationItem
						id={location.id}
						name={location.name}
						key={location.id}
					/>
				);
			})}
		</ul>
	);
};

export default LocationList;
