import { HStack, IconButton, useColorMode } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ColorModeSwitch = () => {
	const { toggleColorMode, colorMode } = useColorMode();

	return (
		<HStack>
			{/* <Switch colorScheme='green' isChecked={colorMode === 'dark'} onChange={toggleColorMode} /> */}
			<IconButton
				borderRadius='50%'
				aria-label={colorMode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
				icon={colorMode === 'dark' ? <FaSun /> : <FaMoon />}
				onClick={toggleColorMode}
			/>
		</HStack>
	);
};

export default ColorModeSwitch;
