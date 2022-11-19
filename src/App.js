import Footer from './components/Footer/Footer';
import MoreWeatherContainer from './components/MoreWeatherContainer/MoreWeatherContainer';
import NavBar from './components/NavBar/NavBar';
import TodayWeatherContainer from './components/TodayWeatherContainer/TodayWeatherContainer';
import { useDispatch, useSelector } from 'react-redux';
import classes from './App.module.css';
import { weatherActions } from './store/weatherSlice';
import {
	useGetLocationByNameQuery,
	useGetCurrentWeatherQuery,
} from './store/weatherSlice';
import LoadingSpinner from './components/UI/LoadingSpinner';
import { useEffect } from 'react';

function App() {
	const isShownNavBar = useSelector((state) => state.ui.isShownNavBar);
	const dispatch = useDispatch();

	const { data: locationData } = useGetLocationByNameQuery('prague');
	const { data: currentWeatherData, isLoading } =
		useGetCurrentWeatherQuery('103067696');

	useEffect(() => {
		dispatch(weatherActions.setWeatherData(currentWeatherData?.current));
		dispatch(weatherActions.setLocation(locationData?.locations[0]));
	}, [currentWeatherData, locationData, dispatch]);

	return (
		<main className={classes.app}>
			{isLoading && <LoadingSpinner />}
			{isShownNavBar && <NavBar />}
			<TodayWeatherContainer />
			<MoreWeatherContainer />
			<Footer />
		</main>
	);
}

export default App;
