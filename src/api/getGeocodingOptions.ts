import { ICity } from '../types';

export const getGeocodingOptions = async (query: string) => {
	const response = await fetch(
		`http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=77bc0b92c216477f891b08c2720b444d`
	);

	if (!response.ok) {
		throw new Error('Network response was not ok');
	}

	const data: ICity[] = await response.json();

	return data;
};
