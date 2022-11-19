import React from 'react';
import { useSelector } from 'react-redux';
import LocationItem from './LocationItem/LocationItem';
import classes from './LocationList.module.css';

const LocationList = () => {
	const locations = useSelector((state) => state.weather.searchedLocations);
	//console.log(locations);
	let content;

	if (locations?.length === 0) {
		content = <li className='center'>No location found!</li>;
	} else {
		content = locations
			?.map((location) => {
				return (
					<LocationItem
						id={location.id}
						name={location.name}
						key={location.id}
						country={location.country}
					/>
				);
			})
			?.filter((location) => location);
	}

	return <ul className={classes.list}>{content}</ul>;
};

export default LocationList;
