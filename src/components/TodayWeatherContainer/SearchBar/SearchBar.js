import React from 'react';
import classes from './SearchBar.module.css';
import { useDispatch } from 'react-redux';
import { navActions } from '../../../store/navSlice';
const SearchBar = () => {
	const dispatch = useDispatch();
	const onClickHandler = () => {
		dispatch(navActions.toggleNavBar());
	};

	return (
		<div className={classes['search-bar']} onClick={onClickHandler}>
			Search for places
		</div>
	);
};

export default SearchBar;
