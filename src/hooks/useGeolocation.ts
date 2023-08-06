import { useState, useEffect } from 'react';

export const useGeolocation = () => {
	const [position, setPosition] = useState({});

	useEffect(() => {
		if (!navigator.geolocation) {
			return;
		}

		navigator.geolocation.getCurrentPosition((position) => {
			const { latitude, longitude } = position.coords;

			setPosition({
				latitude,
				longitude,
			});
		});
	}, []);

	return { position };
};
