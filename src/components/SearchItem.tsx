import { ICity } from '../types';

interface SearchItemProps {
	option: ICity;
	onSelect: (city: ICity) => void;
}

const SearchItem = ({ onSelect, option }: SearchItemProps) => {
	const { country, name, state } = option;

	return (
		<li className="flex gap-1">
			<button
				onClick={() => onSelect(option)}
				className="text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
			>
				{name}, {country}
				<em className="text-base">{state && ` State: (${state})`}</em>
			</button>
		</li>
	);
};

export default SearchItem;
