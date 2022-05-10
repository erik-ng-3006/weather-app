import Footer from './components/Footer/Footer';
import MoreWeatherContainer from './components/MoreWeatherContainer/MoreWeatherContainer';
import NavBar from './components/NavBar/NavBar';
import TodayWeatherContainer from './components/TodayWeatherContainer/TodayWeatherContainer';
import { useSelector, useDispatch } from 'react-redux';
import classes from './App.module.css';
import { useEffect } from 'react';
import { fetchWeatherData } from './store/weatherSlice';
import LoadingSpinner from './components/UI/LoadingSpinner';

function App() {
	const isShownNavBar = useSelector((state) => state.ui.isShownNavBar);
	const isLoading = useSelector((state) => state.ui.isLoading);
	//const curLocation = useSelector((state) => state.location.curLocation);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchWeatherData());
	}, [dispatch]);

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
