import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Navbar from './components/NavBar/Navbar';
import { HomeScreen } from './screens/HomeScreen/HomeScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartScreen } from './screens/CartScreen/CartScreen';
import { RegisterScreen } from './screens/RegisterScreen/RegisterScreen';
import { LoginScreen } from './screens/LoginScreen/LoginScreen';

export const App = () => (
	<div>
		<ChakraProvider theme={theme}>
			<Box h="150%">
				<ColorModeSwitcher position="fixed" bottom={0} right={0} />
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route path="/" element={<HomeScreen />} />
						<Route path="/cart" element={<CartScreen />} />
						<Route path="/register" element={<RegisterScreen />} />
						<Route path="/login" element={<LoginScreen/> }/>
					</Routes>
				</BrowserRouter>
			</Box>
		</ChakraProvider>
	</div>
);
