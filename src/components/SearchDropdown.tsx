import SearchItem from './SearchItem';

import { ICity } from '../types';

interface SearchDropdownProps {
	options: ICity[];
	onSelect: (city: ICity) => void;
}

const SearchDropdown = ({ options, onSelect }: SearchDropdownProps) => {
	return (
		<ul className="bg-white absolute z-10 top-full mt-3 rounded-md p-3 ring-1 ring-slate-900/10 shadow-sm dark:bg-slate-800 dark:highlight-white/5">
			{options.map((option, i) => (
				<SearchItem key={i} option={option} onSelect={onSelect} />
			))}
		</ul>
	);
};

export default SearchDropdown;
