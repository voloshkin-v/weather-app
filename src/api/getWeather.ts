const getWeather = async (lat: number, lon: number) => {
	const response = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=77bc0b92c216477f891b08c2720b444d`
	);

	if (!response.ok) {
		throw new Error('Network response was not ok');
	}

	const data = await response.json();

	return data;
};

export default getWeather;
