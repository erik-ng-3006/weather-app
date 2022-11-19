import React, { useState } from 'react';
import classes from './InputForm.module.css';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import {
	useGetLocationByNameQuery,
	weatherActions,
} from '../../../store/weatherSlice';

const InputForm = () => {
	const [enteredLocation, setEnteredLocation] = useState();
	const [skip, setSkip] = useState(true);
	const dispatch = useDispatch();
	const { data } = useGetLocationByNameQuery(enteredLocation, { skip });

	const inputChangeHandler = (e) => {
		setSkip(false);
		setEnteredLocation(e.target.value);
	};

	const formSubmitHandler = (e) => {
		e.preventDefault();
		dispatch(weatherActions.setSearchedLocations(data?.locations));
	};

	return (
		<form className={classes['form-box']} onSubmit={formSubmitHandler}>
			<div className={classes['form-control']}>
				<SearchIcon className={classes.icon} />
				<input
					placeholder='search location'
					value={enteredLocation}
					onChange={inputChangeHandler}
				/>
			</div>
			<button type='submit'>Search</button>
		</form>
	);
};

export default InputForm;
