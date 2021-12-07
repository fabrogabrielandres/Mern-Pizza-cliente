import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Navbar from './components/NavBar/Navbar';
import { HomeScreen } from './screens/HomeScreen/HomeScreen';
import { ReactElement } from 'react';

export const App = (): ReactElement => (
	<ChakraProvider theme={theme}>
		<Box position="relative" h="100vh">
			<Navbar />
			<HomeScreen />
			<ColorModeSwitcher position="absolute" bottom={0} right={0} margin={[ 10, 15, 10, 15 ]} />
		</Box>
	</ChakraProvider>
);
