import { useState, useEffect } from 'react';

export enum ThemeMode {
	LIGHT = 'light',
	DARK = 'dark',
}

export const useThemeMode = (customClass: string) => {
	const [theme, setTheme] = useState<ThemeMode>(() => {
		const localStorageTheme = localStorage.getItem('theme');

		if (localStorageTheme) {
			return localStorageTheme === ThemeMode.DARK
				? ThemeMode.DARK
				: ThemeMode.LIGHT;
		}

		return window.matchMedia('(prefers-color-scheme: dark)').matches
			? ThemeMode.DARK
			: ThemeMode.LIGHT;
	});

	useEffect(() => {
		localStorage.setItem('theme', theme);

		if (theme === ThemeMode.DARK) {
			document.documentElement.classList.add(customClass);
		} else {
			document.documentElement.classList.remove(customClass);
		}
	}, [theme, customClass]);

	const handleThemeSwitch = () => {
		setTheme(theme === ThemeMode.DARK ? ThemeMode.LIGHT : ThemeMode.DARK);
	};

	return { theme, handleThemeSwitch };
};
