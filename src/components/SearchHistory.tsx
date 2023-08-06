// import { ICity } from '../types';
// import SearchItem from './SearchItem';

import { ICity } from '../types';

// interface SearchHistoryProps {
// 	history: ICity[];
// 	onSelectCity: (city: ICity) => void;
// 	onRemove: (city: ICity) => void;
// }

// const SearchHistory = ({
// 	history,
// 	onSelectCity,
// 	onRemove,
// }: SearchHistoryProps) => {
// 	return (
// 		<ul className="absolute mt-1.5 flex flex-wrap gap-x-4 gap-y-0.5 text-base">
// 			{history.map((city, i) => {
// 				return (
// 					<SearchItem
// 						key={i}
// 						option={city}
// 						onSelectCity={onSelectCity}
// 					>
// 						<button onClick={() => onRemove(city)}>❌</button>
// 					</SearchItem>
// 				);
// 			})}
// 		</ul>
// 	);
// };

// export default SearchHistory;

interface SearchHistoryProps {
	history: ICity[];
}

const SearchHistory = ({ history }: SearchHistoryProps) => {
	console.log(history);
	return (
		<aside>
			<h2>History</h2>

			<ul>
				{history?.map((item, i) => (
					<li key={i}>1</li>
				))}
			</ul>
		</aside>
	);
};

export default SearchHistory;
