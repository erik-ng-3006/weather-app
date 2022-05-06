import Footer from './components/Footer/Footer';
import MoreWeatherContainer from './components/MoreWeatherContainer/MoreWeatherContainer';
import NavBar from './components/NavBar/NavBar';
import TodayWeatherContainer from './components/TodayWeatherContainer/TodayWeatherContainer';
import { useSelector, useDispatch } from 'react-redux';
import classes from './App.module.css';
import { useEffect } from 'react';
import { fetchWeatherData } from './store/weatherSlice';

function App() {
	const isShownNavBar = useSelector((state) => state.nav.isShownNavBar);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchWeatherData());
	}, [dispatch]);

	return (
		<main className={classes.app}>
			{isShownNavBar && <NavBar />}
			<TodayWeatherContainer />
			<MoreWeatherContainer />
			<Footer />
		</main>
	);
}

export default App;
