import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Navbar from './components/NavBar/Navbar';
import { HomeScreen } from './screens/HomeScreen/HomeScreen';
import { ReactElement } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartScreen } from './screens/CartScreen/CartScreen';

export const App = (): ReactElement => (
	<>
	<ChakraProvider theme={theme}>
		<Box h="150%">
			<ColorModeSwitcher position="fixed" bottom={0} right={0} />
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<HomeScreen />} />
					<Route path="/cart" element={<CartScreen />} />
				</Routes>
			</BrowserRouter>
		</Box>
	</ChakraProvider>
	</>
);
