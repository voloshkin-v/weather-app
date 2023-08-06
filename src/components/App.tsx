import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

import { useThemeMode } from '../hooks/useThemeMode';

import Header from './Header';
import ThemeToggle from './ThemeToggle';
import WeatherInfo from './WeatherInfo';
import Search from './Search';
import SearchHistory from './SearchHistory';

import { ICity } from '../types';
import getWeather from '../api/getWeather';

const App = () => {
	const [history, setHistory] = useState<ICity[]>([]);
	const [selectedCity, setSelectedCity] = useState<null | ICity>(null);
	const { theme, handleThemeSwitch } = useThemeMode('dark');

	const handleHistory = (city: ICity) => {
		setHistory((prevHistory) => [city, ...prevHistory]);
	};

	return (
		<div className="p-5 min-h-screen text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 text-lg/6">
			<Header>
				<Search onSelect={setSelectedCity} onHistory={handleHistory} />
				<ThemeToggle theme={theme} onThemeSwitch={handleThemeSwitch} />
			</Header>

			<main className="mx-auto mt-40 max-w-7xl flex mb-4">
				{selectedCity && <WeatherInfo selectedCity={selectedCity} />}
				{/* <SearchHistory history={history} /> */}
			</main>
		</div>
	);
};

export default App;
