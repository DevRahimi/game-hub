import {
	Menu,
	MenuButton,
	Button,
	MenuList,
	MenuItem,
} from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

interface Props {
	onSelectSortOrder: (sortOrder: string) => void;
	sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
	const sortOrders = [
		{ value: '', label: 'Relevance' },
		{ value: '-added', label: 'Date added' },
		{ value: 'name', label: 'Name' },
		{ value: '-released', label: 'Release date' },
		{ value: '-metacritic', label: 'Poplarity' },
		{ value: '-rating', label: 'Average rating' },
	];

	const currentSortOrder = sortOrders.find(sort => sort.value === sortOrder);

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				Order by: {currentSortOrder?.label || 'Relevance'}
			</MenuButton>
			<MenuList>
				{sortOrders.map(sort => (
					<MenuItem
						onClick={() => onSelectSortOrder(sort.value)}
						key={sort.value}
						value={sort.value}
					>
						{sort.label}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default SortSelector;
