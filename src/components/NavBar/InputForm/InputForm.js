import React from 'react';
import classes from './InputForm.module.css';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { searchLocations } from '../../../store/locationSlice';

const InputForm = () => {
	const inputRef = useRef('');
	const dispatch = useDispatch();

	const formSubmitHandler = (e) => {
		e.preventDefault();
		dispatch(searchLocations(inputRef.current.value));
	};

	return (
		<form className={classes['form-box']} onSubmit={formSubmitHandler}>
			<div className={classes['form-control']}>
				<SearchIcon className={classes.icon} />
				<input placeholder='search location' ref={inputRef} />
			</div>
			<button>Search</button>
		</form>
	);
};

export default InputForm;
