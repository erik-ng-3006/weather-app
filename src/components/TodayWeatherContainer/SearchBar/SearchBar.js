import React from 'react';
import classes from './SearchBar.module.css';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../../store/uiSlice';
const SearchBar = () => {
	const dispatch = useDispatch();
	const onClickHandler = () => {
		dispatch(uiActions.toggleNavBar());
	};

	return (
		<div className={classes['search-bar']} onClick={onClickHandler}>
			Search for places
		</div>
	);
};

export default SearchBar;
