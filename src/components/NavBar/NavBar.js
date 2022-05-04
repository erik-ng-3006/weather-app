import React from 'react';
import classes from './NavBar.module.css';
import CloseIcon from '@mui/icons-material/Close';
import LocationList from './LocationList/LocationList';
import InputForm from './InputForm/InputForm';
import { useDispatch } from 'react-redux';
import { navActions } from '../../store/navSlice';
const NavBar = () => {
	const dispatch = useDispatch();

	const clickHandler = () => {
		dispatch(navActions.toggleNavBar());
	};
	return (
		<div className={classes.nav}>
			<CloseIcon className={classes.icon} onClick={clickHandler} />
			<InputForm />
			<LocationList />
		</div>
	);
};

export default NavBar;
