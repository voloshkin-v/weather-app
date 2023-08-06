import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import getWeather from '../api/getWeather';

import { ICity } from '../types';

interface WeatherInfoProps {
	selectedCity: ICity;
}

const WeatherInfo = ({ selectedCity }: WeatherInfoProps) => {
	const { lat, lon } = selectedCity;

	const { data, isLoading, isError } = useQuery({
		queryKey: ['weather', lat, lon],
		queryFn: () => getWeather(lat, lon),
	});

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Error...</div>;
	}

	console.log(data);
	const { name } = data;

	return (
		<div>
			<h2>Weather in {name}</h2>
			<p>asd</p>
		</div>
	);
};

export default WeatherInfo;
