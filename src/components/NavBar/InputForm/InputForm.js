import React from 'react';
import classes from './InputForm.module.css';
import SearchIcon from '@mui/icons-material/Search';
const InputForm = () => {
	const formSubmitHandler = (e) => {
		e.preventDefault();
	};

	return (
		<form className={classes.form} onSubmit={formSubmitHandler}>
			<div className={classes['form-control']}>
				<SearchIcon className={classes.icon} />
				<input placeholder='search location' />
			</div>
			<button>Search</button>
		</form>
	);
};

export default InputForm;
