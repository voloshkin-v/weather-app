import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { useDebounce } from '../hooks/useDebounce';
import { getGeocodingOptions } from '../api/getGeocodingOptions';

import { ICity } from '../types';

import SearchDropdown from './SearchDropdown';
import Loader from './loader/Loader';

interface SearchProps {
	onSelect: (city: ICity) => void;
	onHistory: (city: ICity) => void;
}

const Search = ({ onSelect, onHistory }: SearchProps) => {
	const [searchQuery, setSearchQuery] = useState('');
	const debouncedSearchTerm = useDebounce(searchQuery, 1000);

	const { data, isError, isInitialLoading } = useQuery({
		queryKey: ['search', debouncedSearchTerm],
		queryFn: () => {
			if (!debouncedSearchTerm) {
				return [];
			}

			return getGeocodingOptions(debouncedSearchTerm);
		},
		enabled: !!debouncedSearchTerm,
	});

	const handleSelectCity = (city: ICity) => {
		setSearchQuery('');

		onHistory(city);
		onSelect(city);

		// const cityIndex = history.findIndex(
		// 	(item) => item.lat === city.lat && item.lon === city.lon
		// );

		// if (cityIndex !== -1) {
		// 	const sortedHistory = [
		// 		city,
		// 		...history.slice(0, cityIndex),
		// 		...history.slice(cityIndex + 1),
		// 	];

		// 	setHistory(sortedHistory);
		// 	onSelectCity(city);

		// 	return;
		// }

		// setHistory((prev) => [city, ...prev]);
	};

	return (
		<div className="relative flex-1">
			<input
				className={`w-full p-3 pr-16 rounded-md ring-1 ring-slate-900/10 shadow-sm hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700`}
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
				placeholder="Search for a city, country or region..."
			/>

			{isInitialLoading && <Loader />}

			{isError && <p className="absolute mt-1">Error!</p>}

			{!isError && data?.length === 0 && (
				<p className="absolute mt-1">Nothing Found!</p>
			)}

			{data && data?.length > 0 && searchQuery.length > 0 && (
				<SearchDropdown options={data} onSelect={handleSelectCity} />
			)}
		</div>
	);
};

export default Search;
