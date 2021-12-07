import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Navbar from './components/NavBar/Navbar';
import { HomeScreen } from './screens/HomeScreen/HomeScreen';
import { ReactElement } from 'react';

export const App = (): ReactElement => (
	<ChakraProvider theme={theme}>
		<Box h="150%">
			<Navbar />
			<HomeScreen />
			<ColorModeSwitcher position="fixed" bottom={0} right={0}/>
		</Box>
	</ChakraProvider>
);
